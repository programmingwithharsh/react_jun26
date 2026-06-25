import products from '../data/products';
// products will get replaced with API response data
const ProductReducer = (state = products, action) => { // update state based on action
    switch (action.type) {
        case "REMOVE_PRODUCT":
            return [...state]; // write a logic to remove project here

        case "ADD_PRODUCT":
            return [...state, action.product]; // add product logic 

        case "LOAD_PRODUCTS":
            return [...state]; // load all products

        default:
            return state; // by default when any other action dispatch
    }
}

export default ProductReducer;