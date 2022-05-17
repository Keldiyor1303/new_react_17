import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";
let str = "qwertyuiopasdfghjklzxcvbnm1234567890";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    // encode token
    // console.log(state.user);

    localStorage.setItem("user", JSON.stringify(state.user));

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}