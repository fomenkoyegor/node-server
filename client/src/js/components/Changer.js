export default class Changer {
    constructor(elem1, elem2) {
        this.elem1 = elem1;
        this.elem2 = elem2;
    }

    addeEvents(elem1, elem2) {
        elem1.addEventListener('click', function () {
            elem2.style.display = (elem2.style.display === 'none') ? 'flex' : 'none';
        });
    }

    // static toogler(element) {
    //     element.style.display = (element.style.display === 'none') ? 'flex' : 'none';
    // }


}