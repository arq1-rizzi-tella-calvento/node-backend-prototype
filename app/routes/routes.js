import express from 'express';

import subjectsList from '../models/subjects';

let router = express.Router();

router.get('/subjects', (req, res, next) => res.json(subjectsList));

export default router;