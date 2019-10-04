import './libs';
import Changer from './components/Changer';

// Element.prototype.toggleNone = function() {
//     this.style.display = (this.style.display === 'none') ? 'flex' : 'none'; 
// }

const loginbtn = document.querySelector('.auth__btn-login');
const loginsection = document.querySelector('.login-section');
const closebtn = document.querySelector('.login-section__cancel-btn');

Changer.toogle(loginbtn, loginsection);
Changer.close(closebtn, loginsection);

// btn.addEventListener('click', e => nav.toggleNone());