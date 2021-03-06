let initialState = {
    user: {
        id: "bf827ee6-291a-4dab-97f1-a740939e9e65",
        username: "Julian",
        email: "test@gmail.com",
        jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImJmODI3ZWU2LTI5MWEtNGRhYi05N2YxLWE3NDA5MzllOWU2NSIsImlhdCI6MTYxNDQyMTQ1N30.Y-1bOAppk9bSD1s8v560WJf0L43BPrDJtOviYEBmxSo",
    },
    serverAddress: "http://192.168.178.58:5000",
    isLoggedIn: true,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                user: {
                    id: action.payload.id,
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
                    id: action.payload.id,
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
                    id: "",
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