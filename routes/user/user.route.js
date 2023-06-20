const express = require('express');
const bodyParser = require('body-parser');

const userController = require('../../controller/user.controller')



const router = express.Router();


router.get('/users', (req, res) => {
    userController.getUsers().then(data => res.json(data));
});

router.post('/user', (req, res) => {
    console.log(req.body);
    userController.createUser(req.body.user).then(data => res.json(data));
});

router.put('/user', (req, res) => {
    userController.updateUser(req.body.user).then(data => res.json(data));
});

router.delete('/user/:id', (req, res) => {
    userController.deleteUser(req.params.id).then(data => res.json(data));
});



export default router;
