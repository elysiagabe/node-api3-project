const express = require('express');

const UserDB = require('./userDb');
const PostDB = require('../posts/postDb');

const router = express.Router();

// ~~~ ENDPOINTS ~~~ //
router.post('/', validateUser, (req, res) => {
  // do your magic!
  UserDB.insert(req.body)
  .then(user => {
    res.status(201).json(user)
  })
  .catch(err => {
    res.status(500).json({ errorMessage: "User could not be created." })
  })
});

router.post('/:id/posts', validateUserId, validatePost, (req, res) => {
  // do your magic!
  const newPost = {user_id: req.params.id, ...req.body}
  PostDB.insert(newPost)
  .then(post => {
    res.status(201).json(post)
  })
  .catch(err => {
    res.status(500).json({ errorMessage: "Post could not be created." })
  })
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
    if (posts.length > 0) {
      res.status(200).json(posts)
    } else {
      res.status(200).json({ message: "User does not have any posts." })
    }
  })
  .catch(err => {
    res.status(500).json({ errorMessage: "Specified user's posts could not be retrieved." })
  })
});

router.delete('/:id', validateUserId, (req, res) => {
  // do your magic!
  UserDB.remove(req.params.id)
  .then(count => {
    res.status(200).json({ message: `${count} user(s) has/have been removed.`})
  })
  .catch(err => {
    res.status(500).json({ errorMessage: "Specified user could not be deleted." })
  })
});

router.put('/:id', validateUserId, (req, res) => {
  // do your magic!
});

// ~~~ CUSTOM MIDDLEWARE ~~~ //
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
  if (Object.keys(req.body).length == 0) {
    res.status(400).json({ errorMessage: "Missing user data" });
  } else if (!req.body.name) {
    res.status(400).json({ errorMessage: "Missing required name field" });
  } else {
    next();
  }
};

function validatePost(req, res, next) {
  // do your magic!
  if (Object.keys(req.body).length == 0) {
    res.status(400).json({ errorMessage: "Missing post data" });
  } else if (!req.body.text) {
    res.status(400).json({ errorMessage: "Missing required text field." });
  } else {
    next();
  }
};

module.exports = router;
