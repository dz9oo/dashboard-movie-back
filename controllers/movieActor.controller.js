const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const MovieActor = require("../models").MovieActor;
const Movie = require("../models").Movie;
const Actor = require("../models").Actor;
const sequelize = require("sequelize");

/**
 * @api {get} /movieactor Show all MovieActor relations
 * @apiName getMovieActor
 * @apiGroup MovieActor
 *
 * @apiSuccess {Integer} id id of the MovieActor.
 * @apiSuccess {Integer} movieId movie's ID of the movie.
 * @apiSuccess {Integer} actorId Actor's ID of the Actor.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *            "id": 1,
 *            "movieId": 1,
 *            "actorId": 2,
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *        }
 *      ]
 */
exports.movieactor_list = (req, res, next) => {
  MovieActor.findAll({})
    .then(data => {
      if (data.length !== 0) {
        res.status(200).json(data);
      } else {
        res.status(200).json({ message: "MovieActor's Table is empty !" });
      }
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {get} /movieactor/count Show MovieActor order by count
 * @apiName getMovieActor
 * @apiGroup MovieActor
 *
 * @apiSuccess {Integer} id id of the MovieActor.
 * @apiSuccess {Integer} movieId movie's ID of the movie.
 * @apiSuccess {Integer} actorId Actor's ID of the Actor.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *            "id": 1,
 *            "movieId": 1,
 *            "actorId": 2,
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *        }
 *      ]
 */
exports.movieactor_count = (req, res, next) => {
  MovieActor.findAll({
    // include: [
    //   {
    //     model: Actor,
    //     where: {
    //       id: MovieActor.actorId,
    //       gender: "male"
    //     }
    //   }
    // ],
    attributes: [
      "actorId",
      [sequelize.fn("count", sequelize.col("actorId")), "cnt"]
    ],
    group: ["MovieActor.actorId"],
    order: [[sequelize.literal("cnt"), "DESC"]],
    limit: 10
  })
    .then(data => {
      if (data.length !== 0) {
        res.status(200).json(data);
      } else {
        res.status(200).json({ message: "MovieActor's Table is empty !" });
      }
    })
    .catch(error => {
      res.status(400).json({ message: error });
    });
};

/**
 * @api {get} /movieactor/:id Show detail of one MovieActor
 * @apiName getMovieActorDetail
 * @apiGroup MovieActor
 *
 * @apiParam {Number} id Id of the MovieActor.
 *
 * @apiSuccess {Integer} id id of the MovieActor.
 * @apiSuccess {Integer} movieId movie's ID of the movie.
 * @apiSuccess {Integer} actorId Actor's ID of the Actor.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *            "id": 1,
 *            "movieId": 1,
 *            "actorId": 2,
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *        }
 */
exports.movieactor_detail = (req, res, next) => {
  const id = req.params.id;
  MovieActor.findByPk(id)
    .then(data => {
      if (data !== null) {
        res.status(200).json(data);
      } else {
        res
          .status(200)
          .json({ message: "This MovieActor's ID does not exists !" });
      }
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {post} /movieactor Add one MovieActor
 * @apiName addMovieActor
 * @apiGroup MovieActor
 *
 * @apiParam {Integer} movieId movie's ID of the movie.
 * @apiParam {Integer} actorId Actor's ID of the Actor.
 * @apiParamExample {json} Request-Example:
 *     {
 *            "movieId": 1,
 *            "actorId": 2,
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *     }
 *
 * @apiSuccess {Integer} id id of the MovieActor.
 * @apiSuccess {Integer} movieId movie's ID of the movie.
 * @apiSuccess {Integer} actorId Actor's ID of the Actor.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *            "id": 1,
 *            "movieId": 1,
 *            "actorId": 2,
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *        }
 *      ]
 */
exports.movieactor_add = (req, res, next) => {
  const { movieId, actorId } = req.body;
  // Verifier si movieId & actorId existent en BDD :
  Movie.findByPk(movieId)
    .then(data => {
      if (data === null) {
        res.status(400).json({ message: "This Movie's ID does not exists !" });
      }
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
  Actor.findByPk(actorId)
    .then(data => {
      if (data === null) {
        res.status(400).json({ message: "This Actor's ID does not exists !" });
      }
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
  // Vérifier que la relation n'existe pas déja:
  MovieActor.findAll({
    where: {
      movieId: movieId,
      actorId: actorId
    }
  })
    .then(data => {
      if (data.length !== 0) {
        res.status(200).json({ message: "This association already exists !" });
      } else {
        MovieActor.create(req.body)
          .then(data => {
            res.json(data);
          })
          .catch(error => {
            res.status(400).json({ message: "error" });
          });
      }
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {put} /movieactor/:id Edit one MovieActor
 * @apiName editMovieActor
 * @apiGroup MovieActor
 *
 * @apiParam {Integer} id id of the MovieActor.
 * @apiParam {Integer} movieId movie's ID of the movie.
 * @apiParam {Integer} actorId Actor's ID of the Actor.
 * @apiParamExample {json} Request-Example:
 *     {
 *            "movieId": 1,
 *            "actorId": 2
 *     }
 *
 * @apiSuccess {Integer} id id of the MovieActor.
 * @apiSuccess {Integer} movieId movie's ID of the movie.
 * @apiSuccess {Integer} actorId Actor's ID of the Actor.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *            "id": 1,
 *            "movieId": 1,
 *            "actorId": 2,
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *     }
 */
exports.movieactor_edit = (req, res, next) => {
  const id = req.params.id;
  // Vérifier que l'association existe
  MovieActor.findByPk(id)
    .then(data => {
      if (data === null) {
        res.status(400).json({ message: "This relation does not exists !" });
      } else {
        MovieActor.update(req.body, {
          where: {
            id: id
          }
        })
          .then(data => {
            res
              .status(200)
              .json({ message: `  MovieActor ${id} has bean modified` });
          })
          .catch(error => {
            res.status(400).json({ message: "error" });
          });
      }
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {delete} /movieactor/:id Delete one MovieActor
 * @apiName deleteMovieActor
 * @apiGroup MovieActor
 *
 * @apiParam {Number} id id of the Actor.
 *
 * @apiSuccess {String} message MovieActor deleted.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       message: "MovieActor deleted"
 *     }
 */
exports.movieactor_delete = (req, res, next) => {
  const id = req.params.id;
  //Vérifier que la relation existe:
  Movie.findByPk(id)
    .then(data => {
      if (data === null) {
        res.status(400).json({ message: "This Movie's ID does not exists !" });
      } else {
        MovieActor.destroy({
          where: {
            id: id
          }
        })
          .then(data => {
            res.json({ message: "MovieActor deleted" });
          })
          .catch(error => {
            res.status(400).json({ message: "error" });
          });
      }
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};
