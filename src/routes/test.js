import express from 'express';
var router = express.Router();


const data = [
    { id: 'fjbaskjnfkjanfkjnasfnas', name: "vasya" },
    { id: '1212121211asds1da5s1dasd', name: "petya" },
    { id: 'sfasfkjas712647124912', name: "reqwq" },
    { id: "nkjsdnfjksndfkjnsdkjfnsdfnskjd", name: "zxzxc" },
];

router.get('/', function (req, res, next) {
    res.status(200).send({ data });
});

router.get('/:id', function (req, res) {
    const id = req.params.id;
    const item = data.find(el=>el.id==id);
    res.status(201).send(item)
});

export default router;