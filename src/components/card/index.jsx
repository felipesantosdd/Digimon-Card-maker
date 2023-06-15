import { useRef, useEffect } from "react";
import { saveAs } from "file-saver";
import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../provider";
import CommonRed from "../../img/DIGIMON-RED.png";
import CommonBlue from "../../img/DIGIMON-BLUE.png";
import CommonYellow from "../../img/DIGIMON-YELLOW.png";
import CommonBlack from "../../img/DIGIMON-BLACK.png"
import CommonGreen from "../../img/DIGIMON-GREEN.png"
import CommonPurple from "../../img/DIGIMON-PURPLE.png"
import CommonWhite from "../../img/DIGIMON-WHITE.png"

import DigitamaBlack from "../../img/DIGITAMA-BLACK.png"
import DigitamaBlue from "../../img/DIGITAMA-BLUE.png"
import DigitamaGreen from "../../img/DIGITAMA-GREEN.png"
import DigitamaPURPLE from "../../img/DIGITAMA-PURPLE.png"
import DigitamaRED from "../../img/DIGITAMA-RED.png"
import DigitamaYELLOW from "../../img/DIGITAMA-YELLOW.png"

import TamerBLACK from "../../img/TAMER-BLACK.png"
import TamerBLUE from "../../img/TAMER-BLUE.png"
import TamerGREEN from "../../img/TAMER-GREEN.png"
import TamerPURPLE from "../../img/TAMER-PURPLE.png"
import TamerRED from "../../img/TAMER-RED.png"
import TamerYELLOW from "../../img/TAMER-YELLOW.png"

import RareBlack from "../../img/RARE-BLACK.png"
import RareBlue from "../../img/RARE-BLUE.png"
import RarePurple from "../../img/RARE-PURPLE.png"
import RareRed from "../../img/RARE-RED.png"
import RareYellow from "../../img/RARE-YELLOW.png"
import RareGreen from "../../img/RARE-GREEN.png"
import RareWhite from "../../img/RARE-WHITE.png"

import OptionBlack from "../../img/OPTION-BLACK.png"
import OptionBLUE from "../../img/OPTION-BLUE.png"
import OptionGREEN from "../../img/OPTION-GREEN.png"
import OptionPURPLE from "../../img/OPTION-PURPLE.png"
import OptionRED from "../../img/OPTION-RED.png"
import OptionYELLOW from "../../img/OPTION-YELLOW.png"






