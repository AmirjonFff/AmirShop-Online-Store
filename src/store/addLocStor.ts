import { IMyCard } from "./type";
export interface IAddToCard {
  product: IMyCard | undefined;
}
const products: IMyCard[] =
  JSON.parse(localStorage.getItem("carts") as string) || [];

export const handleClick = ({ product }: IAddToCard) => {
  const existProduct = products.find((c) => c.id === product?.id);
  if (existProduct) {
  } else {
    const data = [...products, { ...product, quantity: 1 }];
    localStorage.setItem("carts", JSON.stringify(data));
  }
};
