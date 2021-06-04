import { Meme } from "./Meme.js";

const check = (memes) => {
    for (let i of memes) {
        if (!(i instanceof Meme)) {
            return false;
        }
    }
    return true;
};
export class MemeCollection {
    constructor(_id, _name, _owner, _memes) {
        this.id = _id;
        this.name = _name;
        this.owner = _owner;
        if (check(_memes)) [...this.memes] = _memes;
    }
    add(meme){
        if(meme instanceof Meme){
            this.memes.push(meme);
        }
    }
    update(id, data){
        for(let i of this.memes){
            if(i.id === id){
                i.update(data);
            }
        }
    }
    delete(id){
        for(let i in this.memes){
            if(this.memes[i].id == id){
                this.memes.splice(i,1);
            }
        }
    }
    show(){
        console.log(this);
    }
}
