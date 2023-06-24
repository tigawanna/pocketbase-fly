migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vxci39pfmwwnzkd")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = "@request.auth.id != null"
  collection.updateRule = "@request.auth.id = id"
  collection.deleteRule = "@request.auth.id = id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vxci39pfmwwnzkd")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
