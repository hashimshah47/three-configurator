import {  createContext, useContext, useState } from "react";

const BoxContext = createContext();

export const BoxProvider = ({children}) => {

    const [isBoxSelect ,setIsBoxSelect] = useState(true);
    const [leftClicked ,setLeftClicked] = useState(false);
    const [rightClicked ,setRightClicked] = useState(false);



    return (
        <BoxContext.Provider
            value={{
                isBoxSelect ,setIsBoxSelect,
                leftClicked ,setLeftClicked,
                rightClicked ,setRightClicked
            }}
        >
            {children}
        </BoxContext.Provider>
    )
}

export const useBoxContext = () => {
    return useContext(BoxContext);
}