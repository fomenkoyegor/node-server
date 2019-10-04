import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
});


const Post = mongoose.model('Post', PostSchema);

export {Post};
