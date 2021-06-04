export class Meme {
    constructor(_id, _name, _image, _dateModified) {
        this.id = _id;
        this.name = _name;
        this.image = _image;
        this.dateModified = new Date(_dateModified).toUTCString();
    }
    show() {
        console.log(this);
    }
    update({ id, name, image, dateModified } = {}) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.dateModified = new Date(dateModified).toUTCString();
    }
}
