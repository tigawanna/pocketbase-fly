migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vxci39pfmwwnzkd")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_WoiS3Pl` ON `followers` (\n  `user_b`,\n  `user_b_lfollow_user_a`\n)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dvabrthc",
    "name": "user_b_lfollow_user_a",
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
  }))

  // update
  collection.schema.addField(new SchemaField({
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
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
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
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xdmoly6z",
    "name": "user_a_lfollow_user_b",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vxci39pfmwwnzkd")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_WoiS3Pl` ON `followers` (\n  `user_2`,\n  `user_1`\n)"
  ]

  // remove
  collection.schema.removeField("dvabrthc")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xdmoly6z",
    "name": "mutuals",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "yes",
        "no"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
