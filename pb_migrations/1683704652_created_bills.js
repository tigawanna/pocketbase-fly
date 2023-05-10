migrate((db) => {
  const collection = new Collection({
    "id": "cvtakohtxaagiat",
    "created": "2023-05-10 07:44:12.265Z",
    "updated": "2023-05-10 07:44:12.265Z",
    "name": "bills",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dfbbwmy1",
        "name": "shop",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "zb1etrv0i3olw5p",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "pgqw1q5j",
        "name": "elec_readings",
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
        "id": "mgmpe07w",
        "name": "water_readings",
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
        "id": "z9zcyynw",
        "name": "month",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "nyjjvpyp",
        "name": "year",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [],
    "listRule": "@request.auth.verified = true && @request.auth.type=\"manager\"",
    "viewRule": "@request.auth.verified = true && @request.auth.type=\"manager\"",
    "createRule": "@request.auth.verified = true && @request.auth.type=\"manager\"",
    "updateRule": "@request.auth.verified = true && @request.auth.type=\"manager\"",
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cvtakohtxaagiat");

  return dao.deleteCollection(collection);
})
