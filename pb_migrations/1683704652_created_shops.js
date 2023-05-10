migrate((db) => {
  const collection = new Collection({
    "id": "zb1etrv0i3olw5p",
    "created": "2023-05-10 07:44:12.265Z",
    "updated": "2023-05-10 07:44:12.265Z",
    "name": "shops",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gxrtdnqd",
        "name": "tenant",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "6ur1ivky21zygnv",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "jobum3wf",
        "name": "shop_number",
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
        "id": "6ula4sjf",
        "name": "supa_tenant",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "fxuqtyg7",
        "name": "utils",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "elec",
            "water",
            "both"
          ]
        }
      },
      {
        "system": false,
        "id": "ijqtrydc",
        "name": "order",
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
        "id": "scid5awp",
        "name": "supa_id",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "54slue9t",
        "name": "is_vacant",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("zb1etrv0i3olw5p");

  return dao.deleteCollection(collection);
})
