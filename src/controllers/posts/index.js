import {Post} from "../../models";
const errHendler = require('../../untils/errHendler');

// "GET" locallhost:3000/api/posts?offset=2&limit=5
const get = async (req, res) => {
    try {
        const query = {};
        if (req.query.start) {
            query.date = {
                $gte: req.query.start
            }
        }
        if (req.query.end) {
            if (!query.date) {
                query.date = {}
            }

            query.date['$lte'] = req.query.end
        }
        const posts = await Post
            .find(query)
            .sort({date: -1})
            .skip(+req.query.offset)
            .limit(+req.query.limit);

        res.status(200).json({
            data: posts,
            offset: req.query.offset ? req.query.offset : 0,
            limit: req.query.limit ? req.query.limit : 0,
        });
    } catch (e) {
        errHendler(res, e);
    }
};


// "GET" locallhost:3000/api/posts  {	"title":"test1",	"body":"asdadasdasd"}
const create = async (req, res) => {
    try {
        const post = await new Post({
            title: req.body.title,
            body: req.body.body,
            user: req.user.id,
        }).save();
        res.status(201).json(post);
    } catch (e) {
        errHendler(res, e)
    }
};

const posts = {get, create};

export {posts}

