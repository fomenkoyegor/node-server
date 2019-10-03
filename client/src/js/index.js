import './libs';
import Changer from './components/Changer';

// Element.prototype.toggleNone = function() {
//     this.style.display = (this.style.display === 'none') ? 'flex' : 'none'; 
// }

const btn = document.querySelector('.btn');
const nav = document.querySelector('.mobile-nav');

Changer.addeEvents(btn, nav);

// btn.addEventListener('click', e => nav.toggleNone());