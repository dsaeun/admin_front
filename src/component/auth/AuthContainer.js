import React, {Component, createContext, useState} from "react";

const AuthContext = createContext({
    state: {user: "", token: ""},
    actions: {
        setUser: () => {},
        setToken: () => {},
    },
});

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("");
    const [token, setToken] = useState("");

    const value = {
        state: { user, token },
        actions: { setUser, setToken },
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const { Consumer: AuthConsumer } = AuthContext;

export { AuthProvider };
export default AuthContext;
