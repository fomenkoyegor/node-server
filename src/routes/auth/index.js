const express = require('express');
import {auth} from '../../controllers'

const router = express.Router();

router.post('/login', auth.login);
router.post('/register', auth.register);
router.get('/users',auth.users);

export {router}
