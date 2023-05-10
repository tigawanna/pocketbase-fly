migrate((db) => {
  const collection = new Collection({
    "id": "6ur1ivky21zygnv",
    "created": "2023-05-10 07:44:12.265Z",
    "updated": "2023-05-10 07:44:12.265Z",
    "name": "tenants",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yftha1iw",
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
        "id": "x14tvags",
        "name": "contact",
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
        "id": "qmf82vnc",
        "name": "email",
        "type": "email",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "v82vtz0g",
        "name": "details",
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
        "id": "cxbf8brr",
        "name": "supa_id",
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
    "indexes": [],
    "listRule": "@request.auth.verified = true && @request.auth.type=\"manager\"",
    "viewRule": "@request.auth.verified = true && @request.auth.type=\"manager\"\n",
    "createRule": "@request.auth.verified = true && @request.auth.type=\"manager\"",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6ur1ivky21zygnv");

  return dao.deleteCollection(collection);
})
