import React, { createContext, ReactNode, useState } from "react";

export const Context = createContext({})


export function Provider({ children }) {
    const [cardType, setCardType] = React.useState('digimonRed');
    const [cardValue, setCardValue] = React.useState({
        name: 'AeroVeedramon',
        dp: 7,
        play_cost: 8,
        evolution_cost: 3,
        requirements: '',
        level: '5',
        stage: 'Ultimate',
        attribute: 'Vaccine',
        cardEffect: '[On Play] [When Digivolving] Reveal the top 3 cards of your deck. Add 1 [X Antibody] and 1 card with [Greymon]\/[Omnimon] in its name among them to your hand. Place the remaining cards at the bottom of your deck in any order.',
        cardnumber: 'EX3-033',
        digi_type: 'Holy Dragon',
        soureeffect: '[Your Turn] While this Digimon has the [Wizard]\/[Demon Lord] trait, it gets +2000 DP.',
        type: 'Digimon',
        fontSize: 'Black',
        color: 'Yellow',
        url: 'https://cdn.shopify.com/s/files/1/0314/7808/7819/products/493710.jpg'
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
