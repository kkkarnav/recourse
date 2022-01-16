import express from 'express';
import controller from '../controllers/controllers';

const router = express.Router();

router.get('/course/:id', controller.getCourse);

export = router;
