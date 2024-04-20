import { combineReducers } from '@reduxjs/toolkit'

const rootReducer = combineReducers({})
export type RootState = ReturnType<typeof rootReducer>


export interface IMyCard {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
}
interface Category {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}
export interface IMyproduct extends IMyCard {
  cartQuantity: number;
}