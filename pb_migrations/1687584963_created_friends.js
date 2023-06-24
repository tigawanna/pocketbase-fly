migrate((db) => {
  const collection = new Collection({
    "id": "aayrf7u68p554wy",
    "created": "2023-06-24 05:36:03.752Z",
    "updated": "2023-06-24 05:36:03.752Z",
    "name": "friends",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kc0q3zaz",
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
        "id": "lmhr5lhe",
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
        "id": "lyfp6jqf",
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
        "id": "bxd6dd6e",
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
      "CREATE UNIQUE INDEX `idx_t0ReLHM` ON `friends` (\n  `user_b`,\n  `user_b_follow_user_a`\n)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "@request.auth.id != null",
    "updateRule": "@request.auth.id != null",
    "deleteRule": "@request.auth.id = id",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("aayrf7u68p554wy");

  return dao.deleteCollection(collection);
})
