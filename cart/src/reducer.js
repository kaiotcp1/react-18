const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }

    if(action.type === 'REMOVE') {
        return {...state, cart:state.cart.filter((carItem) => 
            carItem.id !== action.payload )} // payload is id
    }

    return state
};

export default reducer;