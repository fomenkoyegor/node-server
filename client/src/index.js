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

<<<<<<< HEAD
// fetch('api/test').then(res => res.json()).then(res => {
//     if (res) {
//         (res.data).forEach(elem => {
//             let post = new Post({item : elem});
//             document.body.append(post.create())
        
//         });
//     };
// });
=======
fetch('api/test').then(res => res.json()).then(res => {
    if (res) {
        (res.data).forEach(elem => {
            let post = new Post({item : elem});
            document.body.append(post.create())
         
        });
    };
});
>>>>>>> 5e9c0ea52f9b0284f19080a14cc6b91f536d038c
