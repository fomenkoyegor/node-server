import './libs';
import Changer from './components/Changer';

const newChanger = new Changer();

const btn = document.querySelector('.btn');
const nav = document.querySelector('.mobile-nav');

newChanger.addeEvents(btn, nav);
