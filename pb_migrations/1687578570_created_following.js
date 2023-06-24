migrate((db) => {
  const collection = new Collection({
    "id": "5sjzhhbgj63ai69",
    "created": "2023-06-24 03:49:30.602Z",
    "updated": "2023-06-24 03:49:30.602Z",
    "name": "following",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bmovmxpa",
        "name": "user",
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
        "id": "v6axetim",
        "name": "following",
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
    "indexes": [],
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
  const collection = dao.findCollectionByNameOrId("5sjzhhbgj63ai69");

  return dao.deleteCollection(collection);
})
