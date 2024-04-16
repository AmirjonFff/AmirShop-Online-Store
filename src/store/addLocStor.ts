// import { toast } from "react-toastify";

import { IMyCard } from "./type";

export interface IAddToCard {
  product: IMyCard | undefined;
}

export const handleClick = ({ product }: IAddToCard) => {
    console.log(product);
    
  const products: IMyCard[] =
    JSON.parse(localStorage.getItem("carts") as string) || [];

  const existProduct = products.find((c) => c.id === product?.id);
  if (existProduct) {
    // toast.success("Этот продукт был добавлен ранее ))");
  } else {
    const data = [...products, { ...product, quantity: 1 }];
    localStorage.setItem("carts", JSON.stringify(data));
    // toast.success("Товар добавлен в корзину!!");
  }
};