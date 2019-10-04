import express from 'express';
import {posts} from '../../controllers';

const passport = require('passport');
const router = express.Router();

router.get('/', posts.get);
router.post('/', passport.authenticate('jwt', {session: false}), posts.create);
router.delete('/:id', passport.authenticate('jwt', {session: false}), posts.removeById);
router.patch('/:id', passport.authenticate('jwt', {session: false}), posts.updateById);
router.get('/:id', posts.getById);


export {router};
