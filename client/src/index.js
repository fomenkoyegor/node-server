import './js/index.js';
import './index.scss';

class Post {
    constructor (options = {}) {
        this.id = options.item.id;
        this.name = options.item.name;
        console.log(options);
    }
    create () {
        const elem = document.createElement('div');
        elem.dataset.id = this.id;
        elem.textContent = this.name;
        return elem;
    }
}

// const obj = {
//     id: '12321',
//     name: 'dsasdf'
// }

// new Post ({item: obj});

fetch('api/test').then(res => res.json()).then(res => {
    // console.log(res);
    if (res && res.length) {
        res.forEach(elem => {
            let post = new Post({item: elem});
            console.log(post)
        })
    };
});