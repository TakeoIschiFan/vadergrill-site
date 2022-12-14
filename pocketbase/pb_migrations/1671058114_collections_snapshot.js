migrate((db) => {
  const snapshot = [
    {
      "id": "_pb_users_auth_",
      "created": "2022-11-25 22:23:05.928Z",
      "updated": "2022-11-26 14:22:41.055Z",
      "name": "users",
      "type": "auth",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "users_name",
          "name": "name",
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
          "id": "users_avatar",
          "name": "avatar",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpg",
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif"
            ],
            "thumbs": null
          }
        }
      ],
      "listRule": "id = @request.auth.id",
      "viewRule": "id = @request.auth.id",
      "createRule": "",
      "updateRule": "id = @request.auth.id",
      "deleteRule": "id = @request.auth.id",
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
    },
    {
      "id": "o6us0w64pabkdvh",
      "created": "2022-11-25 22:49:42.755Z",
      "updated": "2022-12-07 14:27:52.647Z",
      "name": "activiteiten",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "gd4n0thk",
          "name": "titel",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": 2,
            "max": 128,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "zks8cnsq",
          "name": "beschrijving",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": 2,
            "max": 512,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "2xdyapbs",
          "name": "banner",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [
              "image/jpg",
              "image/jpeg",
              "image/png",
              "image/svg+xml",
              "image/gif"
            ],
            "thumbs": [
              "720x480"
            ]
          }
        },
        {
          "system": false,
          "id": "jsyiiak0",
          "name": "slug",
          "type": "text",
          "required": false,
          "unique": false,
          "options": {
            "min": 2,
            "max": 128,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "eubqjkxy",
          "name": "tickets",
          "type": "relation",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": null,
            "collectionId": "tawxdyu76tmjhv6",
            "cascadeDelete": false
          }
        },
        {
          "system": false,
          "id": "7s4ybgcl",
          "name": "start",
          "type": "date",
          "required": true,
          "unique": false,
          "options": {
            "min": "",
            "max": ""
          }
        },
        {
          "system": false,
          "id": "tt72nvtv",
          "name": "fotos",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 40,
            "maxSize": 5242880,
            "mimeTypes": [],
            "thumbs": []
          }
        }
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "tawxdyu76tmjhv6",
      "created": "2022-11-25 22:52:05.338Z",
      "updated": "2022-11-25 22:52:05.338Z",
      "name": "tickets",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "b2x8dvpk",
          "name": "activiteit",
          "type": "relation",
          "required": true,
          "unique": true,
          "options": {
            "maxSelect": 1,
            "collectionId": "o6us0w64pabkdvh",
            "cascadeDelete": true
          }
        },
        {
          "system": false,
          "id": "h4n4716d",
          "name": "user",
          "type": "relation",
          "required": true,
          "unique": true,
          "options": {
            "maxSelect": 1,
            "collectionId": "_pb_users_auth_",
            "cascadeDelete": true
          }
        },
        {
          "system": false,
          "id": "0igcpirx",
          "name": "betaald",
          "type": "bool",
          "required": false,
          "unique": false,
          "options": {}
        },
        {
          "system": false,
          "id": "mphlv0jg",
          "name": "gescand",
          "type": "bool",
          "required": false,
          "unique": false,
          "options": {}
        }
      ],
      "listRule": null,
      "viewRule": null,
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "edc38k4d5wbrn7y",
      "created": "2022-12-12 11:03:34.967Z",
      "updated": "2022-12-12 23:52:25.294Z",
      "name": "bestuur",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "dw1pc8i0",
          "name": "functie",
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
          "id": "u6bweymi",
          "name": "bijnaam",
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
          "id": "oieznu4e",
          "name": "naam",
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
          "id": "srgablfo",
          "name": "foto",
          "type": "file",
          "required": false,
          "unique": false,
          "options": {
            "maxSelect": 1,
            "maxSize": 5242880,
            "mimeTypes": [],
            "thumbs": []
          }
        },
        {
          "system": false,
          "id": "7h8jzval",
          "name": "important",
          "type": "number",
          "required": true,
          "unique": false,
          "options": {
            "min": 1,
            "max": 8
          }
        },
        {
          "system": false,
          "id": "pm263rym",
          "name": "nummer",
          "type": "number",
          "required": false,
          "unique": true,
          "options": {
            "min": null,
            "max": 15
          }
        }
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    },
    {
      "id": "p9d43nsg8xmy7i7",
      "created": "2022-12-13 10:39:12.217Z",
      "updated": "2022-12-13 10:42:58.294Z",
      "name": "woordenboek",
      "type": "base",
      "system": false,
      "schema": [
        {
          "system": false,
          "id": "s2p5ba1y",
          "name": "woord",
          "type": "text",
          "required": true,
          "unique": true,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        },
        {
          "system": false,
          "id": "fapp7bhq",
          "name": "beschrijving",
          "type": "text",
          "required": true,
          "unique": false,
          "options": {
            "min": null,
            "max": null,
            "pattern": ""
          }
        }
      ],
      "listRule": "",
      "viewRule": "",
      "createRule": null,
      "updateRule": null,
      "deleteRule": null,
      "options": {}
    }
  ];

  const collections = snapshot.map((item) => new Collection(item));

  return Dao(db).importCollections(collections, true, null);
}, (db) => {
  return null;
})
