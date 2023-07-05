import React, { createContext, ReactNode, useState } from "react";

export const Context = createContext({})


export function Provider({ children }) {
    const [fontSize, setFontSize] = React.useState(14)
    const [cardType, setCardType] = React.useState('digimonRed');
    const [cardValue, setCardValue] = React.useState({
        cardType: 'Digi-Egg',
        name: '',
        dp: 0,
        play_cost: 0,
        digimon_level_cost: 0,
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
        rare: false,
        url: 'https://images.digimoncard.io/images/card-creator/card/common_red_digi.png'
    })



    return (
        <Context.Provider value={{
            cardType,
            setCardType,
            cardValue,
            setCardValue,
            fontSize,
            setFontSize
        }}>{children}</Context.Provider>
    )
}
