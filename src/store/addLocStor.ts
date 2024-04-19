import { IMyCard, IMyproduct } from "./type";

let products: IMyproduct[] = [];


const storedData = localStorage.getItem("carts");
if (storedData) {
  products = JSON.parse(storedData);
}

export const handleClick = ({ product }: { product: IMyCard }) => {
  const existProduct = products.find((c) => c.id === product?.id);
  if (existProduct) {
    console.log('Продукт уже добавлен');
  } else {
    products.push({ ...product, quantity: 1 });
    localStorage.setItem("carts", JSON.stringify(products));
  }
};


export const delProduct = (productId: number) => {
  const existProductIndex = products.findIndex((product) => product.id === productId);
  if (existProductIndex !== -1) {
    // Удаляем продукт из массива по индексу
    products.splice(existProductIndex, 1);
    // Обновляем данные в localStorage
    localStorage.setItem("carts", JSON.stringify(products));
    console.log('Продукт удален');
  } else {
    console.log('Продукт не найден');
  }
};