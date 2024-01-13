import { types } from '../types/types';

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {
                ...state, // Por si el día de mañana hay más elementos en el estado y no queremos perderlos al volver a iniciar sesión
                logged: true,
                user: action.payload
            };
        
        case types.logout:
            return {
                logged: false
            };

        default:
            return state;
    }
}