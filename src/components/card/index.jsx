import { Card, PlayCost, Effect, FirstEffectBox, DigivolveCost, DigivolveCostLevel, DP, SecondEffectBox, NameDiv, PlayCostBox, InfoBox, LevelDiv, BoostSetDiv } from "./styled";
import CommonRed from "../../img/DIGIMON-RED.png";
import CommonBlue from "../../img/DIGIMON-BLUE.png";
import CommonYellow from "../../img/DIGIMON-YELOW.png";
import { useContext, useRef } from "react";
import { Context } from "../../provider";
import { Button } from "@mui/material";
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';

export function CardComponent() {
    const { cardType, cardValue } = useContext(Context);

    let cardImage;

    switch (cardType) {
        case "digimonYellow":
            cardImage = CommonYellow;
            break;
        case "digimonBlue":
            cardImage = CommonBlue;
            break;
        default:
            cardImage = CommonRed;
            break;
    }


    const cardRef = useRef(null);

    const saveCardImage = () => {
        const cardElement = cardRef.current;

        const cardWidth = cardElement.offsetWidth;
        const cardHeight = cardElement.offsetHeight;

        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = cardWidth;
        canvas.height = cardHeight;

        const cardImageElement = new Image();
        cardImageElement.src = cardImage;

        cardImageElement.onload = () => {
            context.drawImage(cardImageElement, 0, 0);
            html2canvas(cardElement, { useCORS: true }).then((cardCanvas) => {
                context.drawImage(cardCanvas, 0, 0);
                canvas.toBlob((blob) => {
                    saveAs(blob, 'card_image.png');
                });
            });
        };
    };

    return (
        <div>
            <Card ref={cardRef} style={{ backgroundImage: `url(${cardValue.url})` }}>

                <img src={cardImage} alt="image" />


                <PlayCostBox>
                    <PlayCost>{cardValue.playCost}</PlayCost>
                </PlayCostBox>

                <DigivolveCost>{cardValue.digivolutionCost}</DigivolveCost>
                <DigivolveCostLevel>{`Lv.${cardValue.costLevel}`}</DigivolveCostLevel>
                <DP>{cardValue.DP}</DP>

                <LevelDiv>{cardValue.level}</LevelDiv>
                <NameDiv>{cardValue.name}</NameDiv>
                <BoostSetDiv><p>{cardValue.boostSet}</p></BoostSetDiv>

                <FirstEffectBox>
                    <Effect>
                        {cardValue.requirements}
                    </Effect>
                    <Effect>
                        {cardValue.cardEffect}
                    </Effect>
                </FirstEffectBox>
                <SecondEffectBox>

                    <Effect>
                        {cardValue.inheritedEffect}
                    </Effect>

                </SecondEffectBox>
                <InfoBox>
                    {`${cardValue.form} | ${cardValue.attribute} | ${cardValue.type}`}
                </InfoBox>
            </Card>
            <Button variant="outlined" onClick={saveCardImage} style={{ marginTop: '20px' }}>Salvar como imagem</Button>
        </div>
    );
}
