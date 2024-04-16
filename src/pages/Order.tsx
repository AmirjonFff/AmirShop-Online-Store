import { useState } from "react";
import { IMyCard } from "../store/type";

function Order() {

    const [products, setProducts] = useState<IMyCard[]>(
        JSON.parse(localStorage.getItem("carts") as string) || []
    );
    setProducts
    console.log(products);
    

    return (
        <div>
           
        </div>
    )
}

export default Order
