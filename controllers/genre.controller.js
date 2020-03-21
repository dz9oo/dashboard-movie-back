const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Genre = require("../models").Genre;

/**
 * @api {get} /genres Show all Genres
 * @apiName getGenre
 * @apiGroup Genre
 *
 * @apiSuccess {Integer} id id of the Genre.
 * @apiSuccess {String} name Name of the Genre.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *            "id": 1,
 *            "name": "fantastic",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *        }
 *      ]
 */
exports.genre_list = (req, res, next) => {
  Genre.findAll({})
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
 * @api {get} /genres/:id Show detail of one Genre
 * @apiName getGenreDetail
 * @apiGroup Genre
 *
 * @apiParam {Number} id of the Genre
 *
 * @apiSuccess {Integer} id id of the Genre.
 * @apiSuccess {String} name Name of the Genre.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *            "id": 1,
 *            "name": "fantastic",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *        }
 */
exports.genre_detail = (req, res, next) => {
  const id = req.params.id;
  Genre.findByPk(id)
    .then(data => {
      if (data !== null) {
        res.status(200).json(data);
      } else {
        res.status(200).json({ message: "This genre's ID does not exists !" });
      }
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {post} /genres Add one Genre
 * @apiName addGenre
 * @apiGroup Genre
 *
 * @apiParam {String} name Name of the Genre.
 * @apiParamExample {json} Request-Example:
 *     {
 *            "name": "fantastic"
 *     }
 *
 * @apiSuccess {Integer} id id of the Genre.
 * @apiSuccess {String} name Name of the Genre.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *            "id": 1,
 *            "name": "fantastic",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *        }
 *      ]
 */
exports.genre_add = (req, res, next) => {
  Genre.create(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {put} /genres/:id Edit one Genre
 * @apiName editGenre
 * @apiGroup Genre
 *
 * @apiParam {Integer} id id of the Genre.
 * @apiParam {String} name Name of the Genre.
 * @apiParamExample {json} Request-Example:
 *     {
 *            "name": "fantastic"
 *     }
 *
 * @apiSuccess {Integer} id id of the Genre.
 * @apiSuccess {String} name Name of the Genre.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *            "id": 1,
 *            "name": "fantastic",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *     }
 */
exports.genre_edit = (req, res, next) => {
  const id = req.params.id;
  Genre.update(req.body, {
    where: {
      id: id
    }
  })
    .then(data => {
      res.status(200).json({ message: `  Genre ${id} has bean modified` });
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {delete} /genres/:id Delete one Genre
 * @apiName deleteGenre
 * @apiGroup Genre
 *
 * @apiParam {Number} id id of the Genre.
 *
 * @apiSuccess {String} message Genre deleted.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       message: "Genre deleted"
 *     }
 */
exports.genre_delete = (req, res, next) => {
  const id = req.params.id;
  Genre.destroy({
    where: {
      id: id
    }
  })
    .then(data => {
      res.json({ message: "Genre deleted" });
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};
