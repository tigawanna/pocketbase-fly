migrate((db) => {
  const collection = new Collection({
    "id": "wbq0qz1adwxte2v",
    "created": "2023-05-10 07:44:12.263Z",
    "updated": "2023-05-10 07:44:12.263Z",
    "name": "owner",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "pznsoolh",
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
        "id": "omxfuzkg",
        "name": "email",
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
        "id": "pdigrvmr",
        "name": "phone",
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
        "id": "lqsy1cwf",
        "name": "location",
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
        "id": "oib2hqxr",
        "name": "image",
        "type": "file",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/webp",
            "image/avif"
          ],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "agx1poi4",
        "name": "whatsapp",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `_wbq0qz1adwxte2v_created_idx` ON `owner` (`created`)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("wbq0qz1adwxte2v");

  return dao.deleteCollection(collection);
})
