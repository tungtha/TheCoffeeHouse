const initialState = {
    product: []
};

export default function detailReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_DETAIL":
            console.log(action.data)
            return {
                product: [action.data]
            };
        default:
            return state;
    }
}