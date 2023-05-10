package main

import (
	"fmt"
	"time"

	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/models"
)

func OnCreateNotificationHandler(e *core.RecordCreateEvent, app *pocketbase.PocketBase) error {

	admin, _ := e.HttpContext.Get(apis.ContextAdminKey).(*models.Admin)
	if admin != nil {
		return nil
	}
	authRecord, _ := e.HttpContext.Get(apis.ContextAuthRecordKey).(*models.Record)
	if authRecord == nil {
		return apis.NewForbiddenError("Only auth records can access this endpoint", nil)
	}

	collection, err := app.Dao().FindCollectionByNameOrId("notifications")
	if err != nil {
		return err
	}

	start, err := time.Parse("2006-01-02 15:04:05.000Z", e.Record.GetString("leave_start"))
	if err != nil {
		// handle error
	}

	end, err := time.Parse("2006-01-02 15:04:05.000Z", e.Record.GetString("leave_end"))
	if err != nil {
		// handle error
	}

	days := int(end.Sub(start).Hours() / 24)

	// Check for staff_details collection
	if e.Record.Collection().Name == "staff_details" {
	staff_record, _ := app.Dao().FindRecordById("staff", e.Record.GetString("leave_requested_by"))
		record := models.NewRecord(collection)
		record.Set("type", "leave")
		record.Set("name", fmt.Sprintf("%d days leave requested by %s",
		days,
		staff_record.GetString("name")))

		record.Set("details", e.Record.GetString("leave_reason"))
		record.Set("source", e.Record.GetString("leave_requested_by"))
		record.Set("item_id", e.Record.GetString("id"))

		if err := app.Dao().SaveRecord(record); err != nil {
			return err
		}

	}

	if e.Record.Collection().Name == "tasks" {

		record := models.NewRecord(collection)
		record.Set("type", "task")
		record.Set("name", fmt.Sprintf("%s task created by %s", e.Record.GetString("type"),
		authRecord.GetString("name")))

		record.Set("details", e.Record.GetString("description"))
		record.Set("source", e.Record.GetString("created_by"))
		record.Set("item_id", e.Record.GetString("id"))

		if err := app.Dao().SaveRecord(record); err != nil {
			return err
		}

	}

	return nil
}
