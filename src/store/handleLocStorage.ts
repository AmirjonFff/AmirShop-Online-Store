// import { IMyCard, IMyproduct } from "./type";

// let products: IMyproduct[] = [];

// //Проверяем что у LocStor ест продукт 
// const storedData = localStorage.getItem("carts");
// if (storedData) {
//   //если ест добавляем в массив
//   products = JSON.parse(storedData);
// }

// export const handleClick = ({ product }: { product: IMyCard }) => {
//   //Проверяем продукт нет
//   const existProduct = products.find((c) => c.id === product?.id);
//   if (existProduct) {
//     console.log('Продукт уже добавлен');
//   } else {
//     //Добавляем новый продукт
//     products.push({ ...product, quantity: 1 });
//     localStorage.setItem("carts", JSON.stringify(products));
//   }
// };


// export const delProduct = (productId: number) => {
//   const existProductIndex = products.findIndex((product) => product.id === productId);
//   if (existProductIndex !== -1) {
//     // Удаляем продукт из массива по индексу
//     products.splice(existProductIndex, 1);
//     // Обновляем данные в localStorage
//     localStorage.setItem("carts", JSON.stringify(products));
//     console.log('Продукт удален');
//   } else {
//     console.log('Продукт не найден');
//   }
// };

