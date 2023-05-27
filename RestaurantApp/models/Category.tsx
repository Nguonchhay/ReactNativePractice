class Category {

    id: String;
    name: String;
    imageUrl: String;

    constructor(id: String, name: String, imageUrl: String = '') {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
}

export default Category;