import './js/index.js';
import './index.scss';

// class Post {
//     constructor(options = {}) {
//         this.elem = null;
//         this.btnInfo = null;
//         this.id = options.item.id;
//         this.name = options.item.name;

//         this.eventsAttach();
//     }

//     eventsAttach(){

//     }

//     getInfo(){
//         const info =  {
//             'id': this.id,
//             name: this.name,

//         };
//         console.log(info)
//     }

//     create() {
//         this.elem = document.createElement('div');
//         this.elem.dataset.id = this.id;
//         this.elem.textContent = this.name;
//         this.elem.append(this.createBtnInfo());
//         return this.elem;
//     }

//     createBtnInfo(){
//         this.btnInfo = document.createElement('button');
//         this.btnInfo.textContent='info';
//         this.btnInfo.addEventListener('click',this.getInfo.bind(this));
//         return this.btnInfo;
//     }


// }

// // const obj = {
// //     id: '12321',
// //     name: 'dsasdf'
// // }

// // new Post ({item: obj});

// fetch('api/test').then(res => res.json()).then(res => {
//     if (res) {
//         (res.data).forEach(elem => {
//             let post = new Post({item : elem});
//             document.body.append(post.create())

//         });
//     };
// });
class AuthService {
    constructor() {
        this.url = 'api/auth/';
    }

    login(user = {}) {
        return fetch(this.url + 'login', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(res => res.json());
    }
}

class PostsService {
    constructor() {
        this.url = 'api/posts';
    }

    get() {
        return fetch(this.url).then(res => res.json()).then(res => res.data);
    }
}

const authServie = new AuthService();
const postsService = new PostsService();


const getToken = _ => localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token'))['token'] : {};
const setToken = (token) => localStorage.setItem('token', JSON.stringify(token));
const token = getToken();
const getUser = _ => getToken().length ? JSON.parse(localStorage.getItem('token'))['user'] : null;



const loginForm = document.querySelector('#login');
const postsDiv = document.querySelector('.posts');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.elements.email.value;
    const password = this.elements.password.value;
    const user = {email, password};
    console.log(user);
    authServie.login(user).then(res => {
        setToken(res);
    });
});


const renderButtonDel = (id,user) => {
    return getUser() && getUser()._id===user?'<button data-id="${id}">del</button>':'';
};

const renderPosts = ({_id, title, body, user, date}) => {
    const post = `
    <div style="border: 1px solid;">
        <h2>${title}</h2>    
        <p>${body}</p>
        <p>${date}</p>
        <div class="buttons">
            ${renderButtonDel(_id,user)}
        </div>
    </div>`;
    postsDiv.innerHTML += post;
};

const getPosts = _ => {
    postsService.get().then(posts => {
        if (posts.length) {
            postsDiv.innerHTML = '';
            posts.map(renderPosts);
        }
    });
};


getPosts();


