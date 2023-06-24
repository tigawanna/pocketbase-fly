migrate((db) => {
  const collection = new Collection({
    "id": "vxci39pfmwwnzkd",
    "created": "2023-06-22 08:08:42.596Z",
    "updated": "2023-06-22 08:08:42.596Z",
    "name": "followers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "rxivgptf",
        "name": "user_1",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "5sckr8a13top3zs",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "81vhskoe",
        "name": "user_2",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "5sckr8a13top3zs",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_WoiS3Pl` ON `followers` (\n  `user_2`,\n  `user_1`\n)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vxci39pfmwwnzkd");

  return dao.deleteCollection(collection);
})
