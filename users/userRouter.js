const express = require('express');

const UserDB = require('./userDb');

const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
  const id = req.params;
  UserDB.getById(id)
  .catch(user => {
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(400).json({ errorMessage: "Invalid user id" });
    }
  })
  .then(err => {
    res.status(500).json({ errorMessage: "Oops! There was an issue with our server." });
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
