/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0mnuuiehz06mw1p")

  collection.name = "messages"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0mnuuiehz06mw1p")

  collection.name = "message"

  return dao.saveCollection(collection)
})