export function CardComponent() {



    const { cardValue } = useContext(Context);

    let cardImage;
    switch (cardValue.color) {
        case "Yellow":
            switch (cardValue.type) {
                case "Tamer":
                    cardImage = TamerYELLOW;
                    break;
                case "Digimon":
                    switch (cardValue.stage) {
                        case "Mega":
                            cardImage = RareYellow
                            break;
                        default:
                            cardImage = CommonYellow
                    }break
                case "Option":
                    cardImage = OptionYELLOW;
                    break;
                case "Digi-Egg":
                    cardImage = DigitamaYELLOW;
                    break;
                default:
                    cardImage = CommonYellow;
                    break;
            }
            break;
        case "Blue":
            switch (cardValue.type) {
                case "Tamer":
                    cardImage = TamerBLUE;
                    break;
                case "Digimon":
                    switch (cardValue.stage) {
                        case "Mega":
                            cardImage = RareBlue
                            break;
                        default:
                            cardImage = CommonBlue
                    }break
                case "Option":
                    cardImage = OptionBLUE;
                    break;
                case "Digi-Egg":
                    cardImage = DigitamaBlue;
                    break;
                default:
                    cardImage = CommonBlue;
                    break;
            }
            break;
        case "Green":
            switch (cardValue.type) {
                case "Tamer":
                    cardImage = TamerGREEN;
                    break;
                case "Digimon":
                    switch (cardValue.stage) {
                        case "Mega":
                            cardImage = RareGreen
                            break;
                        default:
                            cardImage = CommonGreen
                    }break
                case "Option":
                    cardImage = OptionGREEN;
                    break;
                case "Digi-Egg":
                    cardImage = DigitamaGreen;
                    break;
                default:
                    cardImage = CommonGreen;
                    break;
            }
            break;
        case "Purple":
            switch (cardValue.type) {
                case "Tamer":
                    cardImage = TamerPURPLE;
                    break;
                case "Digimon":
                    switch (cardValue.stage) {
                        case "Mega":
                            cardImage = RarePurple
                            break;
                        default:
                            cardImage = CommonPurple
                    }break
                case "Option":
                    cardImage = OptionPURPLE;
                    break;
                case "Digi-Egg":
                    cardImage = DigitamaPURPLE;
                    break;
                default:
                    cardImage = CommonPurple;
                    break;
            }
            break;
        case "Black":
            switch (cardValue.type) {
                case "Tamer":
                    cardImage = TamerBLACK;
                    break;
                case "Digimon":
                    switch (cardValue.stage) {
                        case "Mega":
                            cardImage = RareBlack
                            break;
                        default:
                            cardImage = CommonBlack
                    }break
                case "Option":
                    cardImage = OptionBlack;
                    break;
                case "Digi-Egg":
                    cardImage = DigitamaBlack;
                    break;
                default:
                    cardImage = CommonBlack;
                    break;
            }
            break;
        case "White":
            switch (cardValue.type) {
                case "Tamer":
                    cardImage = TamerBLACK;
                    break;
                case "Digimon":
                    switch (cardValue.stage) {
                        case "Mega":
                            cardImage = RareWhite
                            break;
                        default:
                            cardImage = CommonWhite
                    }break
                case "Option":
                    cardImage = OptionRED;
                    break;
                case "Digi-Egg":
                    cardImage = DigitamaRED;
                    break;
                default:
                    cardImage = CommonWhite;
                    break;
            }
            break;
        default:
            switch (cardValue.type) {
                case "Tamer":
                    cardImage = TamerRED;
                    break;
                case "Digimon":
                    switch (cardValue.stage) {
                        case "Mega":
                            cardImage = RareRed
                            break;
                        default:
                            cardImage = CommonRed
                    }break
                case "Option":
                    cardImage = OptionRED;
                    break;
                case "Digi-Egg":
                    cardImage = DigitamaRED;
                    break;
                default:
                    cardImage = CommonRed;
                    break;
            }
            break;
    }







    function removeUltimosDigitos(numero) {

        if (typeof numero == "number") {
            const numeroString = numero.toString();
            const novoNumeroString = numeroString.slice(0, -3);
            const novoNumero = parseInt(novoNumeroString);
            return novoNumero;
        } else {
            return 0
        }
    }

    const canvasRef = useRef(null);

    const saveCardImage = () => {
        const canvas = canvasRef.current;
        const dataURL = canvas.toDataURL("image/png");
        saveAs(dataURL, "card_image.png");
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        // Configurar o tamanho do canvas
        canvas.width = 430;
        canvas.height = 601;

        // Desenhar a imagem de fundo
        const backgroundImage = new Image();
        backgroundImage.src = cardValue.url;
        backgroundImage.onload = () => {
            context.drawImage(backgroundImage, 3, -3, canvas.width, canvas.height);

            // Desenhar a imagem principal
            const image = new Image();
            image.src = cardImage;
            image.onload = () => {
                context.drawImage(image, 0, 0, canvas.width, canvas.height);

                // Configurar o estilo do texto
                context.font = "15px Arial"; // Estilo da fonte e tamanho
                context.textAlign = "center"; // Alinhamento do texto centralizado

                const cardEffect = cardValue.cardEffect;
                const cardEffectX = canvas.width / 2; // Posição x do texto (centro do canvas)

                // Quebra automática de texto
                const maxLineWidth = 377; // Largura máxima para cada linha de texto
                const lineHeight = 16; // Altura da linha de texto
                const words = cardEffect.split(" ");
                let line = "";
                let lines = [];

                for (let i = 0; i < words.length; i++) {
                    const testLine = line + words[i] + " ";
                    const testLineWidth = context.measureText(testLine).width;

                    if (testLineWidth > maxLineWidth) {
                        lines.push(line.trim());
                        line = words[i] + " ";
                    } else {
                        line = testLine;
                    }
                }
                lines.push(line.trim());

                // Posição da base do texto fornecida por você (ajuste conforme necessário)
                let basePositionY = 0
                switch (cardValue.stage) {
                    case "Mega": basePositionY = 510;
                        break;
                    default:
                        basePositionY = 440;
                        break
                }

                if (cardValue.type === "Tamer" || cardValue.type === "Option") {
                    basePositionY = 405;
                }

                // Ajustar a posição y do texto para alinhar por baixo
                const cardEffectHeight = lines.length * lineHeight;
                const cardEffectY = basePositionY - cardEffectHeight;

                if (cardEffect.trim() !== "") {
                    // Calcular as dimensões do background
                    const backgroundWidth = maxLineWidth;
                    const backgroundHeight = cardEffectHeight + lineHeight;

                    // Desenhar o background com efeito de desfoque
                    const backgroundX = cardEffectX - backgroundWidth / 2;
                    const backgroundY = cardEffectY - lineHeight;
                    context.fillStyle = "rgba(0, 0, 0, 0.9)"; // Cor preta com 90% de transparência
                    context.filter = "blur(5px)"; // Aplicar desfoque Gaussiano ao preenchimento
                    context.fillRect(backgroundX, backgroundY + 10, backgroundWidth, backgroundHeight + 10);

                    // Desenhar o texto
                    context.fillStyle = "#fff"; // Cor do texto
                    context.filter = "none"; // Remover o filtro de desfoque
                    lines.forEach((text, index) => {
                        const lineY = cardEffectY + (index + 1) * lineHeight;
                        context.fillText(text, cardEffectX, lineY);
                    });
                }

                // Card Name
                context.font = "20px Arial"; // Estilo da fonte e tamanho
                context.textAlign = "center"; // Alinhamento do texto centralizado
                const cardName = cardValue.name;
                let cardNameY = 0
                switch (cardValue.stage) {
                    case "Mega": cardNameY = 565;
                        break;
                    default:
                        cardNameY = 495; // Posição y do texto (abaixo do cardEffect)
                        break
                }

                if (cardValue.type === "Tamer" || cardValue.type === "Option" || cardValue.type === "Digi-Egg") {
                    cardNameY = 475
                }


                context.fillStyle = "#fff"; // Cor do texto
                context.strokeStyle = "#000"; // Cor da borda
                context.lineWidth = 4; // Largura da borda
                context.strokeText(cardName, cardEffectX, cardNameY); // Desenhar a borda
                context.fillText(cardName, cardEffectX, cardNameY);


                context.fillStyle = "#fff"; // Cor do texto
                context.fillText(cardName, cardEffectX, cardNameY);


                if (cardValue.type === "Digimon") {
                    // Card DP
                    context.font = "40px Arial"; // Estilo da fonte e tamanho
                    context.textAlign = "right"; // Alinhamento do texto centralizado
                    const cardDP = removeUltimosDigitos(cardValue.dp);
                    const cardDPY = 47; // Posição y do texto (abaixo do cardEffect)
                    const cardDPX = 365; // Posição y do texto (abaixo do cardEffect)
                    context.fillStyle = "#060606"; // Cor do texto
                    context.strokeText(cardDP, cardDPX, cardDPY); // Desenhar a borda
                }

                // Card play_cost
                if (cardValue.type !== "Digi-Egg") {
                    context.font = "40px Helvetica"; // Estilo da fonte e tamanho
                    context.textAlign = "center"; // Alinhamento do texto centralizado
                    const play_cost = cardValue.play_cost;
                    const play_costY = 66; // Posição y do texto (abaixo do cardEffect)
                    const play_costX = 53; // Posição y do texto (abaixo do cardEffect)
                    context.fillStyle = "#ffffff"; // Cor do texto
                    context.strokeStyle = "#000"; // Cor da borda
                    context.lineWidth = 4; // Largura da borda
                    context.strokeText(play_cost, play_costX, play_costY); // Desenhar a borda
                    context.fillText(play_cost, play_costX, play_costY);
                    context.textAlign = "center";
                }

                // Card evolution_cost
                if (cardValue.type === "Digimon") {
                    context.font = "35px Helvetica"; // Estilo da fonte e tamanho
                    context.textAlign = "center"; // Alinhamento do texto centralizado
                    const evolution_cost = cardValue.evolution_cost;
                    const evolution_costY = 150; // Posição y do texto (abaixo do cardEffect)
                    const evolution_costX = 54; // Posição y do texto (abaixo do cardEffect)
                    context.fillStyle = "#ffffff"; // Cor do texto
                    context.strokeStyle = "#000"; // Cor da borda
                    context.lineWidth = 4; // Largura da borda
                    context.strokeText(evolution_cost, evolution_costX, evolution_costY); // Desenhar a borda
                    context.fillText(evolution_cost, evolution_costX, evolution_costY);
                    context.textAlign = "center";
                }

                // Card level_evolution_cost
                if (cardValue.type === "Digimon") {
                    context.font = "10px Helvetica";
                    context.textAlign = "center";
                    const level_evolution_cost = `Lv.${cardValue.level - 1}`;
                    const level_evolution_costY = 122;
                    const level_evolution_costX = 54;
                    context.fillStyle = "#ffffff";
                    context.strokeStyle = "#000";
                    context.lineWidth = 2;
                    context.strokeText(level_evolution_cost, level_evolution_costX, level_evolution_costY);
                    context.fillText(level_evolution_cost, level_evolution_costX, level_evolution_costY);
                    context.textAlign = "center";
                }

                // Card number
                const cardnumber = cardValue.cardnumber;
                const cardnumberX = 361;
                let cardnumberY = 0
                switch (cardValue.stage) {
                    case "Mega": cardnumberY = 552;
                        break;
                    default:
                        cardnumberY = 481; // Posição y do texto (abaixo do cardEffect)
                        break
                };

                if (cardValue.type === "Tamer" || cardValue.type === "Option") {
                    cardnumberY = 458
                } else if (cardValue.type === "Digi-Egg") {
                    cardnumberY = 464
                }

                context.font = "10px Helvetica";
                context.textAlign = "center";
                context.fillStyle = "#ffffff";
                context.strokeStyle = "#000";
                context.lineWidth = 2;
                context.strokeText(cardnumber, cardnumberX, cardnumberY);
                context.fillText(cardnumber, cardnumberX, cardnumberY);
                context.textAlign = "center";


                // Card level
                if (cardValue.type === "Digimon" || cardValue.type === "Digi-Egg") {
                    const level = cardValue.level;
                    const levelX = 72;
                    let levelY = 0;
                    switch (cardValue.stage) {
                        case "Mega": levelY = 574;
                            break;
                        default:
                            levelY = 503; // Posição y do texto (abaixo do cardEffect)
                            break
                    };

                    if (cardValue.type === "Digi-Egg") {
                        levelY = 487
                    }

                    context.font = "30px Helvetica";
                    context.textAlign = "center";
                    context.fillStyle = "#ffffff";
                    context.strokeStyle = "#000";
                    context.lineWidth = 2;
                    context.strokeText(level, levelX, levelY);
                    context.fillText(level, levelX, levelY);
                    context.textAlign = "center";
                }

                // Card soureeffect
                if (cardValue.soureeffect !== "") {
                    context.font = "bold 15px Arial"; // Estilo da fonte e tamanho
                    context.textAlign = "center"; // Alinhamento do texto centralizado

                    const cardsoureeffect = cardValue.soureeffect;
                    let cardsoureeffectX = canvas.width / 2; // Posição x do texto (centro do canvas)
                    let cardsoureeffectY = 590; // Posição y do texto (centro do canvas)
                    let maxLineWidth = 360; // Largura máxima para cada linha de texto
                    const lineHeight = 16; // Altura da linha de texto

                    if (cardValue.type === "Tamer" || cardValue.type === "Option") {
                        cardsoureeffectX = 250
                        maxLineWidth = 300
                        cardsoureeffectY = 542
                    } else if (cardValue.type === "Digi-Egg") {
                        cardsoureeffectY = 550
                    }



                    // Quebra automática de texto
                    let line = "";
                    let lines = [];

                    const words = cardsoureeffect.split(" ");
                    for (let i = 0; i < words.length; i++) {
                        const testLine = line + words[i] + " ";
                        const testLineWidth = context.measureText(testLine).width;

                        if (testLineWidth > maxLineWidth) {
                            lines.push(line.trim());
                            line = words[i] + " ";
                        } else {
                            line = testLine;
                        }
                    }
                    lines.push(line.trim());

                    // Posição da base do texto fornecida por você (ajuste conforme necessário)
                    const basePositionY = cardsoureeffectY;

                    // Ajustar a posição y do texto para alinhar por baixo
                    const cardEffectHeight = lines.length * lineHeight;
                    const cardEffectY = basePositionY - cardEffectHeight - 10;

                    // Desenhar o texto
                    if (cardValue.color === "Yellow") {
                        context.fillStyle = "#020202";
                    } else {
                        context.fillStyle = "#ffffff"; // Cor do texto
                    }

                    lines.forEach((text, index) => {
                        const lineY = cardEffectY + (index + 1) * lineHeight;
                        context.fillText(text, cardsoureeffectX, lineY);
                    });
                }

                // Digimon Data
                const level = `${cardValue.stage}   |   ${cardValue.attribute}     |   ${cardValue.digi_type}`;
                const levelX = 322;
                let levelY = 508;
                if (cardValue.type === "Digimon" || cardValue.type === "Digi-Egg") {

                    switch (cardValue.stage) {
                        case "Mega": levelY = 580;
                            break;
                        default:
                            levelY = 508; // Posição y do texto (abaixo do cardEffect)
                            break
                    };

                    if (cardValue.type === "Digi-Egg") {
                        levelY = 491
                    }



                    context.font = "7px Helvetica";
                    context.textAlign = "center";
                    context.fillStyle = "#ffffff";
                    context.lineWidth = 2;
                    context.strokeText(level, levelX, levelY);
                    context.fillText(level, levelX, levelY);
                    context.textAlign = "right";
                }




            };
        };
    }, [cardImage, cardValue]);

    return (
        <div>
            <canvas ref={canvasRef} style={{ display: "flex" }} />
            {/* <Button variant="outlined" onClick={saveCardImage} style={{ marginTop: "20px" }}>
                Salvar como imagem
            </Button> */}
        </div>
    );
}
