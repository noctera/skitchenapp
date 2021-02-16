let initialState = {
    user: {
        username: "",
        email: "",
        jwt: "",
    },
    serverAddress: "http://192.168.178.58:5000",
    isLoggedIn: false,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                user: {
                    username: action.payload.username,
                    email: action.payload.email,
                    jwt: action.payload.jwt
                },
                isLoggedIn: true,
            }
        case 'SIGN_IN':
            return {
                ...state,
                user: {
                    username: action.payload.username,
                    email: action.payload.email,
                    jwt: action.payload.jwt
                },
                isLoggedIn: true
            }
            
        case 'SIGN_OUT':
            return {
                ...state,
                user: {
                    username: "",
                    email: "",
                    jwt: "",
                },
                serverAddress: "",
                isLoggedIn: false,
            };
        case 'SET_SERVER_SETTINGS':
            return {
                ...state,
                serverAddress: action.payload.serverAddress
            }
        default:
            return state;
    }
}

export default loginReducer;