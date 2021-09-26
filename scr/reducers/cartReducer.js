const initialState = {
    products: []
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_CART":
            console.log(action.data)
            const isExist = state.products?.find(e => e._id === action.data?._id) // neu khong co sp thi kq se la undefined
            const productList = isExist
                ? state.products?.map(e => {
                    if (e._id === action.data._id) {
                        return { ...e, quantity: e.quantity + 1 }
                    } else return e
                })
                : [...state.products, action.data] // sp chua co trong list, thi add moi vao

            return {
                products: productList
            };
        case "CHANGE_QUANTITY":
            const isReduce = action.changeQuantityType === 'reduce'
            // const productChangeQuantity = state.products?.map(e => {
            //   if (e._id === action.data._id) {
            //     return { ...e, quantity: isReduce ? (e.quantity - 1) : (e.quantity + 1) }
            //   } else return e
            // })
            const productChangeQuantity = state.products?.map(e => e._id === action.data._id ? ({ ...e, quantity: isReduce ? (e.quantity - 1) : (e.quantity + 1) }) : e)

            return {
                products: productChangeQuantity
            };



        case 'REMOVE_ITEM':
            return {
                products: state.products?.filter(e => e?._id !== action.data?._id)
            }
        case 'REMOVE_ALL':
            return {
                products: []
            }
        case 'REMOVE_CART_TO_MODAL':
            console.log(action.data)
        case "ADD_DETAIL":
            console.log(action.data)
            return {
                product: [...state.products, action.data]
            };

        default:
            return state;
    }
}
