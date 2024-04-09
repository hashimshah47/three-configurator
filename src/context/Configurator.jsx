import { Children, createContext, useContext, useState } from "react";

const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({children}) => {
    const [legs, setLegs] = useState(0);
    const [box ,addBox] = useState(false);
    return (
        <ConfiguratorContext.Provider
            value={{
                legs,
                setLegs,
                box,
                addBox
            }}
        >
            {children}
        </ConfiguratorContext.Provider>
    )
}

export const useConfigurator = () => {
    return useContext(ConfiguratorContext);
}