import 'reflect-metadata';
import { Router, Request, Response } from 'express';
import Container from 'typedi';

const router = Router();

import GreetingsController from '../controllers/greetings.controller';

const greetingsController = Container.get(GreetingsController);

router.get(
    '/',
    async (req, res) => await greetingsController.greetings(req, res)
);

export default router;
