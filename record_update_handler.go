// record_update_handler.go

package main

import (
	"github.com/pocketbase/pocketbase/apis"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/models"
)

func HandleRecordUpdate(e *core.RecordUpdateEvent) error {

	// ignore checks if an admin is logged in
	admin, _ := e.HttpContext.Get(apis.ContextAdminKey).(*models.Admin)
	if admin != nil {
		return nil
	}

	//  before updating tasks  tasks collecton
	if e.Record.Collection().Name == "tasks" {

		// check for the user logged in
		authRecord, _ := e.HttpContext.Get(apis.ContextAuthRecordKey).(*models.Record)
		if authRecord == nil {
			return apis.NewForbiddenError("Only auth records can access this endpoint", nil)
		}

		// validating that mangers only are approving/rejecting
		if authRecord.GetString("type") != "manager" &&
			(e.Record.GetString("status") == "approved" || e.Record.GetString("status") == "rejected") {
			return apis.NewBadRequestError("Approving/Rejecting is a Manager only action.", nil)
		}
		// validating that cashiers only are funding
		if authRecord.GetString("type") != "cashier" && e.Record.GetString("status") == "funded" {
			return apis.NewBadRequestError("Funding is a Cashier only action.", nil)
		}
	}

	//  checks for staff_details collection
	if e.Record.Collection().Name == "staff_details" {

		authRecord, _ := e.HttpContext.Get(apis.ContextAuthRecordKey).(*models.Record)
		if authRecord == nil {
			return apis.NewForbiddenError("Only auth records can access this endpoint", nil)
		}

		// validating that mangers only are approving/rejecting
		if authRecord.GetString("type") != "manager" &&
			(e.Record.GetString("leave_request_status") == "approved" ||
				e.Record.GetString("leave_request_status") == "rejected") {
			return apis.NewBadRequestError("Approving/Rejecting is a Manager only action.", nil)
		}

	}

	return nil
}
