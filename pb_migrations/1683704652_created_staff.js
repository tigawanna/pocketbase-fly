migrate((db) => {
  const collection = new Collection({
    "id": "dlvnttlfiw585jv",
    "created": "2023-05-10 07:44:12.264Z",
    "updated": "2023-05-10 07:44:12.264Z",
    "name": "staff",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fmalwmlx",
        "name": "name",
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
        "id": "waydpv0j",
        "name": "type",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "caretaker",
            "manager",
            "cashier"
          ]
        }
      },
      {
        "system": false,
        "id": "reee5uks",
        "name": "avatar",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          "thumbs": [],
          "protected": false
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `_dlvnttlfiw585jv_created_idx` ON `staff` (`created`)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dlvnttlfiw585jv");

  return dao.deleteCollection(collection);
})
