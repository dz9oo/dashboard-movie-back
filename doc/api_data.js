define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "/Users/nicolascollier/Documents/developpementWeb/teletravail/dashboard-film-back/doc/main.js",
    "groupTitle": "/Users/nicolascollier/Documents/developpementWeb/teletravail/dashboard-film-back/doc/main.js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/actors",
    "title": "Add one Actor",
    "name": "addActor",
    "group": "Actor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the Actor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the Actor.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday of the Actor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the Actor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nationality",
            "description": "<p>Nationality of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n       \"firstname\": \"John\",\n       \"lastname\": \"Doe\",\n       \"birthday\": \"1980-02-10T22:15:34.000Z\",\n       \"gender\": \"Male\",\n       \"nationality\": \"British\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nationality",
            "description": "<p>Nationality of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"id\": 1,\n       \"firstname\": \"John\",\n       \"lastname\": \"Doe\",\n       \"birthday\": \"1980-02-10T22:15:34.000Z\",\n       \"gender\": \"Male\",\n       \"nationality\": \"British\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/actor.controller.js",
    "groupTitle": "Actor"
  },
  {
    "type": "delete",
    "url": "/actors/:id",
    "title": "Delete one Actor",
    "name": "deleteActor",
    "group": "Actor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Actor.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Actor deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  message: \"Actor deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/actor.controller.js",
    "groupTitle": "Actor"
  },
  {
    "type": "put",
    "url": "/actors/:id",
    "title": "Edit one Actor",
    "name": "editActor",
    "group": "Actor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Actor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the Actor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the Actor.</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday of the Actor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the Actor.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nationality",
            "description": "<p>Nationality of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n       \"firstname\": \"John\",\n       \"lastname\": \"Doe\",\n       \"birthday\": \"1980-02-10T22:15:34.000Z\",\n       \"gender\": \"Male\",\n       \"nationality\": \"British\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Genre.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Genre.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"id\": 1,\n       \"firstname\": \"John\",\n       \"lastname\": \"Doe\",\n       \"birthday\": \"1980-02-10T22:15:34.000Z\",\n       \"gender\": \"Male\",\n       \"nationality\": \"British\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/actor.controller.js",
    "groupTitle": "Actor"
  },
  {
    "type": "get",
    "url": "/actors",
    "title": "Show all Actors",
    "name": "getActor",
    "group": "Actor",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nationality",
            "description": "<p>Nationality of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"id\": 1,\n       \"firstname\": \"John\",\n       \"lastname\": \"Doe\",\n       \"birthday\": \"1980-02-10T22:15:34.000Z\",\n       \"gender\": \"Male\",\n       \"nationality\": \"British\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/actor.controller.js",
    "groupTitle": "Actor"
  },
  {
    "type": "get",
    "url": "/actors/:id",
    "title": "Show detail of one Actor",
    "name": "getActorDetail",
    "group": "Actor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>of the Actor</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nationality",
            "description": "<p>Nationality of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 1,\n       \"firstname\": \"John\",\n       \"lastname\": \"Doe\",\n       \"birthday\": \"1980-02-10T22:15:34.000Z\",\n       \"gender\": \"Male\",\n       \"nationality\": \"British\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/actor.controller.js",
    "groupTitle": "Actor"
  },
  {
    "type": "get",
    "url": "/actors/female",
    "title": "Get actor with gender=\"female\"",
    "name": "getActorFemale",
    "group": "Actor",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nationality",
            "description": "<p>Nationality of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 1,\n       \"firstname\": \"Milla\",\n       \"lastname\": \"djokovic\",\n       \"birthday\": \"1980-02-10T22:15:34.000Z\",\n       \"gender\": \"female\",\n       \"nationality\": \"American\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/actor.controller.js",
    "groupTitle": "Actor"
  },
  {
    "type": "get",
    "url": "/actors/female/mostview",
    "title": "Get Top 5 rated actor with gender=\"female\"",
    "name": "getActorFemaleRated",
    "group": "Actor",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nationality",
            "description": "<p>Nationality of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 1,\n       \"firstname\": \"Milla\",\n       \"lastname\": \"djokovic\",\n       \"birthday\": \"1980-02-10T22:15:34.000Z\",\n       \"gender\": \"female\",\n       \"nationality\": \"American\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/actor.controller.js",
    "groupTitle": "Actor"
  },
  {
    "type": "get",
    "url": "/actors/male",
    "title": "Get actor with gender=\"male\"",
    "name": "getActorMale",
    "group": "Actor",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nationality",
            "description": "<p>Nationality of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 1,\n       \"firstname\": \"Milla\",\n       \"lastname\": \"djokovic\",\n       \"birthday\": \"1980-02-10T22:15:34.000Z\",\n       \"gender\": \"female\",\n       \"nationality\": \"American\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/actor.controller.js",
    "groupTitle": "Actor"
  },
  {
    "type": "get",
    "url": "/actors/male/mostview",
    "title": "Get Top 5 rated actor with gender=\"male\"",
    "name": "getActorMaleRated",
    "group": "Actor",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "birthday",
            "description": "<p>Birthday of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>Gender of the Actor.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nationality",
            "description": "<p>Nationality of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 1,\n       \"firstname\": \"Milla\",\n       \"lastname\": \"djokovic\",\n       \"birthday\": \"1980-02-10T22:15:34.000Z\",\n       \"gender\": \"female\",\n       \"nationality\": \"American\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/actor.controller.js",
    "groupTitle": "Actor"
  },
  {
    "type": "post",
    "url": "/genres",
    "title": "Add one Genre",
    "name": "addGenre",
    "group": "Genre",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Genre.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n       \"name\": \"fantastic\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Genre.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Genre.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"id\": 1,\n       \"name\": \"fantastic\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/genre.controller.js",
    "groupTitle": "Genre"
  },
  {
    "type": "delete",
    "url": "/genres/:id",
    "title": "Delete one Genre",
    "name": "deleteGenre",
    "group": "Genre",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Genre.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Genre deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  message: \"Genre deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/genre.controller.js",
    "groupTitle": "Genre"
  },
  {
    "type": "put",
    "url": "/genres/:id",
    "title": "Edit one Genre",
    "name": "editGenre",
    "group": "Genre",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Genre.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Genre.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n       \"name\": \"fantastic\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Genre.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Genre.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"id\": 1,\n       \"name\": \"fantastic\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/genre.controller.js",
    "groupTitle": "Genre"
  },
  {
    "type": "get",
    "url": "/genres",
    "title": "Show all Genres",
    "name": "getGenre",
    "group": "Genre",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Genre.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Genre.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"id\": 1,\n       \"name\": \"fantastic\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/genre.controller.js",
    "groupTitle": "Genre"
  },
  {
    "type": "get",
    "url": "/genres/:id",
    "title": "Show detail of one Genre",
    "name": "getGenreDetail",
    "group": "Genre",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>of the Genre</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Genre.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Genre.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 1,\n       \"name\": \"fantastic\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/genre.controller.js",
    "groupTitle": "Genre"
  },
  {
    "type": "post",
    "url": "/movieactor",
    "title": "Add one MovieActor",
    "name": "addMovieActor",
    "group": "MovieActor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "movieId",
            "description": "<p>movie's ID of the movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "actorId",
            "description": "<p>Actor's ID of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n       \"movieId\": 1,\n       \"actorId\": 2,\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the MovieActor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "movieId",
            "description": "<p>movie's ID of the movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "actorId",
            "description": "<p>Actor's ID of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"id\": 1,\n       \"movieId\": 1,\n       \"actorId\": 2,\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/movieActor.controller.js",
    "groupTitle": "MovieActor"
  },
  {
    "type": "delete",
    "url": "/movieactor/:id",
    "title": "Delete one MovieActor",
    "name": "deleteMovieActor",
    "group": "MovieActor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Actor.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>MovieActor deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  message: \"MovieActor deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/movieActor.controller.js",
    "groupTitle": "MovieActor"
  },
  {
    "type": "put",
    "url": "/movieactor/:id",
    "title": "Edit one MovieActor",
    "name": "editMovieActor",
    "group": "MovieActor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the MovieActor.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "movieId",
            "description": "<p>movie's ID of the movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "actorId",
            "description": "<p>Actor's ID of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n       \"movieId\": 1,\n       \"actorId\": 2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the MovieActor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "movieId",
            "description": "<p>movie's ID of the movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "actorId",
            "description": "<p>Actor's ID of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"id\": 1,\n       \"movieId\": 1,\n       \"actorId\": 2,\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/movieActor.controller.js",
    "groupTitle": "MovieActor"
  },
  {
    "type": "get",
    "url": "/movieactor",
    "title": "Show all MovieActor relations",
    "name": "getMovieActor",
    "group": "MovieActor",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the MovieActor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "movieId",
            "description": "<p>movie's ID of the movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "actorId",
            "description": "<p>Actor's ID of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"id\": 1,\n       \"movieId\": 1,\n       \"actorId\": 2,\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/movieActor.controller.js",
    "groupTitle": "MovieActor"
  },
  {
    "type": "get",
    "url": "/movieactor/count",
    "title": "Show MovieActor order by count",
    "name": "getMovieActor",
    "group": "MovieActor",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the MovieActor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "movieId",
            "description": "<p>movie's ID of the movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "actorId",
            "description": "<p>Actor's ID of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"id\": 1,\n       \"movieId\": 1,\n       \"actorId\": 2,\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/movieActor.controller.js",
    "groupTitle": "MovieActor"
  },
  {
    "type": "get",
    "url": "/movieactor/:id",
    "title": "Show detail of one MovieActor",
    "name": "getMovieActorDetail",
    "group": "MovieActor",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Id of the MovieActor.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the MovieActor.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "movieId",
            "description": "<p>movie's ID of the movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "actorId",
            "description": "<p>Actor's ID of the Actor.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 1,\n       \"movieId\": 1,\n       \"actorId\": 2,\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/movieActor.controller.js",
    "groupTitle": "MovieActor"
  },
  {
    "type": "post",
    "url": "/movies",
    "title": "Add one Movie",
    "name": "addMovie",
    "group": "Movie",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "year",
            "description": "<p>Release's year of the Movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "score",
            "description": "<p>Score of the Movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Picture of the Movie.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n       \"title\": \"Dofus-Livre 1 : Julith \",\n       \"description\": \"A wonderful movie !\",\n       \"year\": 2019,\n       \"score\": 1.2,\n       \"picture\": \"linkToPicture.jpg\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "year",
            "description": "<p>Release's year of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "score",
            "description": "<p>Score of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Picture of the Movie.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"id\": 1,\n       \"title\": \"Dofus-Livre 1 : Julith \",\n       \"description\": \"A wonderful movie !\",\n       \"year\": 2019,\n       \"score\": 1.2,\n       \"picture\": \"linkToPicture.jpg\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/movie.controller.js",
    "groupTitle": "Movie"
  },
  {
    "type": "delete",
    "url": "/movies/:id",
    "title": "Delete one Movie",
    "name": "deleteMovie",
    "group": "Movie",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Movie.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Movie deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  message: \"Movie deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/movie.controller.js",
    "groupTitle": "Movie"
  },
  {
    "type": "put",
    "url": "/movies/:id",
    "title": "Edit one Movie",
    "name": "editMovie",
    "group": "Movie",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "year",
            "description": "<p>Release's year of the Movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "score",
            "description": "<p>Score of the Movie.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Picture of the Movie.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n       \"title\": \"Dofus-Livre 1 : Julith \",\n       \"description\": \"A wonderful movie !\",\n       \"year\": 2019,\n       \"score\": 1.2,\n       \"picture\": \"linkToPicture.jpg\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "year",
            "description": "<p>Release's year of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "score",
            "description": "<p>Score of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Picture of the Movie.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"id\": 1,\n       \"title\": \"Dofus-Livre 1 : Julith \",\n       \"description\": \"A wonderful movie !\",\n       \"year\": 2019,\n       \"score\": 1.2,\n       \"picture\": \"linkToPicture.jpg\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/movie.controller.js",
    "groupTitle": "Movie"
  },
  {
    "type": "get",
    "url": "/movies",
    "title": "Show all Movies",
    "name": "getMovie",
    "group": "Movie",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "year",
            "description": "<p>Release's year of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "score",
            "description": "<p>Score of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Picture of the Movie.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"id\": 1,\n       \"title\": \"Dofus-Livre 1 : Julith \",\n       \"description\": \"A wonderful movie !\",\n       \"year\": 2019,\n       \"score\": 1.2,\n       \"picture\": \"linkToPicture.jpg\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/movie.controller.js",
    "groupTitle": "Movie"
  },
  {
    "type": "get",
    "url": "/movies/:id",
    "title": "Show detail of one Movie",
    "name": "getMovieDetail",
    "group": "Movie",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>of the Movie</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Title of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "year",
            "description": "<p>Release's year of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "Float",
            "optional": false,
            "field": "score",
            "description": "<p>Score of the Movie.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>Picture of the Movie.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 1,\n       \"title\": \"Dofus-Livre 1 : Julith \",\n       \"description\": \"A wonderful movie !\",\n       \"year\": 2019,\n       \"score\": 1.2,\n       \"picture\": \"linkToPicture.jpg\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/movie.controller.js",
    "groupTitle": "Movie"
  },
  {
    "type": "post",
    "url": "/users/signin",
    "title": "Sign IN",
    "name": "SigninUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"email\": \"john.doe@emailing.fr\",\n  \"password\": \"azerty\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n \"message\": \"You win - authentication ok\",\n  \"user\": {\n           \"id\": 3,\n           \"email\": \"john.doe@emailing.fr\",\n           \"password\": \"$2b$10$Q.vphQPV..2Sgi1Ziba6v.gUeUMaaoYSmHxdoT3RCu6NFUXvTgoq.\",\n           \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n           \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n  },\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyZWdAcHJlc2NpZW5jZS5mciIsImlhdCI6MTU4MTM3NTAyMSwiZXhwIjoxNTgxMzgyMjIxfQ.Zms2rIUfmwNhT1fE81msZ6SO1r-oFJ6kciKRvg5G70w\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete one User",
    "name": "deleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id of the User.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>User deleted.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  message: \"User deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Edit one User",
    "name": "editUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n       \"email\": \"john.doe@free.fr\",\n       \"password\": \"fd92fhhzoodjjje928dnhhee-342jjdk6\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n       \"id\": 1,\n       \"email\": \"john.doe@free.fr\",\n       \"password\": \"fd92fhhzoodjjje928dnhhee-342jjdk6\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Show all Users",
    "name": "getUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"id\": 1,\n       \"email\": \"john.doe@free.fr\",\n       \"password\": \"fd92fhhzoodjjje928dnhhee-342jjdk6\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Show detail of one User",
    "name": "getUserDetail",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>of the User</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 1,\n       \"email\": \"john.doe@free.fr\",\n       \"password\": \"fd92fhhzoodjjje928dnhhee-342jjdk6\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/user.controller.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/signup",
    "title": "Sign UP",
    "name": "signUpUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n       \"email\": \"john.doe@free.fr\",\n       \"password\": \"fd92fhhzoodjjje928dnhhee-342jjdk6\",\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n[\n   {\n       \"id\": 1,\n       \"email\": \"john.doe@free.fr\",\n       \"password\": \"fd92fhhzoodjjje928dnhhee-342jjdk6\",\n       \"createdAt\": \"2020-02-10T22:15:34.000Z\",\n       \"updatedAt\": \"2020-02-10T22:15:34.000Z\"\n   }\n ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./controllers/user.controller.js",
    "groupTitle": "User"
  }
] });
