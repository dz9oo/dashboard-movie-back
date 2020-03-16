const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Actor = require("../models/").Actor;

/**
 * @api {get} /actor Show all Actors
 * @apiName getActor
 * @apiGroup Actor
 *
 * @apiSuccess {Integer} _id id of the Actor.
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
 * @api {get} /actor/:id Show detail of one Actor
 * @apiName getActorDetail
 * @apiGroup Actor
 *
 * @apiParam {Number} id of the Actor
 *
 * @apiSuccess {Integer} _id id of the Actor.
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
 * @api {post} /actor Add one Actor
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
 * @apiSuccess {Integer} _id id of the Actor.
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
 * @api {put} /actor/:id Edit one Actor
 * @apiName editActor
 * @apiGroup Actor
 *
 * @apiParam {Integer} _id id of the Actor.
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
 * @apiSuccess {Integer} _id id of the Genre.
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
 * @api {delete} /actor/:id Delete one Actor
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
