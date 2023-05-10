migrate((db) => {
  const collection = new Collection({
    "id": "vbse1l0qet8z4hu",
    "created": "2023-05-10 07:44:12.265Z",
    "updated": "2023-05-10 07:44:12.265Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "a0u9jwo7",
        "name": "body",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 300,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ny6krdw9",
        "name": "media",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpg",
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif"
          ],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "ijbw4tgl",
        "name": "user",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "5sckr8a13top3zs",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "kdr3guxa",
        "name": "parent",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "vbse1l0qet8z4hu",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "ondkz2dc",
        "name": "depth",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `_vbse1l0qet8z4hu_created_idx` ON `posts` (`created`)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.id = \"\"",
    "updateRule": "@request.auth.id = user",
    "deleteRule": "@request.auth.id = user",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vbse1l0qet8z4hu");

  return dao.deleteCollection(collection);
})
