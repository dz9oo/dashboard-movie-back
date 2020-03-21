const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Sequelize = require("sequelize");
const User = require("../models").User;

/**
 * @api {get} /users Show all Users
 * @apiName getUser
 * @apiGroup User
 *
 * @apiSuccess {Integer} id id of the User.
 * @apiSuccess {String} email Email of the User.
 * @apiSuccess {String} password Password of the User.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *            "id": 1,
 *            "email": "john.doe@free.fr",
 *            "password": "fd92fhhzoodjjje928dnhhee-342jjdk6",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *        }
 *      ]
 */
exports.user_list = (req, res, next) => {
  User.findAll({})
    .then(data => {
      if (data.length !== 0) {
        res.status(200).json(data);
      } else {
        res.status(200).json({ message: "User's Table is empty !" });
      }
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {get} /users/:id Show detail of one User
 * @apiName getUserDetail
 * @apiGroup User
 *
 * @apiParam {Number} id of the User
 *
 * @apiSuccess {Integer} id id of the User.
 * @apiSuccess {String} email Email of the User.
 * @apiSuccess {String} password Password of the User.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *        {
 *            "id": 1,
 *            "email": "john.doe@free.fr",
 *            "password": "fd92fhhzoodjjje928dnhhee-342jjdk6",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *        }
 */
exports.user_detail = (req, res, next) => {
  const id = req.params.id;
  User.findByPk(id)
    .then(data => {
      if (data !== null) {
        res.status(200).json(data);
      } else {
        res.status(200).json({ message: "This user's ID does not exists !" });
      }
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {post} /users/signup Sign UP
 * @apiName signUpUser
 * @apiGroup User
 *
 * @apiParam {String} email Email of the User.
 * @apiParam {String} password Password of the User.
 * @apiParamExample {json} Request-Example:
 *     {
 *            "email": "john.doe@free.fr",
 *            "password": "fd92fhhzoodjjje928dnhhee-342jjdk6",
 *     }
 *
 * @apiSuccess {Integer} id id of the User.
 * @apiSuccess {String} email Email of the User.
 * @apiSuccess {String} password Password of the User.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *        {
 *            "id": 1,
 *            "email": "john.doe@free.fr",
 *            "password": "fd92fhhzoodjjje928dnhhee-342jjdk6",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *        }
 *      ]
 */
exports.user_signup = (req, res, next) => {
  const Op = Sequelize.Op;
  /* Vérifier que l'utilisateur n'existe pas deja en BDD 
      email et username doivent etre uniques
    */
  let { email, username } = req.body;
  User.findAll({
    where: {
      email: email
    }
  })
    .then(data => {
      if (data.length !== 0) {
        res.status(400).json({ message: "email/username already exist !" });
      } else {
        // Recherche des coord de user à partir de son adresse:
        //Création de l'user en BDD avec password hashé :
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          const newUser = Object.assign(req.body, {
            password: hash
          });

          User.create(newUser)
            .then(data => {
              res.status(201).json(data);
            })
            .catch(error => {
              res.status(400).json({ message: error });
            });
        });
      }
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {put} /users/:id Edit one User
 * @apiName editUser
 * @apiGroup User
 *
 * @apiParam {Integer} id id of the User.
 * @apiParam {String} email Email of the User.
 * @apiParam {String} password Password of the User.
 * @apiParamExample {json} Request-Example:
 *     {
 *            "email": "john.doe@free.fr",
 *            "password": "fd92fhhzoodjjje928dnhhee-342jjdk6",
 *     }
 *
 * @apiSuccess {Integer} id id of the User.
 * @apiSuccess {String} email Email of the User.
 * @apiSuccess {String} password Password of the User.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *            "id": 1,
 *            "email": "john.doe@free.fr",
 *            "password": "fd92fhhzoodjjje928dnhhee-342jjdk6",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *     }
 */
exports.user_edit = (req, res, next) => {
  const id = req.params.id;
  User.update(req.body, {
    where: {
      id: id
    }
  })
    .then(data => {
      res.status(200).json({ message: `User ${id} has bean modified` });
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {delete} /users/:id Delete one User
 * @apiName deleteUser
 * @apiGroup User
 *
 * @apiParam {Number} id id of the User.
 *
 * @apiSuccess {String} message User deleted.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       message: "User deleted"
 *     }
 */
exports.user_delete = (req, res, next) => {
  const id = req.params.id;
  User.destroy({
    where: {
      id: id
    }
  })
    .then(data => {
      res.json({ message: "User deleted" });
    })
    .catch(error => {
      res.status(400).json({ message: "error" });
    });
};

/**
 * @api {post} /users/signin Sign IN
 * @apiName SigninUser
 * @apiGroup User
 * 
 * @apiParam {String} email email of the User.
 * @apiParam {String} password password of the User.
 * @apiParamExample {json} Request-Example:
*     {
*       "email": "john.doe@emailing.fr",
*       "password": "azerty"
*     }
 * 
 * @apiSuccess {String} message message
 * @apiSuccess {String} id id of the User.
 * @apiSuccess {String} email Email of the User.
 * @apiSuccess {String} password password of the User.
 * @apiSuccess {String} token token 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *  "message": "You win - authentication ok",
 *   "user": {
 *            "id": 3,
 *            "email": "john.doe@emailing.fr",
 *            "password": "$2b$10$Q.vphQPV..2Sgi1Ziba6v.gUeUMaaoYSmHxdoT3RCu6NFUXvTgoq.",
 *            "createdAt": "2020-02-10T22:15:34.000Z",
 *            "updatedAt": "2020-02-10T22:15:34.000Z"
 *   },
 *   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyZWdAcHJlc2NpZW5jZS5mciIsImlhdCI6MTU4MTM3NTAyMSwiZXhwIjoxNTgxMzgyMjIxfQ.Zms2rIUfmwNhT1fE81msZ6SO1r-oFJ6kciKRvg5G70w"
}
 */
exports.user_signin = (req, res, next) => {
  const { email } = req.body;
  User.findOne({
    where: {
      email: email
    }
  })
    .then(user => {
      if (user === null) {
        res.status(400).json({ message: "This user does not exists !" });
      } else {
        verifyPassword(user, req, res);
      }
    })
    .catch(error => {
      res.status(400).json({ message: error });
    });
};

const verifyPassword = (user, req, res) => {
  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if (err) return res.status(500).json(err);
    else {
      if (result) return getToken(user, res);
      else return res.json({ message: "Authentication Fail !" });
    }
  });
};

const getToken = (user, res) => {
  const token = jwt.sign(
    { email: user.email, userId: user._id },
    process.env.JWT_KEY,
    { expiresIn: "2h" }
  );
  res.json({
    message: "You win - authentication ok",
    token: token
  });
};
