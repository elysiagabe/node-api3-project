const express = require('express');

const UserDB = require('./userDb');

const router = express.Router();

router.post('/', validateUser, (req, res) => {
  // do your magic!
});

router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
  UserDB.get(req.query)
  .then(users => {
    res.status(200).json(users)
  })
  .catch(err => {
    res.status(500).json({ errorMessage: "Users' information could not be retrieved." })
  })
});

router.get('/:id', validateUserId, (req, res) => {
  // do your magic!
  UserDB.getById(req.params.id)
  .then(user => {
    res.status(200).json(user)
  })
  .catch(err => {
    res.status(500).json({ errorMessage: "Specified user's information could not be retrieved." })
  })
});

router.get('/:id/posts', validateUserId, (req, res) => {
  // do your magic!
  UserDB.getUserPosts(req.params.id)
  .then(posts => {
    res.status(200).json(posts)
  })
  .catch(err => {
    res.status(500).json({ errorMessage: "Specified user's posts could not be retrieved." })
  })
});

router.delete('/:id', validateUserId, (req, res) => {
  // do your magic!
});

router.put('/:id', validateUserId, (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  UserDB.getById(req.params.id)
  .then(user => {
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(400).json({ errorMessage: "Invalid user id" });
    }
  })
  .catch(err => {
    res.status(500).json({ errorMessage: "Error", err });
  })
};

function validateUser(req, res, next) {
  // do your magic!
  if (!req.body) {
    res.status(400).json({ errorMessage: "Missing user data" });
  } else if (!req.body.name) {
    res.status(400).json({ errorMessage: "Missing required name field" });
  } else {
    next();
  }
};

function validatePost(req, res, next) {
  // do your magic!
  if (!req.body) {
    res.status(400).json({ errorMessage: "Missing post data" });
  } else if (!req.body.text) {
    res.status(400).json({ errorMessage: "Missing required text field." });
  } else {
    next();
  }
};

module.exports = router;
