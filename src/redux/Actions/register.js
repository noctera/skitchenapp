export const register = (props) => {
    return {
        type: 'REGISTER',
        payload: {
            id: props.id,
            username: props.username,
            email: props.email,
            jwt: props.jwt
        }
    }
} 