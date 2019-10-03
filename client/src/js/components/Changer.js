export default class Changer {

    static addeEvents(elem1, elem2) {
        elem1.addEventListener('click', function () {
            elem2.style.display = (elem2.style.display === 'none') ? 'flex' : 'none';
        });
    }

}