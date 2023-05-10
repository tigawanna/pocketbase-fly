migrate((db) => {
  const collection = new Collection({
    "id": "4wcaptlpivjve1o",
    "created": "2023-05-10 07:44:12.263Z",
    "updated": "2023-05-10 07:44:12.263Z",
    "name": "reactions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nyreyfss",
        "name": "post",
        "type": "relation",
        "required": true,
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
        "id": "sgwol8dx",
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
        "id": "iyckrxwp",
        "name": "liked",
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
      "CREATE INDEX `_4wcaptlpivjve1o_created_idx` ON `reactions` (`created`)",
      "CREATE UNIQUE INDEX `one_user_one_post_reaction_unq_idx` ON `reactions` (`user`, `post`)"
    ],
    "listRule": "@request.auth.id !=\"\"",
    "viewRule": "@request.auth.id !=\"\"",
    "createRule": "@request.auth.id != \"\"",
    "updateRule": "@request.auth.id = user",
    "deleteRule": "@request.auth.id = user",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4wcaptlpivjve1o");

  return dao.deleteCollection(collection);
})
