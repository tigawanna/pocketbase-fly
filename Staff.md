# The Staff project


consisting of collections

- staff:
```ts
export interface Staff {
  avatar: string
  collectionId: string
  collectionName: string
  created: string
  email: string
  emailVisibility: boolean
  id: string
  name: string
  type: string
  updated: string
  username: string
  verified: boolean
  expand:{}
}
```
- staff_details : Used to store the staff laeve details
```ts
export interface StaffLeaveResponse {
    id: string
    collectionId: string
    collectionName: string
    created: string
    updated: string

    leave_type: "sick" | "annual" | "maternity" | "other";
    leave_reason: string
    leave_start: string
    leave_end: string
    leave_requested_by: string
    leave_approved_by: string
    leave_approved_on?: string

    leave_rejected_on?: string
    leave_rejected_by?: string


    leave_request_status: "approved" | "rejected" | "pending";
    remaining_leave_days: number
    remaining_sick_leave_days: number

    expand:StaffLeaveResponseExpand
}

interface StaffLeaveResponseExpand{
    leave_approved_by:StaffResponse;
    leave_requested_by:StaffResponse;
}

```

- tasks : stores the team tasks
```ts

export interface TasksResponse {
  id: string
  collectionId: string
  collectionName: string
  created: string
  updated: string
  

  title: string
  description: string
  type:"todo" |"repairs" | "maintenance" | "recurring" | "other";
  status: "created" | "approved" | "funded" |"in_progress" | "completed" | "rejected";
  frequency?:"once"|"daily"|"weekly"|"monthly"|"yearly"|"never"

  created_by: string
  updated_by?: string

  approved_on?: string
  approved_by?: string

  funded_on?: string
  funded_by?: string
  marked_in_progress_on?:string
  rejected_on?:string

  
  completed_on?: string
  marked_completed_by?: string
  rejected_by?:string
  marked_in_progress_by?:string

  
  quotation?: string
  deadline?: string
  should_email:boolean

  expand?:StaffExpand
}

interface StaffExpand{
  created_by:Staff;
  rejected_by:Staff;
  funded_by?:Staff;
  approved_by?:Staff;
  marked_in_progress_by?: Staff;
  marked_completed_by?:Staff;

}

```


[record_update_handler](record_update_handler.go) : to validate
- user exists 
- tasks
    - that updating to approve/reject status can only be doneby users of type manager
    - that updating to funding status can only be done by cashier

[record_create_handler](record_create_handler.go) to validate
- user exists 
- staff_details
    - that user has no pending leaves before requesting for a new one
