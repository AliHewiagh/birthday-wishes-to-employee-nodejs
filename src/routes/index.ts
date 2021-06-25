import { Router } from 'express';
import greetings from './greeting';

const router = Router();

router.use('/greeting', greetings);

export default router;
