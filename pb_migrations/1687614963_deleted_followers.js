migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vxci39pfmwwnzkd");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "vxci39pfmwwnzkd",
    "created": "2023-06-22 08:08:42.596Z",
    "updated": "2023-06-24 13:54:13.601Z",
    "name": "followers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rxivgptf",
        "name": "user_a",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "5sckr8a13top3zs",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "81vhskoe",
        "name": "user_b",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "5sckr8a13top3zs",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "xdmoly6z",
        "name": "user_a_follow_user_b",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "yes",
            "no"
          ]
        }
      },
      {
        "system": false,
        "id": "dvabrthc",
        "name": "user_b_follow_user_a",
        "type": "select",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "yes",
            "no"
          ]
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_WoiS3Pl` ON `followers` (\n  `user_b`,\n  `user_b_follow_user_a`\n)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.id != null",
    "updateRule": "@request.auth.id != null",
    "deleteRule": "@request.auth.id = id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
