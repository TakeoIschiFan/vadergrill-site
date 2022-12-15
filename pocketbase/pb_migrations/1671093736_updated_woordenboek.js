migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p9d43nsg8xmy7i7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tvwg562u",
    "name": "vbzin",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("p9d43nsg8xmy7i7")

  // remove
  collection.schema.removeField("tvwg562u")

  return dao.saveCollection(collection)
})
