import Category from '../models/Category';
import Food from '../models/Food';

/**
 * Food category
 */
export const CATEGORIES: Array<Category> = [
    new Category("001", "Food"),
    new Category("002", "Drink"),
    new Category("003", "Desert"),
    new Category("004", "Steak")
];

export const FOODS: Array<Food> = [
    new Food("001", CATEGORIES[0], "Fry banana", 'https://fastly.picsum.photos/id/171/300/200.jpg?hmac=0roxr-564IiFcE3k2Ukps98RD2NtDyjAZYim1P9e1Gw', 2.5),
    new Food("002", CATEGORIES[0], "Fry Potato", 'https://fastly.picsum.photos/id/179/300/200.jpg?hmac=7GdbKuWRM2jUwxmB3OO_4TTRzeXjQqcu3X5jHHX4QTE', 2.0),
    new Food("003", CATEGORIES[1], "Water", 'https://fastly.picsum.photos/id/654/300/200.jpg?hmac=xjzQCZDqdiAao8DX2N7zXhUOkbgjbnWf0-rHYIG78fk', 4.5),
    new Food("004", CATEGORIES[1], "Hot chocolate", 'https://fastly.picsum.photos/id/688/300/200.jpg?hmac=EUPWOoQM1k6_VLj-mTnOpfmjWtwsXTcgYFpM0BPFmc0', 8.0),
    new Food("005", CATEGORIES[1], "Iced Late", 'https://fastly.picsum.photos/id/553/300/200.jpg?hmac=C4YkXv67GpwblVjUrN8qelTOky3R7DciVBKBWD8xzQU', 10.5),
    new Food("006", CATEGORIES[1], "Passion Juice", 'https://fastly.picsum.photos/id/818/300/200.jpg?hmac=un4drnTw0B6hQJVNaHFeeF2vvgFWy2l_OYs5hy5CaxE', 3.5),
    new Food("007", CATEGORIES[2], "Red bean", 'https://fastly.picsum.photos/id/94/300/200.jpg?hmac=qhKGKRqzgTsBKn3vfH1TjSTwRmg7I27xYyi28NqNOPQ', 2.5),
    new Food("008", CATEGORIES[3], "Australia beef", 'https://fastly.picsum.photos/id/559/300/200.jpg?hmac=swzhWRbdrIS6yxQGbWS8EFPaaiZBDWmcdALOCnjoN6M', 9.5),
    new Food("009", CATEGORIES[0], "Fry fish", 'https://fastly.picsum.photos/id/764/300/200.jpg?hmac=1sBuxBDUdVzEEnIKB5S4cXJ_sQ5Tp3ZSnjrHOWF_E20', 25),
    new Food("010", CATEGORIES[0], "Salmon", 'https://fastly.picsum.photos/id/633/300/200.jpg?hmac=cRYYFONERdtzAEhTSVWbBL76hUhdpzzvDV1hGJw6ycw', 2.5),

];
