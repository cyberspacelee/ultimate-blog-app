import React, {createContext, useState} from 'react'

interface GlobalContextType {
    isWriteModalOpen?: boolean
    setIsWriteModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}


export const GlobalContext = createContext<GlobalContextType>(null as unknown as GlobalContextType)

const GlobalContextProvider = ({children}:React.PropsWithChildren) => {
    const [isWriteModalOpen, setIsWriteModalOpen] = useState(false)
    return (
        <GlobalContext.Provider value={{
            isWriteModalOpen,
            setIsWriteModalOpen
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalContextProvider
