const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Actor = require("../models").Actor;

/**
 * @api {get} /actors Show all Actors
 * @apiName getActor
 * @apiGroup Actor
 *
 * @apiSuccess {Integer} id id of the Actor.
 * @apiSuccess {String} firstname Firstname of the Actor.
 * @apiSuccess {String} lastname Lastname of the Actor.
 * @apiSuccess {Date} birthday Birthday of the Actor.
 * @apiSuccess {String} gender Gender of the Actor.
 * @apiSuccess {String} nationality Nationality of the Actor.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *            "id": 1,
 *            "firstname": "John",
 *            "lastname": "Doe",
 *            "birthday": "1980-02-10T22:15:34.000Z",
 *            "gender": "Male",
 *            "nationality": "British",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *        }
 *      ]
 */
exports.actor_list = (req, res, next) => {
  Actor.findAll({})
    .then(data => {
      if (data.length !== 0) {
        res.status(200).json(data);
      } else {
        res.status(200).json({ message: "Genre's Table is empty !" });
      }
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {get} /actors/:id Show detail of one Actor
 * @apiName getActorDetail
 * @apiGroup Actor
 *
 * @apiParam {Number} id of the Actor
 *
 * @apiSuccess {Integer} id id of the Actor.
 * @apiSuccess {String} firstname Firstname of the Actor.
 * @apiSuccess {String} lastname Lastname of the Actor.
 * @apiSuccess {Date} birthday Birthday of the Actor.
 * @apiSuccess {String} gender Gender of the Actor.
 * @apiSuccess {String} nationality Nationality of the Actor.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *            "id": 1,
 *            "firstname": "John",
 *            "lastname": "Doe",
 *            "birthday": "1980-02-10T22:15:34.000Z",
 *            "gender": "Male",
 *            "nationality": "British",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *        }
 */
exports.actor_detail = (req, res, next) => {
  const id = req.params.id;
  Actor.findByPk(id)
    .then(data => {
      if (data !== null) {
        res.status(200).json(data);
      } else {
        res.status(200).json({ message: "This actor's ID does not exists !" });
      }
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {get} /actors/male/mostview Get Top 5 rated actor with gender="male"
 * @apiName getActorMaleRated
 * @apiGroup Actor
 *
 * @apiSuccess {Integer} id id of the Actor.
 * @apiSuccess {String} firstname Firstname of the Actor.
 * @apiSuccess {String} lastname Lastname of the Actor.
 * @apiSuccess {Date} birthday Birthday of the Actor.
 * @apiSuccess {String} gender Gender of the Actor.
 * @apiSuccess {String} nationality Nationality of the Actor.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *            "id": 1,
 *            "firstname": "Milla",
 *            "lastname": "djokovic",
 *            "birthday": "1980-02-10T22:15:34.000Z",
 *            "gender": "female",
 *            "nationality": "American",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *        }
 */
exports.actor_MaleRated = (req, res, next) => {
  Actor.findAll({
    where: {
      gender: "male"
    },
    limit: 6
  })
    .then(data => {
      if (data !== null) {
        //
        res.status(200).json(data);
      } else {
        res.status(200).json({ message: "This actor's ID does not exists !" });
      }
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {get} /actors/female/mostview Get Top 5 rated actor with gender="female"
 * @apiName getActorFemaleRated
 * @apiGroup Actor
 *
 *
 * @apiSuccess {Integer} id id of the Actor.
 * @apiSuccess {String} firstname Firstname of the Actor.
 * @apiSuccess {String} lastname Lastname of the Actor.
 * @apiSuccess {Date} birthday Birthday of the Actor.
 * @apiSuccess {String} gender Gender of the Actor.
 * @apiSuccess {String} nationality Nationality of the Actor.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *            "id": 1,
 *            "firstname": "Milla",
 *            "lastname": "djokovic",
 *            "birthday": "1980-02-10T22:15:34.000Z",
 *            "gender": "female",
 *            "nationality": "American",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *        }
 */
exports.actor_femaleRated = (req, res, next) => {
  Actor.findAll({
    where: {
      gender: "female"
    },
    limit: 6
  })
    .then(data => {
      if (data !== null) {
        //
        res.status(200).json(data);
      } else {
        res.status(200).json({ message: "This actor's ID does not exists !" });
      }
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {get} /actors/female Get actor with gender="female"
 * @apiName getActorFemale
 * @apiGroup Actor
 *
 *
 * @apiSuccess {Integer} id id of the Actor.
 * @apiSuccess {String} firstname Firstname of the Actor.
 * @apiSuccess {String} lastname Lastname of the Actor.
 * @apiSuccess {Date} birthday Birthday of the Actor.
 * @apiSuccess {String} gender Gender of the Actor.
 * @apiSuccess {String} nationality Nationality of the Actor.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *            "id": 1,
 *            "firstname": "Milla",
 *            "lastname": "djokovic",
 *            "birthday": "1980-02-10T22:15:34.000Z",
 *            "gender": "female",
 *            "nationality": "American",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *        }
 */
exports.actor_female = (req, res, next) => {
  Actor.findAll({
    where: {
      gender: "female"
    }
  }).then(data => {
    if (data !== null) {
      res.status(200).json(data);
    } else {
      res.status(200).json({ message: "No female in actor's table !" });
    }
  });
};

/**
 * @api {get} /actors/male Get actor with gender="male"
 * @apiName getActorMale
 * @apiGroup Actor
 *
 *
 * @apiSuccess {Integer} id id of the Actor.
 * @apiSuccess {String} firstname Firstname of the Actor.
 * @apiSuccess {String} lastname Lastname of the Actor.
 * @apiSuccess {Date} birthday Birthday of the Actor.
 * @apiSuccess {String} gender Gender of the Actor.
 * @apiSuccess {String} nationality Nationality of the Actor.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *            "id": 1,
 *            "firstname": "Milla",
 *            "lastname": "djokovic",
 *            "birthday": "1980-02-10T22:15:34.000Z",
 *            "gender": "female",
 *            "nationality": "American",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *        }
 */
exports.actor_male = (req, res, next) => {
  Actor.findAll({
    where: {
      gender: "male"
    }
  }).then(data => {
    if (data !== null) {
      res.status(200).json(data);
    } else {
      res.status(200).json({ message: "No male in actor's table !" });
    }
  });
};

/**
 * @api {post} /actors Add one Actor
 * @apiName addActor
 * @apiGroup Actor
 *
 * @apiParam {String} firstname Firstname of the Actor.
 * @apiParam {String} lastname Lastname of the Actor.
 * @apiParam {Date} birthday Birthday of the Actor.
 * @apiParam {String} gender Gender of the Actor.
 * @apiParam {String} nationality Nationality of the Actor.
 * @apiParamExample {json} Request-Example:
 *     {
 *            "firstname": "John",
 *            "lastname": "Doe",
 *            "birthday": "1980-02-10T22:15:34.000Z",
 *            "gender": "Male",
 *            "nationality": "British"
 *     }
 *
 * @apiSuccess {Integer} id id of the Actor.
 * @apiSuccess {String} firstname Firstname of the Actor.
 * @apiSuccess {String} lastname Lastname of the Actor.
 * @apiSuccess {Date} birthday Birthday of the Actor.
 * @apiSuccess {String} gender Gender of the Actor.
 * @apiSuccess {String} nationality Nationality of the Actor.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *            "id": 1,
 *            "firstname": "John",
 *            "lastname": "Doe",
 *            "birthday": "1980-02-10T22:15:34.000Z",
 *            "gender": "Male",
 *            "nationality": "British",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *        }
 *      ]
 */
exports.actor_add = (req, res, next) => {
  Actor.create(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {put} /actors/:id Edit one Actor
 * @apiName editActor
 * @apiGroup Actor
 *
 * @apiParam {Integer} id id of the Actor.
 * @apiParam {String} firstname Firstname of the Actor.
 * @apiParam {String} lastname Lastname of the Actor.
 * @apiParam {Date} birthday Birthday of the Actor.
 * @apiParam {String} gender Gender of the Actor.
 * @apiParam {String} nationality Nationality of the Actor.
 * @apiParamExample {json} Request-Example:
 *     {
 *            "firstname": "John",
 *            "lastname": "Doe",
 *            "birthday": "1980-02-10T22:15:34.000Z",
 *            "gender": "Male",
 *            "nationality": "British"
 *     }
 *
 * @apiSuccess {Integer} id id of the Genre.
 * @apiSuccess {String} name Name of the Genre.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *            "id": 1,
 *            "firstname": "John",
 *            "lastname": "Doe",
 *            "birthday": "1980-02-10T22:15:34.000Z",
 *            "gender": "Male",
 *            "nationality": "British",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *     }
 */
exports.actor_edit = (req, res, next) => {
  const id = req.params.id;
  Actor.update(req.body, {
    where: {
      id: id
    }
  })
    .then(data => {
      res.status(200).json({ message: `  Actor ${id} has bean modified` });
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {delete} /actors/:id Delete one Actor
 * @apiName deleteActor
 * @apiGroup Actor
 *
 * @apiParam {Number} id id of the Actor.
 *
 * @apiSuccess {String} message Actor deleted.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       message: "Actor deleted"
 *     }
 */
exports.actor_delete = (req, res, next) => {
  const id = req.params.id;
  Actor.destroy({
    where: {
      id: id
    }
  })
    .then(data => {
      res.json({ message: "Actor deleted" });
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};
