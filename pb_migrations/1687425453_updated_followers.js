migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vxci39pfmwwnzkd")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_WoiS3Pl` ON `followers` (\n  `user_b`,\n  `user_b_follow_user_a`\n)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xdmoly6z",
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
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dvabrthc",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vxci39pfmwwnzkd")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_WoiS3Pl` ON `followers` (\n  `user_b`,\n  `user_b_lfollow_user_a`\n)"
  ]

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

  // update
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

  return dao.saveCollection(collection)
})
