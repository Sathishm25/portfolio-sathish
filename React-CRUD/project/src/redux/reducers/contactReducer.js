const initialState = [
    {
        id: 1,
        name: 'Sathish',
        number: 123456789,
        email: 'Rajini@gmail.com'
},
{
        id: 2,
        name: 'Dhoni',
        number: 456123456,
        email: 'Dhoni@gmail.com'
}
];

const contactReducer = (state = initialState, action) => {
        switch(action.type) {
            case "ADD_CONTACT":
                state = [...state, action.payload];
                return state;
             case "UPDATE_CONTACT":
                const updateState = state.map(contact => contact.id === action.payload.id 
                    ? action.payload: contact);
                    state = updateState;
                    return state;
                case "DELETE_CONTACT":
                        const filtercontacts = state.filter(contact => contact.id !== action.payload
                                && contact);
                        state = filtercontacts;
                        return state;
            default:
                return state;
        }
};

export default contactReducer;