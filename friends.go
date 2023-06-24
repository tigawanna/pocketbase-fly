package main

import (
	"fmt"
	"net/http"

	"github.com/labstack/echo/v5"
	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
)

// CustomPostRoute  defines the HTTP route for getting custom posts
// Define the CustomFriend struct outside of the function
type CustomFriend struct {
	FriendshipId      string `db:"friendship_id" json:"friendship_id"`
	Created           string `db:"created" json:"created"`
	Updated           string `db:"updated" json:"updated"`
	UserA             string `db:"user_a" json:"user_a"`
	UserB             string `db:"user_b" json:"user_b"`
	UserAFollowsUserB string `db:"user_a_follow_user_b" json:"user_a_follow_user_b"`
	UserBFollowsUserA string `db:"user_b_follow_user_a" json:"user_b_follow_user_a"`
	FollowingMe       string `db:"following_me" json:"following_me"`
	FollowedByMe      string `db:"followed_by_me" json:"followed_by_me"`
}

// CustomPostRoute  defines the HTTP route for getting custom posts
func CustomFriendsRoute(app *pocketbase.PocketBase) echo.Route {
	return echo.Route{
		Method: http.MethodGet,
		Path:   "/custom_friends",
		Handler: func(c echo.Context) error {
			result := []*CustomFriend{} // Use the new struct type
			queryErr := app.Dao().DB().NewQuery(` 
SELECT 
    fr.id friendship_id,
    fr.created created,
    fr.updated updated,
    fr.user_a user_a,
    fr.user_b user_b,
    fr.user_a_follow_user_b user_a_follow_user_b,
    fr.user_b_follow_user_a user_b_follow_user_a,
    IFNULL(
    (SELECT id FROM friends 
    WHERE 
   ((user_a = {:logged_in} 
		AND 
	(user_b = fr.user_a or user_b = fr.user_b)) and user_b_follow_user_a = "yes") 
    or
    ((user_b = {:logged_in} 
		AND
	(user_a = fr.user_a or user_a = fr.user_b)) and user_a_follow_user_b = "yes" )
    ),'no') as following_me,

    IFNULL(
    (SELECT id FROM friends 
    WHERE 
   ((user_a = {:logged_in} 
		AND
	(user_b = fr.user_a or user_b = fr.user_b)) and user_a_follow_user_b = "yes") 
    or
    ((user_b = {:logged_in} 
		AND
	 (user_a = fr.user_a or user_a = fr.user_b)) and user_b_follow_user_a = "yes" )
    ),'no') as followed_by_me

FROM friends as fr
WHERE (fr.created < {:created} OR (fr.created = {:created} AND fr.id < {:id})) 
ORDER BY fr.created DESC, fr.id DESC
LIMIT {:limit}

`).Bind(dbx.Params{
				"logged_in": c.QueryParam("logged_in"),
				"id":        c.QueryParam("id"),
				"created":   c.QueryParam("created"),
				"limit":     c.QueryParam("limit"),
			}).All(&result)

			if queryErr != nil {
				fmt.Print("\n")
				return apis.NewBadRequestError("Failed to fetch custom friends ", queryErr)
			}
			return c.JSON(200, result)
		},
		Middlewares: []echo.MiddlewareFunc{apis.ActivityLogger(app)},
		Name:        "",
	}
}
