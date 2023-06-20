const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const serviceController = require('../../controller/service.controller')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'resources/');
    },
   
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ dest: storage});


const router = express.Router();


router.get('/services', (req, res) => {
    serviceController.getTasks().then(data => res.json(data));
});

router.post('/service', upload.array('file'), (req, res) => {
    console.log(req.file);
   // taskController.createTask(req.body.task).then(data => res.json(data));
});

router.put('/service', (req, res) => {
    serviceController.updateTask(req.body.task).then(data => res.json(data));
});

router.delete('/service/:id', (req, res) => {
    serviceController.deleteTask(req.params.id).then(data => res.json(data));
});



export default router;
