import {useDispatch, useSelector} from "react-redux";
import {filterProducts} from "../store/productsInBasketSlice.js";

const BasketPage = () => {

    const basket = useSelector(state => state.productsInBasketReducer.products)
    const dispatch = useDispatch()
    return (
        <div>
            {basket.map((i, index) => (
                <div key={i.id}>
                    <img src={i.images[0]} alt="icon"/>
                    {i.brand}
                    <br/>
                    <button
                        style={{border: "1px solid black"}}
                        onClick={()=>dispatch(filterProducts(index))}
                    >delete
                    </button>
                </div>
            ))}

        </div>
    );
};

export default BasketPage;