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


import { Back, Card, Card2, Front } from "./styled";






export function CardComponent() {

    const { cardValue, fontSize } = useContext(Context);

    let cardImage;
    let color
    switch (cardValue.color) {
        case "Yellow":
            switch (cardValue.type) {
                case "Tamer":
                    color = '#FFE100';
                    break;
                case "Digimon":
                    switch (cardValue.rare) {
                        case true:
                            color = '#FFE100';
                            break;
                        default:
                            color = '#FFE100';
                    }break
                case "Option":
                    color = '#FFE100';
                    break;
                case "Digi-Egg":
                    color = '#FFE100';
                    break;
                default:
                    color = '#FFE100';
                    break;
            }
            break;
        case "Blue":
            switch (cardValue.type) {
                case "Tamer":
                    color = '#0097E0';
                    break;
                case "Digimon":
                    switch (cardValue.rare) {
                        case true:
                            color = '#0097E0';
                            break;
                        default:
                            color = '#0097E0';
                    }break
                case "Option":
                    color = '#0097E0';
                    break;
                case "Digi-Egg":
                    color = '#0097E0';
                    break;
                default:
                    color = '#0097E0';
                    break;
            }
            break;
        case "Green":
            switch (cardValue.type) {
                case "Tamer":
                    color = '#009B6B';
                    break;
                case "Digimon":
                    switch (cardValue.rare) {
                        case true:
                            color = '#009B6B';
                            break;
                        default:
                            color = '#009B6B';
                    }break
                case "Option":
                    color = '#009B6B';
                    break;
                case "Digi-Egg":
                    color = '#009B6B';
                    break;
                default:
                    color = '#009B6B';
                    break;
            }
            break;
        case "Purple":
            switch (cardValue.type) {
                case "Tamer":
                    color = '#6353A5';
                    break;
                case "Digimon":
                    switch (cardValue.rare) {
                        case true:
                            color = '#6353A5';
                            break;
                        default:
                            color = '#6353A5';
                    }break
                case "Option":
                    color = '#6353A5';
                    break;
                case "Digi-Egg":
                    color = '#6353A5';
                    break;
                default:
                    color = '#6353A5';
                    break;
            }
            break;
        case "Black":
            switch (cardValue.type) {
                case "Tamer":
                    color = '#221714';
                    break;
                case "Digimon":
                    switch (cardValue.rare) {
                        case true:
                            color = '#221714';
                            break;
                        default:
                            color = '#221714';
                    }break
                case "Option":
                    color = '#221714';
                    break;
                case "Digi-Egg":
                    color = '#221714';
                    break;
                default:
                    color = '#221714';
                    break;
            }
            break;
        case "White":
            switch (cardValue.type) {
                case "Tamer":
                    color = '#FFFFFF';
                    break;
                case "Digimon":
                    switch (cardValue.rare) {
                        case true:
                            color = '#FFFFFF';
                            break;
                        default:
                            color = '#FFFFFF';
                    }break
                case "Option":
                    color = '#FFFFFF';
                    break;
                case "Digi-Egg":
                    color = '#FFFFFF';
                    break;
                default:
                    color = '#FFFFFF';
                    break;
            }
            break;
        default:
            switch (cardValue.type) {
                case "Tamer":
                    color = '#E6002D';
                    break;
                case "Digimon":
                    switch (cardValue.rare) {
                        case true:
                            color = '#E6002D';
                            break;
                        default:
                            color = '#E6002D';
                    }break
                case "Option":
                    color = '#E6002D';
                    break;
                case "Digi-Egg":
                    color = '#E6002D';
                    break;
                default:
                    color = '#E6002D';
                    break;
            }
            break;
    }
    const canvasRef = useRef(null);

    const saveCardImage = () => {
        const canvas = canvasRef.current;
        const dataURL = canvas.toDataURL("image/png");

        // Create an anchor element to trigger the download
        const downloadLink = document.createElement("a");
        downloadLink.href = dataURL;
        downloadLink.download = "card_image.png";

        // Trigger the download
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // Clean up
        document.body.removeChild(downloadLink);
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



            context.font = `${fontSize}px Arial`; // Estilo da fonte e tamanho
            context.textAlign = "center"; // Alinhamento do texto centralizado
            context.fillStyle = "#000000";
            // Configuração de cada Tipo de card

            if (cardValue.type === "Digimon") {
                const cardEffect = cardValue.cardEffect;
                const cardEffectX = canvas.width / 2; // Posição x do texto (centro do canvas)

                // Quebra automática de texto
                const maxLineWidth = 370; // Largura máxima para cada linha de texto
                const lineHeight = 15; // Altura da linha de texto
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

                // Card Effect
                let basePositionY = 440

                const cardEffectHeight = lines.length * lineHeight;
                let cardEffectY = 0

                // Ajustar a posição y do texto para alinhar por baixo
                if (cardValue.rare === false) {
                    cardEffectY = 350;
                } else {
                    cardEffectY = 407
                }


                if (cardEffect.trim() !== "") {
                    // Calcular as dimensões do background
                    const backgroundWidth = maxLineWidth;
                    const backgroundHeight = cardEffectHeight + lineHeight;

                    // Desenhar o background com efeito de desfoque
                    const backgroundX = cardEffectX - backgroundWidth / 2 + 4;
                    const backgroundY = cardEffectY - lineHeight + 5;
                    context.fillStyle = "rgba(255, 255, 255, 0.9)"; // Cor preta com 90% de transparência
                    context.filter = "blur(2px)"; // Aplicar desfoque Gaussiano ao preenchimento
                    context.fillRect(backgroundX, backgroundY + 10, backgroundWidth, backgroundHeight + 10);

                    // Desenhar o texto
                    context.fillStyle = "#000000"; // Cor do texto
                    context.filter = "none"; // Remover o filtro de desfoque
                    lines.forEach((text, index) => {
                        const lineY = cardEffectY + (index + 1) * lineHeight;
                        context.fillText(text, cardEffectX, lineY);
                    });
                }

                // Blackground do nome do card
                context.fillStyle = color || "black";
                const textHeight = lines.length * lineHeight;
                const padding = 15; // Espaçamento interno
                const backgroundHeight = 30;
                const backgroundWidth = 290;
                const backgroundX = 114;
                const backgroundY = cardValue.rare ? 535 : 470;
                context.fillRect(backgroundX, backgroundY, backgroundWidth, backgroundHeight);


                // Card Name
                context.font = "20px Arial"; // Estilo da fonte e tamanho
                context.textAlign = "center"; // Alinhamento do texto centralizado
                const cardName = cardValue.name;
                let cardNameY = 0
                switch (cardValue.rare) {
                    case true: cardNameY = 565;
                        break;
                    default:
                        cardNameY = 492; // Posição y do texto (abaixo do cardEffect)
                        break
                }
                context.lineWidth = 1; // Largura da borda
                context.strokeText(cardName, cardEffectX, cardNameY); // Desenhar a borda
                context.fillText(cardName, cardEffectX, cardNameY);
                if (cardValue.color === "Yellow" || cardValue.color === "White") {
                    context.fillStyle = "#090909"; // Cor do texto
                } else {
                    context.fillStyle = "#fefefe"; // Cor do texto
                }
                context.fillText(cardName, cardEffectX, cardNameY);

                if (cardValue.rare === false) {
                    // DP
                    // context.font = "45px Arial"; // Estilo da fonte e tamanho
                    // context.textAlign = "right";
                    // const DP = removeUltimosDigitos(cardValue.dp)
                    // const dpPositionY = 48; // Posição y do texto (abaixo do cardEffect)
                    // const dpPositionX = 365; // Posição y do texto (abaixo do cardEffect)
                    // context.fillStyle = "#000000"; // Cor do texto
                    // context.strokeStyle = "#080808"; // Cor da borda
                    // context.lineWidth = 3
                    // context.strokeText(DP, dpPositionX, dpPositionY); // Desenhar a borda
                    // context.fillText(DP, dpPositionX, dpPositionY);


                    // Card play_cost


                    // context.font = "40px Helvetica"; // Estilo da fonte e tamanho
                    // context.textAlign = "center"; // Alinhamento do texto centralizado
                    // const play_cost = cardValue.play_cost;
                    // const play_costY = 66; // Posição y do texto (abaixo do cardEffect)
                    // const play_costX = 53; // Posição y do texto (abaixo do cardEffect)
                    // context.fillStyle = "#ffffff"; // Cor do texto
                    // context.strokeStyle = "#080808"; // Cor da borda
                    // context.lineWidth = 4; // Largura da borda
                    // context.strokeText(play_cost, play_costX, play_costY); // Desenhar a borda
                    // context.fillText(play_cost, play_costX, play_costY);
                    // context.textAlign = "center";


                    // Card evolution_cost
                    // context.font = "35px Helvetica"; // Estilo da fonte e tamanho
                    // context.textAlign = "center"; // Alinhamento do texto centralizado
                    // const evolution_cost = cardValue.evolution_cost;
                    // const evolution_costY = 150; // Posição y do texto (abaixo do cardEffect)
                    // const evolution_costX = 54; // Posição y do texto (abaixo do cardEffect)
                    // context.fillStyle = "#ffffff"; // Cor do texto
                    // context.strokeStyle = "#000"; // Cor da borda
                    // context.lineWidth = 4; // Largura da borda
                    // context.strokeText(evolution_cost, evolution_costX, evolution_costY); // Desenhar a borda
                    // context.fillText(evolution_cost, evolution_costX, evolution_costY);
                    // context.textAlign = "center";

                    // Card level_evolution_cost
                }

                // Card number
                const cardnumber = cardValue.cardnumber;
                const cardnumberX = 361;
                let cardnumberY = 0
                switch (cardValue.rare) {
                    case true: cardnumberY = 552;
                        break;
                    default:
                        cardnumberY = 481;
                        break
                };

                // Desenhar o background verde


                context.font = "10px Helvetica";
                context.textAlign = "left";
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
                // switch (cardValue.rare) {
                //     case true: levelY = 574;
                //         break;
                //     default:
                //         levelY = 503;
                //         break
                // };

                context.font = "30px Helvetica";
                context.textAlign = "left";
                context.fillStyle = "#ffffff";
                context.strokeStyle = "#0000002f";
                context.lineWidth = 2;
                context.strokeText(level, levelX, levelY);
                context.fillText(level, levelX, levelY);
                context.textAlign = "center";


                // Card soureeffect
                if (cardValue.soureeffect !== "") {
                    context.font = "15px Arial"; // Estilo da fonte e tamanho
                    context.textAlign = "left"; // Alinhamento do texto centralizado
                    const cardsoureeffect = cardValue.soureeffect;
                    let cardsoureeffectX = 120; // Posição x do texto (centro do canvas)
                    let maxLineWidth = 280; // Largura máxima para cada linha de texto
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

                        context.fillStyle = color || 'black';
                        const textHeight = lines.length * lineHeight;
                        const padding = 10; // Espaçamento interno
                        const backgroundHeight = 75;
                        const backgroundWidth = 295;
                        const backgroundX = 110;
                        const backgroundY = 520
                        context.fillRect(backgroundX, backgroundY, backgroundWidth, backgroundHeight);
                    }
                    lines.push(line.trim());

                    // Posição da base do texto fornecida por você (ajuste conforme necessário)
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
                let digimondataY = cardValue.rare ? 575 : 510;

                const backBlackWidth = 250;
                const backBlackHeight = 9;
                const backBlackX = 150;
                const backBlackY = cardValue.rare ? 567.9 : 503;


                context.fillStyle = cardValue.color === 'Black' ? 'white' : "#26120E";
                context.fillRect(backBlackX, backBlackY, backBlackWidth, backBlackHeight);
                context.font = "10px arial";
                context.textAlign = "center";
                context.fillStyle = cardValue.color === 'Black' ? "#26120E" : 'white';
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
                const cardEffectY = 330;

                if (cardEffect.trim() !== "") {
                    // Calcular as dimensões do background
                    const backgroundWidth = maxLineWidth;
                    const backgroundHeight = cardEffectHeight + lineHeight;

                    // Desenhar o background com efeito de desfoque
                    const backgroundX = cardEffectX - backgroundWidth / 2;
                    const backgroundY = cardEffectY - lineHeight;
                    context.fillStyle = "rgba(255, 255, 255, 0.9)"; // Cor preta com 90% de transparência
                    context.filter = "blur(5px)"; // Aplicar desfoque Gaussiano ao preenchimento
                    context.fillRect(backgroundX, backgroundY + 10, backgroundWidth, backgroundHeight + 10);

                    // Desenhar o texto
                    context.fillStyle = "#000000"; // Cor do texto
                    context.filter = "none"; // Remover o filtro de desfoque
                    lines.forEach((text, index) => {
                        const lineY = cardEffectY + (index + 1) * lineHeight;
                        context.fillText(text, cardEffectX, lineY);
                    });
                }

                // Security Background 
                context.fillStyle = color || 'black';
                const securityBackgroundHeight = 75;
                const securityBackgroundWidth = 305;
                const securityBackgroundX = 100;
                const securityBackgroundY = 500
                context.fillRect(securityBackgroundX, securityBackgroundY, securityBackgroundWidth, securityBackgroundHeight);


                context.fillStyle = color || 'black';
                const tamerNameBackgroundHeight = 37;
                const tamerNameBackgroundWidth = 367;
                const tamerNameBackgroundX = 35;
                const tamerNameBackgroundY = 449
                context.fillRect(tamerNameBackgroundX, tamerNameBackgroundY, tamerNameBackgroundWidth, tamerNameBackgroundHeight);

                // Card Name
                context.font = "20px Arial"; // Estilo da fonte e tamanho
                context.textAlign = "center"; // Alinhamento do texto centralizado
                const cardName = cardValue.name;
                let cardNameY = 475


                context.lineWidth = 1; // Largura da borda
                context.strokeText(cardName, cardEffectX, cardNameY); // Desenhar a borda
                context.fillText(cardName, cardEffectX, cardNameY);
                if (cardValue.color === "Yellow") {
                    context.fillStyle = "#040404"; // Cor do texto
                } else {
                    context.fillStyle = "#ffffff"; // Cor do texto
                }
                context.fillText(cardName, cardEffectX, cardNameY);

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

                // Ajustar a posição y do texto para alinhar por baixo
                const cardEffectHeight = lines.length * lineHeight;
                const cardEffectY = 320;

                if (cardEffect.trim() !== "") {
                    // Calcular as dimensões do background
                    const backgroundWidth = maxLineWidth;
                    const backgroundHeight = cardEffectHeight + lineHeight;

                    // Desenhar o background com efeito de desfoque
                    const backgroundX = cardEffectX - backgroundWidth / 2;
                    const backgroundY = cardEffectY - lineHeight;
                    context.fillStyle = "rgba(255, 255, 255, 0.9)"; // Cor preta com 90% de transparência
                    context.filter = "blur(5px)"; // Aplicar desfoque Gaussiano ao preenchimento
                    context.fillRect(backgroundX, backgroundY + 10, backgroundWidth, backgroundHeight + 10);

                    // Desenhar o texto
                    context.fillStyle = "#000000"; // Cor do texto
                    context.filter = "none"; // Remover o filtro de desfoque
                    lines.forEach((text, index) => {
                        const lineY = cardEffectY + (index + 1) * lineHeight;
                        context.fillText(text, cardEffectX, lineY);
                    });
                }


                context.fillStyle = color || "black";
                const textHeight = lines.length * lineHeight;
                const padding = 15; // Espaçamento interno
                const backgroundHeight = 40;
                const backgroundWidth = 367;
                const backgroundX = 35;
                const backgroundY = 449;
                context.fillRect(backgroundX, backgroundY, backgroundWidth, backgroundHeight);

                // Card Name
                context.font = "20px Arial"; // Estilo da fonte e tamanho
                context.textAlign = "center"; // Alinhamento do texto centralizado
                const cardName = cardValue.name;
                let cardNameY = 475


                if (cardValue.color === "Yellow") {
                    context.fillStyle = "#000000"; // Cor do texto
                } else {
                    context.fillStyle = "#ffffff"; // Cor do texto
                }
                context.lineWidth = 1; // Largura da borda
                context.strokeText(cardName, cardEffectX, cardNameY); // Desenhar a borda
                context.fillText(cardName, cardEffectX, cardNameY);



                context.fillText(cardName, cardEffectX, cardNameY);

                // Card play_cost
                // context.font = "40px Helvetica"; // Estilo da fonte e tamanho
                // context.textAlign = "center"; // Alinhamento do texto centralizado
                // const play_cost = cardValue.play_cost;
                // const play_costY = 66; // Posição y do texto (abaixo do cardEffect)
                // const play_costX = 53; // Posição y do texto (abaixo do cardEffect)
                // context.fillStyle = "#ffffff"; // Cor do texto
                // context.strokeStyle = "#000"; // Cor da borda
                // context.lineWidth = 4; // Largura da borda
                // context.strokeText(play_cost, play_costX, play_costY); // Desenhar a borda
                // context.fillText(play_cost, play_costX, play_costY);
                // context.textAlign = "center";

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


                context.fillStyle = color || 'black';
                const optionbackgroundHeight = 75;
                const optionbackgroundWidth = 295;
                const optionbackgroundX = 100;
                const optionbackgroundY = 500
                context.fillRect(optionbackgroundX, optionbackgroundY, optionbackgroundWidth, optionbackgroundHeight);


                // Option Security
                if (cardValue.soureeffect !== "") {
                    context.font = "bold 15px Arial"; // Estilo da fonte e tamanho
                    context.textAlign = "center"; // Alinhamento do texto centralizado

                    const cardsoureeffect = cardValue.soureeffect;
                    let cardsoureeffectX = 250; // Posição x do texto (centro do canvas)
                    let cardsoureeffectY = 525; // Posição y do texto (centro do canvas)
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
                    context.fillStyle = "rgba(255, 255, 255, 0.9)"; // Cor preta com 90% de transparência
                    context.filter = "blur(5px)"; // Aplicar desfoque Gaussiano ao preenchimento
                    context.fillRect(backgroundX, backgroundY + 10, backgroundWidth, backgroundHeight + 10);

                    // Desenhar o texto
                    context.fillStyle = "#000000"; // Cor do texto
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


                context.lineWidth = 1; // Largura da borda
                context.strokeText(cardName, cardEffectX, cardNameY); // Desenhar a borda
                context.fillText(cardName, cardEffectX, cardNameY);


                if (cardValue.color === "Yellow") {
                    context.fillStyle = "#000000"; // Cor do texto
                } else {
                    context.fillStyle = "#ffffff"; // Cor do texto
                }
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
    }, [cardImage, cardValue, fontSize]);

    return (
        <Card >
            <canvas ref={canvasRef} style={{ display: "flex" }} />
            <Button style={{ marginTop: '15px' }} variant="contained" onClick={() => saveCardImage()}>Salvar</Button>
        </Card>


    );
}
