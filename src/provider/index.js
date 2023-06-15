import React, { createContext, ReactNode, useState } from "react";

export const Context = createContext({})


export function Provider({ children }) {
    const [cardType, setCardType] = React.useState('digimonRed');
    const [cardValue, setCardValue] = React.useState({
        cardType: 'digimon',
        name: '',
        dp: 0,
        play_cost: 0,
        evolution_cost: 0,
        requirements: '',
        level: '0',
        stage: '',
        attribute: '',
        cardEffect: '',
        cardnumber: '',
        digi_type: '',
        soureeffect: '',
        type: '',
        fontSize: '',
        color: '',
        url: 'https://images.digimoncard.io/images/card-creator/card/common_red_digi.png'
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
