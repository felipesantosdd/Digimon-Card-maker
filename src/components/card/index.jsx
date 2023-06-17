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
import { Card } from "./styled";






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
                    switch (cardValue.rare) {
                        case true:
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
                    switch (cardValue.rare) {
                        case true:
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
                    switch (cardValue.rare) {
                        case true:
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
                    switch (cardValue.rare) {
                        case true:
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
                    switch (cardValue.rare) {
                        case true:
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
                    switch (cardValue.rare) {
                        case true:
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
                    switch (cardValue.rare) {
                        case true:
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

                // Configuração de cada Tipo de card

                if (cardValue.type === "Digimon") {
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
                    switch (cardValue.rare) {
                        case true: basePositionY = 455;
                            break;
                        default:
                            basePositionY = 440;
                            break
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
                    switch (cardValue.rare) {
                        case true: cardNameY = 565;
                            break;
                        default:
                            cardNameY = 495; // Posição y do texto (abaixo do cardEffect)
                            break
                    }

                    context.fillStyle = "#fff"; // Cor do texto
                    context.strokeStyle = "#000"; // Cor da borda
                    context.lineWidth = 4; // Largura da borda
                    context.strokeText(cardName, cardEffectX, cardNameY); // Desenhar a borda
                    context.fillText(cardName, cardEffectX, cardNameY);


                    context.fillStyle = "#fff"; // Cor do texto
                    context.fillText(cardName, cardEffectX, cardNameY);



                    // Card DP
                    context.font = "40px Arial"; // Estilo da fonte e tamanho
                    context.textAlign = "right"; // Alinhamento do texto centralizado
                    const cardDP = removeUltimosDigitos(cardValue.dp);
                    const cardDPY = 47; // Posição y do texto (abaixo do cardEffect)
                    const cardDPX = 365; // Posição y do texto (abaixo do cardEffect)
                    context.fillStyle = "#060606"; // Cor do texto
                    context.strokeText(cardDP, cardDPX, cardDPY); // Desenhar a borda


                    // Card play_cost

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


                    // Card evolution_cost

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


                    // Card level_evolution_cost
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


                    // Card number
                    const cardnumber = cardValue.cardnumber;
                    const cardnumberX = 361;
                    let cardnumberY = 0
                    switch (cardValue.rare) {
                        case true: cardnumberY = 552;
                            break;
                        default:
                            cardnumberY = 481; // Posição y do texto (abaixo do cardEffect)
                            break
                    };


                    context.font = "10px Helvetica";
                    context.textAlign = "center";
                    context.fillStyle = "#ffffff";
                    context.strokeStyle = "#000";
                    context.lineWidth = 2;
                    context.strokeText(cardnumber, cardnumberX, cardnumberY);
                    context.fillText(cardnumber, cardnumberX, cardnumberY);
                    context.textAlign = "center";


                    // Card level
                    const level = cardValue.level;
                    const levelX = 72;
                    let levelY = 0;
                    switch (cardValue.rare) {
                        case true: levelY = 574;
                            break;
                        default:
                            levelY = 503; // Posição y do texto (abaixo do cardEffect)
                            break
                    };


                    context.font = "30px Helvetica";
                    context.textAlign = "center";
                    context.fillStyle = "#ffffff";
                    context.strokeStyle = "#0000002f";
                    context.lineWidth = 2;
                    context.strokeText(level, levelX, levelY);
                    context.fillText(level, levelX, levelY);
                    context.textAlign = "center";


                    // Card soureeffect
                    if (cardValue.soureeffect !== "") {
                        context.font = "bold 15px Arial"; // Estilo da fonte e tamanho
                        context.textAlign = "center"; // Alinhamento do texto centralizado

                        const cardsoureeffect = cardValue.soureeffect;
                        let cardsoureeffectX = canvas.width / 2; // Posição x do texto (centro do canvas)
                        let cardsoureeffectY = 590; // Posição y do texto (centro do canvas)
                        let maxLineWidth = 360; // Largura máxima para cada linha de texto
                        const lineHeight = 16; // Altura da linha de texto



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

                        const cardEffectHeight = lines.length * lineHeight;
                        const cardEffectY = 516;

                        // Desenhar o texto
                        if (cardValue.color === "Yellow" || cardValue.color === "White" || cardValue.color === "Blue") {
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
                    const digimondata = `${cardValue.stage}   |   ${cardValue.attribute}     |   ${cardValue.digi_type}`;
                    const digimondataX = 322;
                    const digimondataY = 508;


                    context.font = "7px Helvetica";
                    context.textAlign = "center";
                    context.fillStyle = "#ffffff";
                    context.lineWidth = 2;
                    context.strokeText(digimondata, digimondataX, digimondataY);
                    context.fillText(digimondata, digimondataX, digimondataY);
                    context.textAlign = "right";



                } else if (cardValue.type === "Tamer") {


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
                    let basePositionY = 415


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
                    let cardNameY = 475


                    context.fillStyle = "#fff"; // Cor do texto
                    context.strokeStyle = "#000"; // Cor da borda
                    context.lineWidth = 4; // Largura da borda
                    context.strokeText(cardName, cardEffectX, cardNameY); // Desenhar a borda
                    context.fillText(cardName, cardEffectX, cardNameY);


                    context.fillStyle = "#fff"; // Cor do texto
                    context.fillText(cardName, cardEffectX, cardNameY);

                    // Card play_cost
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

                    // Card number
                    const cardnumber = cardValue.cardnumber;
                    const cardnumberX = 361;
                    const cardnumberY = 458
                    context.font = "10px Helvetica";
                    context.textAlign = "center";
                    context.fillStyle = "#ffffff";
                    context.strokeStyle = "#000";
                    context.lineWidth = 2;
                    context.strokeText(cardnumber, cardnumberX, cardnumberY);
                    context.fillText(cardnumber, cardnumberX, cardnumberY);
                    context.textAlign = "center";

                    // Card soureeffect
                    if (cardValue.soureeffect !== "") {
                        context.font = "bold 15px Arial"; // Estilo da fonte e tamanho
                        context.textAlign = "center"; // Alinhamento do texto centralizado

                        const cardsoureeffect = cardValue.soureeffect;
                        let cardsoureeffectX = 250; // Posição x do texto (centro do canvas)
                        let cardsoureeffectY = 505; // Posição y do texto (centro do canvas)
                        let maxLineWidth = 310; // Largura máxima para cada linha de texto
                        const lineHeight = 16; // Altura da linha de texto

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
                        const cardEffectY = 496;

                        // Desenhar o texto
                        if (cardValue.color === "Yellow" || cardValue.color === "White" || cardValue.color === "Blue") {
                            context.fillStyle = "#020202";
                        } else {
                            context.fillStyle = "#ffffff"; // Cor do texto
                        }

                        lines.forEach((text, index) => {
                            const lineY = cardEffectY + (index + 1) * lineHeight;
                            context.fillText(text, cardsoureeffectX, lineY);
                        });
                    }




                    context.font = "7px Helvetica";
                    context.textAlign = "center";
                    context.fillStyle = "#ffffff";
                    context.lineWidth = 2;
                    context.textAlign = "right";

                } else if (cardValue.type === "Option") {


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
                    let basePositionY = 415


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
                    let cardNameY = 475


                    context.fillStyle = "#fff"; // Cor do texto
                    context.strokeStyle = "#000"; // Cor da borda
                    context.lineWidth = 4; // Largura da borda
                    context.strokeText(cardName, cardEffectX, cardNameY); // Desenhar a borda
                    context.fillText(cardName, cardEffectX, cardNameY);


                    context.fillStyle = "#fff"; // Cor do texto
                    context.fillText(cardName, cardEffectX, cardNameY);

                    // Card play_cost
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

                    // Card number
                    const cardnumber = cardValue.cardnumber;
                    const cardnumberX = 361;
                    const cardnumberY = 458
                    context.font = "10px Helvetica";
                    context.textAlign = "center";
                    context.fillStyle = "#ffffff";
                    context.strokeStyle = "#000";
                    context.lineWidth = 2;
                    context.strokeText(cardnumber, cardnumberX, cardnumberY);
                    context.fillText(cardnumber, cardnumberX, cardnumberY);
                    context.textAlign = "center";

                    // Card soureeffect
                    if (cardValue.soureeffect !== "") {
                        context.font = "bold 15px Arial"; // Estilo da fonte e tamanho
                        context.textAlign = "center"; // Alinhamento do texto centralizado

                        const cardsoureeffect = cardValue.soureeffect;
                        let cardsoureeffectX = 250; // Posição x do texto (centro do canvas)
                        let cardsoureeffectY = 505; // Posição y do texto (centro do canvas)
                        let maxLineWidth = 310; // Largura máxima para cada linha de texto
                        const lineHeight = 16; // Altura da linha de texto

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
                        const cardEffectY = 496;

                        // Desenhar o texto
                        if (cardValue.color === "Yellow" || cardValue.color === "White" || cardValue.color === "Blue") {
                            context.fillStyle = "#020202";
                        } else {
                            context.fillStyle = "#ffffff"; // Cor do texto
                        }

                        lines.forEach((text, index) => {
                            const lineY = cardEffectY + (index + 1) * lineHeight;
                            context.fillText(text, cardsoureeffectX, lineY);
                        });
                    }




                    context.font = "7px Helvetica";
                    context.textAlign = "center";
                    context.fillStyle = "#ffffff";
                    context.lineWidth = 2;
                    context.textAlign = "right";

                } else if (cardValue.type === "Digi-Egg") {


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
                    let basePositionY = 415


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

                    // Card level
                    const level = cardValue.level;
                    const levelX = 72;
                    const levelY = 487;

                    context.font = "30px Helvetica";
                    context.textAlign = "center";
                    context.fillStyle = "#ffffff";
                    context.strokeStyle = "#0000002f";
                    context.lineWidth = 2;
                    context.strokeText(level, levelX, levelY);
                    context.fillText(level, levelX, levelY);
                    context.textAlign = "center";


                    // Card Name
                    context.font = "20px Arial"; // Estilo da fonte e tamanho
                    context.textAlign = "center"; // Alinhamento do texto centralizado
                    const cardName = cardValue.name;
                    let cardNameY = 475


                    context.fillStyle = "#fff"; // Cor do texto
                    context.strokeStyle = "#000"; // Cor da borda
                    context.lineWidth = 4; // Largura da borda
                    context.strokeText(cardName, cardEffectX, cardNameY); // Desenhar a borda
                    context.fillText(cardName, cardEffectX, cardNameY);


                    context.fillStyle = "#fff"; // Cor do texto
                    context.fillText(cardName, cardEffectX, cardNameY);

                    // Card number
                    const cardnumber = cardValue.cardnumber;
                    const cardnumberX = 361;
                    const cardnumberY = 465
                    context.font = "10px Helvetica";
                    context.textAlign = "center";
                    context.fillStyle = "#ffffff";
                    context.strokeStyle = "#000";
                    context.lineWidth = 2;
                    context.strokeText(cardnumber, cardnumberX, cardnumberY);
                    context.fillText(cardnumber, cardnumberX, cardnumberY);
                    context.textAlign = "center";

                    // Card soureeffect
                    if (cardValue.soureeffect !== "") {
                        context.font = "bold 15px Arial"; // Estilo da fonte e tamanho
                        context.textAlign = "center"; // Alinhamento do texto centralizado

                        const cardsoureeffect = cardValue.soureeffect;
                        let cardsoureeffectX = 215; // Posição x do texto (centro do canvas)
                        let cardsoureeffectY = 505; // Posição y do texto (centro do canvas)
                        let maxLineWidth = 380; // Largura máxima para cada linha de texto
                        const lineHeight = 16; // Altura da linha de texto

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
                        const cardEffectY = 500;

                        // Desenhar o texto
                        if (cardValue.color === "Yellow" || cardValue.color === "White" || cardValue.color === "Blue") {
                            context.fillStyle = "#020202";
                        } else {
                            context.fillStyle = "#ffffff"; // Cor do texto
                        }

                        lines.forEach((text, index) => {
                            const lineY = cardEffectY + (index + 1) * lineHeight;
                            context.fillText(text, cardsoureeffectX, lineY);
                        });
                    }

                    context.font = "7px Helvetica";
                    context.textAlign = "center";
                    context.fillStyle = "#ffffff";
                    context.lineWidth = 2;
                    context.textAlign = "right";

                    // Digimon Data
                    const digimondata = `${cardValue.stage}   |   ${cardValue.attribute}     |   ${cardValue.digi_type}`;
                    const digimondataX = 322;
                    const digimondataY = 491;


                    context.font = "7px Helvetica";
                    context.textAlign = "center";
                    context.fillStyle = "#ffffff";
                    context.lineWidth = 2;
                    context.strokeText(digimondata, digimondataX, digimondataY);
                    context.fillText(digimondata, digimondataX, digimondataY);
                    context.textAlign = "right";

                }



            };
        };
    }, [cardImage, cardValue]);

    return (
        <Card >
            <canvas ref={canvasRef} style={{ display: "flex" }} />
        </Card>
    );
}
