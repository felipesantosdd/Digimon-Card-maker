import React, { createContext, ReactNode, useState } from "react";

export const Context = createContext({})


export function Provider({ children }) {
    const [cardType, setCardType] = React.useState('digimonRed');
    const [cardValue, setCardValue] = React.useState({
        name: '',
        playCost: 3,
        DP: 0,
        costLevel: 0,
        digivolutionCost: 0,
        requirements: '',
        cardEffect: '',
        boostSet: '',
        level: 0,
        form: '',
        attribute: '',
        type: '',
        inheritedEffect: '',
        url: ''
    })

    return (
        <Context.Provider value={{
            cardType,
            setCardType,
            cardValue,
            setCardValue
        }}>{children}</Context.Provider>
    )
}
