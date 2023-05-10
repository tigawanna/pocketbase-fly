migrate((db) => {
  const collection = new Collection({
    "id": "7yy4zq0mtyj546q",
    "created": "2023-05-10 07:44:12.263Z",
    "updated": "2023-05-10 07:44:12.263Z",
    "name": "listings",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ct5jlmc1",
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
        "id": "hequmbjq",
        "name": "longitude",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "mscg4qnn",
        "name": "latitude",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "ku9pmjwv",
        "name": "description",
        "type": "editor",
        "required": true,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "jy0rpgvz",
        "name": "images",
        "type": "file",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 6,
          "maxSize": 10000000,
          "mimeTypes": [
            "image/jpeg",
            "image/svg+xml",
            "image/webp",
            "image/avif",
            "image/png"
          ],
          "thumbs": [
            "100x50"
          ],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "puxitxtb",
        "name": "amenities",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "mjurykbj",
        "name": "owner",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "wbq0qz1adwxte2v",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "tyupnwkg",
        "name": "price",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": 1000,
          "max": null
        }
      },
      {
        "system": false,
        "id": "22cenzje",
        "name": "status",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "available",
            "sold"
          ]
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `_7yy4zq0mtyj546q_created_idx` ON `listings` (`created`)"
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
  const collection = dao.findCollectionByNameOrId("7yy4zq0mtyj546q");

  return dao.deleteCollection(collection);
})
