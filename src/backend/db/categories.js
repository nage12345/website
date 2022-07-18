import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Love",
    categoryImage:"./assets/love.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Autobiography",
    categoryImage:"./assets/auto.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Finance",
    categoryImage:"./assets/finance.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Novel",
    categoryImage:"./assets/novel.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Comedy",
    categoryImage:"./assets/comedy.jpg",
  },
];
