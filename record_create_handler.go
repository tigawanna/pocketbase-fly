// record_update_handler.go

package main

import (
	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/models"
)

func HandleRecordCreate(e *core.RecordCreateEvent, app *pocketbase.PocketBase) error {

	// Ignore checks if an admin is logged in
	admin, _ := e.HttpContext.Get(apis.ContextAdminKey).(*models.Admin)
	if admin != nil {
		return nil
	}

	// Check for staff_details collection
	if e.Record.Collection().Name == "staff_details" {

		// Check if the user has requested any leaves with status equal to pending
		authRecord, _ := e.HttpContext.Get(apis.ContextAuthRecordKey).(*models.Record)
		if authRecord == nil {
			return apis.NewForbiddenError("Only auth records can access this endpoint", nil)
		}

		// Check if the user has requested any leaves with status equal to pending
		var total int
		err := app.DB().
			Select("count(*)").
			From("staff_details").
			AndWhere(dbx.HashExp{"leave_request_status": "pending"}).
			AndWhere(dbx.HashExp{"leave_requested_by": authRecord.GetId()}).
			Row(&total)

		if err != nil {
			return err
		}

		if total > 1 {
			return apis.NewBadRequestError("User already has pending leave requests", nil)
		}
	}

	return nil
}
