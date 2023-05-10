package main

import (
	"net/http"

	"github.com/labstack/echo/v5"
	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
)

// CustomNotificationsRoute defines the HTTP route for getting custom posts
func CustomNotificationsRoute(app *pocketbase.PocketBase) echo.Route {
	return echo.Route{
		Method: http.MethodGet,
		Path:   "/custom_notifications",
		Handler: func(c echo.Context) error {
            
			// result := []*struct {
			// 	CreatorId    string `db:"creator_id" json:"creator_id"`
			// 	CreatorName  string `db:"creator_name" json:"creator_name"`
			// 	CreatorImage string `db:"creator_image" json:"creator_image"`

			// 	PostId     string `db:"post_id" json:"post_id"`
			// 	PostBody   string `db:"post_body" json:"post_body"`
			// 	PostMedia  string `db:"post_media" json:"post_media"`
			// 	PostParent string `db:"post_parent" json:"post_parent"`
			// 	PostDepth  string `db:"post_depth" json:"post_depth"`

			// 	CreatedAT string `db:"created_at" json:"created_at"`
			// 	Likes     int    `db:"likes" json:"likes"`
			// 	MyLike    string `db:"mylike" json:"mylike"`

			// 	ReactionId string `db:"reaction_id" json:"reaction_id"`
			// 	Replies    int    `db:"replies" json:"replies"`
			// 	MyReply    string `db:"myreply" json:"myreply"`
			// }{}


			var result struct {
				Count          int    `db:"count" json:"count"`
                Created        string `bd:"created" json:"created"`
				Details        string `db:"details" json:"details"`
				ID             string `db:"id" json:"id"`
				ItemID         string `json:"item_id"`
				Name           string `db:"name" json:"name"`
				Source         string `db:"source" json:"source"`
				Type           string `db:"type" json:"type"`
				Updated        string `db:"updated" json:"updated"`
			}




			err := app.Dao().DB().NewQuery(`
            SELECT COUNT(*) AS count, * FROM notifications WHERE created > {:created} ORDER BY created DESC LIMIT 1;
            `).Bind(dbx.Params{
				"created": c.QueryParam("created"),
			}).One(&result)

			if err != nil {
				return apis.NewBadRequestError("Failed to count most recent notifications", err)
			}
			return c.JSON(200, result)
		},
		Middlewares: []echo.MiddlewareFunc{apis.ActivityLogger(app)},
		Name:        "",
	}
}
