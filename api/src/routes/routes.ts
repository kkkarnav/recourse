import express from 'express';
import controller from '../controllers/controllers';
import {Course} from '../models/course/model';

const router = express.Router();

router.get('/api/courses', controller.getCourses);
router.get('/api/course/:id', controller.getCourse);

export = router;
