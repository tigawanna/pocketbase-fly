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
func CustomBillsRoute(app *pocketbase.PocketBase) echo.Route {
	return echo.Route{
		Method: http.MethodGet,
		Path:   "/monthly_bills",
		Handler: func(c echo.Context) error {
			result := []*struct {
				ShopId   string `db:"shop_id" json:"shop_id"`
				CurrBillID string `db:"curr_bill_id" json:"curr_bill_id"`
				PrevBillID string `db:"prev_bill_id" json:"prev_bill_id"`
				ShopNum  string `db:"shop_number" json:"shop_number"`
				ShopName string `db:"shop_name" json:"shop_name"`
				
				CurrYear string `db:"curr_year" json:"curr_year"`
				CurrMonth string `db:"curr_month" json:"curr_month"`
				PrevYear string `db:"prev_year" json:"prev_year"`
				PrevMonth string `db:"prev_month" json:"prev_month"`

				ListOrder string `db:"list_order" json:"list_order"`
				CurrentElec string `db:"current_elec" json:"current_elec"`
				PreviousElec string `db:"previous_elec" json:"previous_elec"`
				ElecDiff string `db:"elec_diff" json:"elec_diff"`
				CurrentWater string `db:"current_water" json:"current_water"`
				PreviousWater string `db:"previous_water" json:"previous_water"`
				WaterDiff string `db:"water_diff" json:"water_diff"`

			}{}
			queryErr := app.Dao().DB().NewQuery(` 
SELECT
sh.id as shop_id,
IFNULL(curr.id,"blank") as curr_bill_id,
IFNULL(prev.id,"blank") as prev_bill_id,

sh.shop_number as shop_number,
te.name as shop_name,
sh."order" as list_order,

IFNULL(curr.month,0) as curr_month,
IFNULL(prev.month,0) as prev_month,
IFNULL(curr.year,0) as curr_year,
IFNULL(prev.year,0) as prev_year,


IFNULL(curr.elec_readings,0) as current_elec,
IFNULL(prev.elec_readings,0) as previous_elec,
IFNULL((curr.elec_readings - prev.elec_readings),0) elec_diff,
IFNULL(curr.water_readings,0) as current_water,
IFNULL(prev.water_readings,0) as previous_water,
IFNULL((curr.water_readings - prev.water_readings),0)water_diff



FROM shops sh
LEFT JOIN bills as curr
ON curr.shop = sh.id AND curr.month = {:curr_month} AND curr.year = {:curr_year}
LEFT JOIN bills as prev
ON prev.shop = sh.id AND prev.month = {:prev_month} AND prev.year = {:prev_year}
LEFT JOIN tenants te
ON te.id = sh.tenant
WHERE sh.is_vacant = false
ORDER BY sh."order";
							
`).Bind(dbx.Params{
	"curr_year":    c.QueryParam("curr_year"),
	"curr_month":   c.QueryParam("curr_month"),
	"prev_year":    c.QueryParam("prev_year"),
	"prev_month":   c.QueryParam("prev_month"),

			}).All(&result)

			if queryErr != nil {
				fmt.Print("\n")
				return apis.NewBadRequestError("Failed to fetch monthly_biils ", queryErr)
			}
			return c.JSON(200, result)
		},
		Middlewares: []echo.MiddlewareFunc{apis.ActivityLogger(app)},
		Name:        "",
	}
}
