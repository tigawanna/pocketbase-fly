migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vxci39pfmwwnzkd")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vxci39pfmwwnzkd")

  // remove
  collection.schema.removeField("xdmoly6z")

  return dao.saveCollection(collection)
})
