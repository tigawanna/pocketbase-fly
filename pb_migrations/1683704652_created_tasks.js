migrate((db) => {
  const collection = new Collection({
    "id": "ipamtot35z4hzln",
    "created": "2023-05-10 07:44:12.264Z",
    "updated": "2023-05-10 07:44:12.264Z",
    "name": "tasks",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "y0sqha6o",
        "name": "title",
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
        "id": "izgg4tl4",
        "name": "description",
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
        "id": "zthv4wjs",
        "name": "type",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "todo",
            "repairs",
            "maintenance",
            "recurring",
            "other"
          ]
        }
      },
      {
        "system": false,
        "id": "uqxndxjp",
        "name": "status",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "created",
            "approved",
            "funded",
            "in_progress",
            "completed",
            "rejected"
          ]
        }
      },
      {
        "system": false,
        "id": "j2fo7wxy",
        "name": "created_by",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "dlvnttlfiw585jv",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id",
            "name",
            "email",
            "type"
          ]
        }
      },
      {
        "system": false,
        "id": "ei90l0ws",
        "name": "updated_by",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "dlvnttlfiw585jv",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id",
            "email",
            "name",
            "type"
          ]
        }
      },
      {
        "system": false,
        "id": "nr8rurzo",
        "name": "approved_by",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "dlvnttlfiw585jv",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id",
            "name",
            "email",
            "type"
          ]
        }
      },
      {
        "system": false,
        "id": "y9jjspvw",
        "name": "funded_by",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "dlvnttlfiw585jv",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id",
            "name",
            "email",
            "type"
          ]
        }
      },
      {
        "system": false,
        "id": "rn68vmy9",
        "name": "marked_completed_by",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "dlvnttlfiw585jv",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": [
            "id",
            "name",
            "email",
            "type"
          ]
        }
      },
      {
        "system": false,
        "id": "ri9ar2il",
        "name": "approved_on",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "gtuhofsf",
        "name": "funded_on",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "g0uynztr",
        "name": "completed_on",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "xzdiohq5",
        "name": "quotation",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "ipvlo4ew",
        "name": "deadline",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "9xrufzdl",
        "name": "frequency",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "once",
            "daily",
            "weekly",
            "monthly",
            "yearly",
            "never"
          ]
        }
      },
      {
        "system": false,
        "id": "s4ekw8ta",
        "name": "rejected_by",
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
        "id": "zbtckw3m",
        "name": "marked_in_progress_by",
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
        "id": "zumfzjii",
        "name": "rejected_on",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "6k9m6xw8",
        "name": "marked_in_progress_on",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `_ipamtot35z4hzln_created_idx` ON `tasks` (`created`)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.id != ''",
    "updateRule": "@request.auth.id != \"\"",
    "deleteRule": "@request.auth.id = created_by",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("ipamtot35z4hzln");

  return dao.deleteCollection(collection);
})
