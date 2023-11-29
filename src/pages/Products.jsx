
import {useDispatch, useSelector} from "react-redux";

const Products = () => {
    const dispatch = useDispatch()
    const product = useSelector(state => state.name)
    const bueClick = ()=> {
        dispatch({type:'count'})
    }
    return (
        <div>
            {product.map((i)=> (
                <div key={i.id}>
                    {i.name}
                    <br/>
                    <button onClick={bueClick}>BUE</button>
                </div>
            ))}
        </div>
    );
};

export default Products;