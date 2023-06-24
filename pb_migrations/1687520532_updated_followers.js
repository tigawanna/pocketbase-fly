migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vxci39pfmwwnzkd")

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
      "maxSelect": 1,
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
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vxci39pfmwwnzkd")

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

  return dao.saveCollection(collection)
})
