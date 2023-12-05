import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../store/productsInBasketSlice.js";
import axios from "axios";
import {fetchData} from "../store/Products.js";
import {useEffect} from "react";

const Products = () => {

    const dispatch = useDispatch()
    const product = useSelector(state => state.product.products)
    // const {productsAmount} = useSelector(state => state.productsInBasketReducer)

    useEffect(() => {
        dispatch(fetchData())
    }, [])
    // console.log(productsAmount)
    //
    console.log(product)

    const buyClick = (item) => {
        dispatch(addProduct(item))
    }
    return (
        <div>
            {product.map((i) => (
                <div key={i.id}>
                    <img src={i.images[0]} alt="icon"/>
                    {i.brand}
                    <br/>
                    <button style={{border: "1px solid black"}} onClick={() => buyClick(i)}>BUY</button>
                </div>
            ))}
        </div>
    );
};

export default Products;