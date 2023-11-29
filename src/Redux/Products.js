import data from '../json/data.json'

const product = {
    name: data,
    counter: 0,
};
console.log(data)
export const inputReducer = (state = product, action) => {
    switch (action.type) {
        case "count":
            return {...state, counter:state.counter + 1}
        default:
            return state;
    }
};
