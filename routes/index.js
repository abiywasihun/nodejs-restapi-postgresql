import express from 'express';
import user from './user/user.route.js';
import task from './task/task.route.js';

const router = express.Router();

router.use('/api', user);
router.use('/api', task);


export default router;