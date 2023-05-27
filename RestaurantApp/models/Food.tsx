import Category from "./Category";

class Food {
    id: String;
    category: Category;
    name: String;
    imageUrl: String;
    description: String;
    price: number;
    discount: number;

    constructor(id: String, category: Category, name: String, price: number, discount: number = 0.0, imageUrl: String = '', description: String = '') {
        this.id = id;
        this.category = category;
        this.name = name;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.discount = discount;
    }

}

export default Food;