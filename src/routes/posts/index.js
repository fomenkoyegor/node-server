import express from 'express';
import {posts} from '../../controllers';

const passport = require('passport');
const router = express.Router();

router.get('/', posts.get);
router.post('/', passport.authenticate('jwt', {session: false}), posts.create);


export {router};
