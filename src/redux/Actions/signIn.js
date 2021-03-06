export const signIn = (props) => {
    return {
        type: 'SIGN_IN',
        payload: {
            id: props.id,
            username: props.username,
            email: props.email,
            jwt: props.jwt,
            
        }
    }
} 