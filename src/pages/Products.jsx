
import {useDispatch, useSelector} from "react-redux";
import {productAction} from "../store/Products.js";
import {useEffect, useState} from "react";
import {addProduct} from "../store/productsInBasketSlice.js";

const Products = () => {
    const dispatch = useDispatch()
    const product = useSelector(state => state.product.products)
    const {productsAmount} = useSelector(state => state.productsInBasketReducer)
    const [ find, setFind ] = useState(null)

    console.log(productsAmount)
    // useEffect(() => {
    //     const findId = inBasket.find((i) => i.id === i.id)
    //     findId ? setFind(findId) : setFind(null)
    // }, [inBasket])
    // console.log(inBasket)


    const buyClick = (item) => {
        dispatch(addProduct(item))
    }
    return (
        <div>
            {product.map((i)=> (
                <div key={i._id}>
                    {i.name}
                    <br/>
                    <button onClick={()=>buyClick(i)}>BUY</button>
                </div>
            ))}
        </div>
    );
};

export default Products;