migrate((db) => {
  const collection = new Collection({
    "id": "5sckr8a13top3zs",
    "created": "2023-05-10 07:44:12.263Z",
    "updated": "2023-05-10 07:44:12.263Z",
    "name": "devs",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dhr1v7xa",
        "name": "avatar",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "jojjscns",
        "name": "accesstoken",
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
        "id": "jqjtptoe",
        "name": "displayname",
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
        "id": "pogclk1x",
        "name": "refreshtoken",
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
        "id": "jyr6ydsa",
        "name": "bio",
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
        "id": "xi9j9mna",
        "name": "githuburl",
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
    "indexes": [
      "CREATE INDEX `_5sckr8a13top3zs_created_idx` ON `devs` (`created`)"
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "@request.auth.id = id",
    "deleteRule": null,
    "options": {
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("5sckr8a13top3zs");

  return dao.deleteCollection(collection);
})
