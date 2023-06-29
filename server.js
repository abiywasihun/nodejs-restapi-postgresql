const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
require('dotenv').config()

const userController = require('./controller/user.controller')
const serviceController = require('./controller/service.controller')
const cartController = require('./controller/cart.controller')
const budgetController=require('./controller/budget.controller')

const DIR = './resources/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

const upload = multer({ storage: storage});


const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use('/resources', express.static('resources'))


app.get('/api/users', (req, res) => {
    userController.getUsers().then(data => res.json(data));
});

app.post('/api/register', (req, res) => {
    console.log(req.body);
    userController.createUser(req.body.user).then(data => res.json(data));
});

app.post('/api/login', (req, res) => {
    console.log(req.body);
    userController.loginUser(req.body).then(data => res.json(data));
});

app.put('/api/user', (req, res) => {
    userController.updateUser(req.body.user).then(data => res.json(data));
});

app.delete('/api/user/:id', (req, res) => {
    userController.deleteUser(req.params.id).then(data => res.json(data));
});

app.get('/api/services', (req, res) => {
    serviceController.getServices().then(data => res.json(data));
});

app.post('/api/services', (req, res) => {
    console.log(req.body);
    serviceController.getService(req.body).then(data => res.json(data));
});

app.get('/api/service/:id', (req, res) => {
    serviceController.getServiceById(req.params.id).then(data => res.json(data));
});

app.post('/api/service', upload.array('files'), (req, res) => {
    const services={...req.body}
    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/resources/' + req.files[i].filename)
    }
    services.UploadPicturesVideos=reqFiles.toString()
    serviceController.createService(services).then(data => res.json(data));
});

app.put('/api/service', (req, res) => {
    serviceController.updateService(req.body.user).then(data => res.json(data));
});

app.delete('/api/service/:id', (req, res) => {
    serviceController.deleteService(req.params.id).then(data => res.json(data));
});


app.get('/api/carts', (req, res) => {
    cartController.getCarts().then(data => res.json(data));
});

app.post('/api/carts', (req, res) => {
    console.log(req.body);
    cartController.getCart(req.body).then(data => res.json(data));
});

app.post('/api/carts/vendor', (req, res) => {
    console.log(req.body);
    cartController.getCartsByUserId(req.body).then(data => res.json(data));
});

app.post('/api/cart', (req, res) => {
    console.log(req.body);
    cartController.createCart(req.body).then(data => res.json(data));
});

app.put('/api/cart', (req, res) => {
    cartController.updateCart(req.body).then(data => res.json(data));
});

app.delete('/api/cart/:id', (req, res) => {
    cartController.deleteCart(req.params.id).then(data => res.json(data));
});

app.get('/api/cart/:id', (req, res) => {
    cartController.getCartById(req.params.id).then(data => res.json(data));
});



app.get('/api/budgets', (req, res) => {
    budgetController.getBudgets().then(data => res.json(data));
});

app.post('/api/budgets', (req, res) => {
    console.log(req.body);
    budgetController.getBudget(req.body).then(data => res.json(data));
});

app.post('/api/budget', (req, res) => {
    console.log(req.body);
    budgetController.createBudget(req.body).then(data => res.json(data));
});

app.put('/api/budget', (req, res) => {
    budgetController.updateBudget(req.body).then(data => res.json(data));
});

app.delete('/api/budget/:id', (req, res) => {
    budgetController.deleteBudget(req.params.id).then(data => res.json(data));
});

app.get('/api/budget/:id', (req, res) => {
    budgetController.getBudgetById(req.params.id).then(data => res.json(data));
});


app.get('/', (req, res) => {
    res.send(`<h1>API Works !!!</h1>`)
});



app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})