import { createContext, useState } from "react";

export const AppContext = createContext()
export const AppProvider = ({ children }) => {
    const [cidade, setCidade] = useState('')

    return (
        <AppContext.Provider value={{cidade, setCidade}}>
            {children}
        </AppContext.Provider>
    )
}