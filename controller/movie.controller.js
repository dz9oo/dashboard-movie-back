const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Movie = require("../models/").Movie;

/**
 * @api {get} /movie Show all Movies
 * @apiName getMovie
 * @apiGroup Movie
 *
 * @apiSuccess {Integer} _id id of the Movie.
 * @apiSuccess {String} title Title of the Movie.
 * @apiSuccess {String} description Description of the Movie.
 * @apiSuccess {Integer} year Release's year of the Movie.
 * @apiSuccess {Float} score Score of the Movie.
 * @apiSuccess {String} picture Picture of the Movie.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *            "id": 1,
 *            "title": "Dofus-Livre 1 : Julith ",
 *            "description": "A wonderful movie !",
 *            "year": 2019,
 *            "score": 1.2,
 *            "picture": "linkToPicture.jpg",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *        }
 *      ]
 */
exports.movie_list = (req, res, next) => {
  Movie.findAll({})
    .then(data => {
      if (data.length !== 0) {
        res.status(200).json(data);
      } else {
        res.status(200).json({ message: "Movie's Table is empty !" });
      }
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {get} /movie/:id Show detail of one Movie
 * @apiName getMovieDetail
 * @apiGroup Movie
 *
 * @apiParam {Number} id of the Movie
 *
 * @apiSuccess {Integer} _id id of the Movie.
 * @apiSuccess {String} title Title of the Movie.
 * @apiSuccess {String} description Description of the Movie.
 * @apiSuccess {Integer} year Release's year of the Movie.
 * @apiSuccess {Float} score Score of the Movie.
 * @apiSuccess {String} picture Picture of the Movie.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *            "id": 1,
 *            "title": "Dofus-Livre 1 : Julith ",
 *            "description": "A wonderful movie !",
 *            "year": 2019,
 *            "score": 1.2,
 *            "picture": "linkToPicture.jpg",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *        }
 */
exports.movie_detail = (req, res, next) => {
  const id = req.params.id;
  Movie.findByPk(id)
    .then(data => {
      if (data !== null) {
        res.status(200).json(data);
      } else {
        res.status(200).json({ message: "This movie's ID does not exists !" });
      }
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {post} /movie Add one Movie
 * @apiName addMovie
 * @apiGroup Movie
 *
 * @apiParam {String} title Title of the Movie.
 * @apiParam {String} description Description of the Movie.
 * @apiParam {Integer} year Release's year of the Movie.
 * @apiParam {Float} score Score of the Movie.
 * @apiParam {String} picture Picture of the Movie.
 * @apiParamExample {json} Request-Example:
 *     {
 *            "title": "Dofus-Livre 1 : Julith ",
 *            "description": "A wonderful movie !",
 *            "year": 2019,
 *            "score": 1.2,
 *            "picture": "linkToPicture.jpg",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *     }
 *
 * @apiSuccess {Integer} _id id of the Movie.
 * @apiSuccess {String} title Title of the Movie.
 * @apiSuccess {String} description Description of the Movie.
 * @apiSuccess {Integer} year Release's year of the Movie.
 * @apiSuccess {Float} score Score of the Movie.
 * @apiSuccess {String} picture Picture of the Movie.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *            "id": 1,
 *            "title": "Dofus-Livre 1 : Julith ",
 *            "description": "A wonderful movie !",
 *            "year": 2019,
 *            "score": 1.2,
 *            "picture": "linkToPicture.jpg",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *        }
 *      ]
 */
exports.movie_add = (req, res, next) => {
  Movie.create(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {put} /movie/:id Edit one Movie
 * @apiName editMovie
 * @apiGroup Movie
 *
 * @apiParam {Integer} _id id of the Movie.
 * @apiParam {String} title Title of the Movie.
 * @apiParam {String} description Description of the Movie.
 * @apiParam {Integer} year Release's year of the Movie.
 * @apiParam {Float} score Score of the Movie.
 * @apiParam {String} picture Picture of the Movie.
 * @apiParamExample {json} Request-Example:
 *     {
 *            "title": "Dofus-Livre 1 : Julith ",
 *            "description": "A wonderful movie !",
 *            "year": 2019,
 *            "score": 1.2,
 *            "picture": "linkToPicture.jpg",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *     }
 *
 * @apiSuccess {Integer} _id id of the Movie.
 * @apiSuccess {String} title Title of the Movie.
 * @apiSuccess {String} description Description of the Movie.
 * @apiSuccess {Integer} year Release's year of the Movie.
 * @apiSuccess {Float} score Score of the Movie.
 * @apiSuccess {String} picture Picture of the Movie.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *            "id": 1,
 *            "title": "Dofus-Livre 1 : Julith ",
 *            "description": "A wonderful movie !",
 *            "year": 2019,
 *            "score": 1.2,
 *            "picture": "linkToPicture.jpg",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *     }
 */
exports.movie_edit = (req, res, next) => {
  const id = req.params.id;
  Movie.update(req.body, {
    where: {
      id: id
    }
  })
    .then(data => {
      res.status(200).json({ message: `  Movie ${id} has bean modified` });
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {delete} /movie/:id Delete one Movie
 * @apiName deleteMovie
 * @apiGroup Movie
 *
 * @apiParam {Number} id id of the Movie.
 *
 * @apiSuccess {String} message Movie deleted.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       message: "Movie deleted"
 *     }
 */
exports.movie_delete = (req, res, next) => {
  const id = req.params.id;
  Movie.destroy({
    where: {
      id: id
    }
  })
    .then(data => {
      res.json({ message: "Movie deleted" });
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};
