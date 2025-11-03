import { createContext, useReducer, useEffect } from 'react'

export const AuthContext = createContext()

const initialState = () => {
    try {
        const raw = localStorage.getItem('auth')
        if (!raw) return { user: null, token: null }
        const parsed = JSON.parse(raw)
        return { user: parsed.user || null, token: parsed.token || null }
    } catch (e) {
        return { user: null, token: null }
    }
}

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { user: action.payload.user, token: action.payload.token }
        case 'LOGOUT':
            return { user: null, token: null }
        default:
            return state
    }
}

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, undefined, initialState)

    // Persist auth to localStorage
    useEffect(() => {
        try {
            localStorage.setItem('auth', JSON.stringify({ user: state.user, token: state.token }))
        } catch (e) {
            // ignore
        }
    }, [state.user, state.token])

    const login = (user, token) => dispatch({ type: 'LOGIN', payload: { user, token } })
    const logout = () => dispatch({ type: 'LOGOUT' })

    return (
        <AuthContext.Provider value={{ user: state.user, token: state.token, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}