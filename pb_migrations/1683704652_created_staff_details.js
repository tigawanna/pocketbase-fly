migrate((db) => {
  const collection = new Collection({
    "id": "m1ibf55enmz09s6",
    "created": "2023-05-10 07:44:12.264Z",
    "updated": "2023-05-10 07:44:12.264Z",
    "name": "staff_details",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "amgzgsyb",
        "name": "leave_type",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "sick",
            "annual",
            "maternity",
            "other"
          ]
        }
      },
      {
        "system": false,
        "id": "qpiypjda",
        "name": "leave_reason",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dndpvrvi",
        "name": "leave_start",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "nrxd9qje",
        "name": "leave_end",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "098ztc3e",
        "name": "leave_requested_by",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "dlvnttlfiw585jv",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "vxzs46go",
        "name": "leave_approved_by",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "dlvnttlfiw585jv",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "gb5bsf0g",
        "name": "leave_request_status",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "pending",
            "approved",
            "rejected"
          ]
        }
      },
      {
        "system": false,
        "id": "uhbyozvu",
        "name": "remaining_leave_days",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "5oas8t2i",
        "name": "remaining_sick_leave_days",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "ntfblnvy",
        "name": "leave_approved_on",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "@request.auth.id != \"\"",
    "viewRule": "@request.auth.id != \"\"",
    "createRule": "@request.auth.id != \"\"",
    "updateRule": "@request.auth.id !=\"\"",
    "deleteRule": "@request.auth.id = leave_requested_by",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("m1ibf55enmz09s6");

  return dao.deleteCollection(collection);
})
