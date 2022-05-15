import React, { useContext, useState } from 'react'

const PanelContext = React.createContext()

export function usePanels() {
    return useContext(PanelContext)
}

export const PanelProvider = ({ children }) => {
    const [panel, setPanel] = useState(0);

    const value = {
        panel,
        setPanel,
    }

    return (
        <PanelContext.Provider value={value}>
            {children}
        </PanelContext.Provider>
    )
}
