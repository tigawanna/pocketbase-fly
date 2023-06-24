migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aayrf7u68p554wy")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_t0ReLHM` ON `friends` (\n  `user_b`,\n  `user_a`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aayrf7u68p554wy")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_t0ReLHM` ON `friends` (\n  `user_b`,\n  `user_b_follow_user_a`\n)"
  ]

  return dao.saveCollection(collection)
})
