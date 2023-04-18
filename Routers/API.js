const express = require('express');
const router = express.Router();
const UsersController = require('./../Controller/Users/UsersController')

router.post("/create-user",UsersController.CreateUsers);
router.get("/get-user",UsersController.GetUser);
router.post("/update-user/:id",UsersController.UpdateUser);

module.exports = router;