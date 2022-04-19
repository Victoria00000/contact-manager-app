

const initialState = [
    {
        id: 0,
        name: 'dsddsfds',
        number: 46544646,
        email: 'fdfsas@gmail.com',
    },
    {
        id: 1,
        name: 'ewrewrfds',
        number: 87989789,
        email: 'llcxcxc@gmail.com',
    },
];

 export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            state = [...state, action.payload];
            return state;
        default: return state;
    };
};