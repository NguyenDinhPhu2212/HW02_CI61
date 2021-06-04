import { Meme } from "./module/Meme.js";
import { MemeCollection } from "./module/MemeCollection.js";
import {Product,Household,Clothes,Food} from "./module/Product.js";
import {ProductManagement} from "./module/ProductManagement.js";
const meme = new Meme(
    1,
    "haha",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fcuoihaha.official%2F&psig=AOvVaw33aDKVw1_tgXjqExNF8ALD&ust=1622870320659000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDkuZmd_fACFQAAAAAdAAAAABAD",
    "4/6/2021"
);
meme.show();
meme.update({ id: 2, name: "haaa", image: "none", dateModified: "5/6/2021" });
meme.show();

const memeCollection = new MemeCollection(1,"haha", "phu",[meme]);
memeCollection.show();
const tmp = new Meme(
    2,
    "haha",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2Fcuoihaha.official%2F&psig=AOvVaw33aDKVw1_tgXjqExNF8ALD&ust=1622870320659000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDkuZmd_fACFQAAAAAdAAAAABAD",
    "4/6/2021"
);
memeCollection.add(tmp);
memeCollection.update(1,{ id: 3, name: "haaa", image: "none", dateModified: "5/6/2021" });
memeCollection.delete(1);
memeCollection.show();
let shirt = new Clothes(1,"shirt",100,'aaa',10,'4/6/2021','VN','Cotton');
let manage = new ProductManagement();


manage.add(shirt);

manage.sold(shirt);

manage.totalSell();