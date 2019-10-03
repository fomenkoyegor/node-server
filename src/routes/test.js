import express from 'express';
var router = express.Router();


const data = [
    {id:0,name:"vasya"},
    {id:1,name:"petya"},
];

router.get('/', function(req, res, next) {
  res.status(200).send({data});
});

export default router;