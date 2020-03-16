define({ "api": [
  {
    "type": "post",
    "url": "/movie",
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
            "field": "_id",
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
    "filename": "./controller/movie.controller.js",
    "groupTitle": "Movie"
  },
  {
    "type": "delete",
    "url": "/movie/:id",
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
    "filename": "./controller/movie.controller.js",
    "groupTitle": "Movie"
  },
  {
    "type": "put",
    "url": "/movie:id",
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
            "field": "_id",
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
            "field": "_id",
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
    "filename": "./controller/movie.controller.js",
    "groupTitle": "Movie"
  },
  {
    "type": "get",
    "url": "/movie",
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
            "field": "_id",
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
    "filename": "./controller/movie.controller.js",
    "groupTitle": "Movie"
  },
  {
    "type": "get",
    "url": "/movie/:id",
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
            "field": "_id",
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
    "filename": "./controller/movie.controller.js",
    "groupTitle": "Movie"
  }
] });