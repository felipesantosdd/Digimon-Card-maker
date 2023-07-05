import { useRef, useEffect } from "react";
import { saveAs } from "file-saver";
import { Button } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../provider";


import { Back, Card, Card2, Front } from "./styled";



function drawDigimonCard(cardValue, canvas, context, color) {
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
    let cardEffectY = cardValue.rare ? 416 : 350;
    if (cardEffect.trim() !== "") {
        // Calcular as dimensões do background
        const cardEffectHeight = lines.length * lineHeight;
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

    if (cardValue.rare === false) {
        context.fillStyle = color || "black";
        const effect2backgroundHeight = 77;
        const effect2backgroundWidth = 295;
        const effect2backgroundX = 109;
        const effect2backgroundY = 518;
        context.fillRect(effect2backgroundX, effect2backgroundY, effect2backgroundWidth, effect2backgroundHeight);
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
    const cardNameY = cardValue.rare ? 565 : 492;
    context.lineWidth = 1; // Largura da borda
    context.strokeText(cardName, cardEffectX, cardNameY); // Desenhar a borda
    context.fillStyle = cardValue.color === "Yellow" || cardValue.color === "White" ? "#090909" : "#fefefe";
    context.fillText(cardName, cardEffectX, cardNameY);

    // Card number
    const cardnumber = cardValue.cardnumber;
    const cardnumberX = 361;
    const cardnumberY = cardValue.rare ? 552 : 481;
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

    context.font = "13px Helvetica";
    context.textAlign = "left";
    context.fillStyle = "#ffffff";
    context.strokeStyle = "#0000002f";
    context.lineWidth = 2;
    context.strokeText(level, levelX, levelY);
    context.fillText(level, levelX, levelY);
    context.textAlign = "center";

    // Card soureeffect
    if (cardValue.soureeffect !== "") {
        const cardsoureeffect = cardValue.soureeffect;
        const cardsoureeffectX = 255; // Posição x do texto (centro do canvas)
        const maxLineWidth = 280; // Largura máxima para cada linha de texto

        // Quebra automática de texto
        line = "";
        lines = [];
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
        const cardEffectY = 516;

        // Desenhar o texto
        context.fillStyle = cardValue.color === "Yellow" || cardValue.color === "White" || cardValue.color === "Blue"
            ? "#020202"
            : "#ffffff";
        lines.forEach((text, index) => {
            const lineY = cardEffectY + (index + 1) * lineHeight;
            context.fillText(text, cardsoureeffectX, lineY);
        });
    }

    // Digimon Data
    const digimondata = `${cardValue.stage}   |   ${cardValue.attribute}     |   ${cardValue.digi_type}`;
    const digimondataX = 322;
    const digimondataY = cardValue.rare ? 575 : 510;

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
}

function drawDigiEggCard(cardValue, canvas, context, color) {
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
    const basePositionY = 415;

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
        context.textAlign = "center"; // Alinhamento do texto centralizado
        context.font = "bold 15px Arial"; // Estilo da fonte e tamanho

        lines.forEach((text, index) => {
            const lineY = cardEffectY + (index + 1) * lineHeight;
            context.fillText(text, cardEffectX, lineY);
        });
    }

    context.fillStyle = color || "black";

    // Desenhar retângulos de fundo
    context.fillRect(115, 450, 287, 30); // Nome do card
    context.fillRect(109, 500, 297, 74); // Efeito do card
    context.fillStyle = cardValue.color === "Black" ? "#FFFFFF" : "#1C1614";
    context.fillRect(102, 483, 297, 9); // Dados do digimon

    // Card Name
    context.font = "20px Arial";
    context.textAlign = "center";
    context.fillStyle = cardValue.color === "Yellow" ? "#000000" : "#ffffff";
    const cardNameY = 475;
    context.strokeText(cardValue.name, cardEffectX, cardNameY);
    context.fillText(cardValue.name, cardEffectX, cardNameY);

    // Card number
    context.font = "10px Helvetica";
    context.textAlign = "center";
    context.fillStyle = "#ffffff";
    context.strokeStyle = "#000";
    context.lineWidth = 2;
    context.strokeText(cardValue.cardnumber, 361, 465);
    context.fillText(cardValue.cardnumber, 361, 465);

    // Card soureeffect
    const cardsoureeffect = cardValue.soureeffect;
    if (cardsoureeffect !== "") {
        context.font = "bold 15px Arial";
        context.textAlign = "center";
        const cardsoureeffectX = 255;
        const cardsoureeffectY = 505;
        const maxLineWidth = 300;
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

        if (cardValue.color === "Yellow" || cardValue.color === "White" || cardValue.color === "Blue") {
            context.fillStyle = "#020202";
        } else {
            context.fillStyle = "#ffffff";
        }

        lines.forEach((text, index) => {
            const lineY = cardEffectY + (index + 1) * lineHeight;
            context.fillText(text, cardsoureeffectX, lineY);
        });
    }

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

function drawTamerCard(cardValue, canvas, context, color) {
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
    let basePositionY = 415;

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
    context.fillStyle = color || "black";
    const securityBackgroundHeight = 75;
    const securityBackgroundWidth = 305;
    const securityBackgroundX = 100;
    const securityBackgroundY = 500;
    context.fillRect(securityBackgroundX, securityBackgroundY, securityBackgroundWidth, securityBackgroundHeight);

    // Tamer Name Background
    context.fillStyle = color || "black";
    const tamerNameBackgroundHeight = 37;
    const tamerNameBackgroundWidth = 367;
    const tamerNameBackgroundX = 35;
    const tamerNameBackgroundY = 449;
    context.fillRect(tamerNameBackgroundX, tamerNameBackgroundY, tamerNameBackgroundWidth, tamerNameBackgroundHeight);

    // Card Name
    context.font = "20px Arial"; // Estilo da fonte e tamanho
    context.textAlign = "center"; // Alinhamento do texto centralizado
    const cardName = cardValue.name;
    let cardNameY = 475;
    context.lineWidth = 1; // Largura da borda
    context.strokeText(cardName, cardEffectX, cardNameY); // Desenhar a borda
    if (cardValue.color === "Yellow" || cardValue.color === "White") {
        context.fillStyle = "#040404"; // Cor do texto
    } else {
        context.fillStyle = "#ffffff"; // Cor do texto
    }
    context.fillText(cardName, cardEffectX, cardNameY);

    // Card number
    const cardnumber = cardValue.cardnumber;
    const cardnumberX = 361;
    const cardnumberY = 458;
    context.font = "10px Helvetica";
    context.textAlign = "center";
    context.fillStyle = "#ffffff";
    context.strokeStyle = "#000";
    context.lineWidth = 2;
    context.strokeText(cardnumber, cardnumberX, cardnumberY);
    context.fillText(cardnumber, cardnumberX, cardnumberY);

    // Card soureeffect
    if (cardValue.soureeffect !== "") {
        context.font = "bold 15px Arial"; // Estilo da fonte e tamanho
        context.textAlign = "center"; // Alinhamento do texto centralizado

        const cardsoureeffect = cardValue.soureeffect;
        let cardsoureeffectX = 250; // Posição x do texto (centro do canvas)
        let cardsoureeffectY = 505; // Posição y do texto (centro do canvas)
        let maxLineWidth = 310; // Largura máxima para cada linha de texto

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
}


function drawOptionCard(cardValue, canvas, context, color) {
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
    const cardNameY = 475;

    if (cardValue.color === "Yellow") {
        context.fillStyle = "#000000"; // Cor do texto
    } else {
        context.fillStyle = "#ffffff"; // Cor do texto
    }
    context.lineWidth = 1; // Largura da borda
    context.strokeText(cardName, cardEffectX, cardNameY); // Desenhar a borda
    context.fillText(cardName, cardEffectX, cardNameY);

    // Card number
    const cardnumber = cardValue.cardnumber;
    const cardnumberX = 361;
    const cardnumberY = 458;
    context.font = "10px Helvetica";
    context.textAlign = "center";
    context.fillStyle = "#ffffff";
    context.strokeStyle = "#000";
    context.lineWidth = 2;
    context.strokeText(cardnumber, cardnumberX, cardnumberY);
    context.fillText(cardnumber, cardnumberX, cardnumberY);

    context.fillStyle = color || "black";
    const optionbackgroundHeight = 75;
    const optionbackgroundWidth = 295;
    const optionbackgroundX = 100;
    const optionbackgroundY = 500;
    context.fillRect(optionbackgroundX, optionbackgroundY, optionbackgroundWidth, optionbackgroundHeight);

    // Option Security
    if (cardValue.soureeffect !== "") {
        context.font = "bold 15px Arial"; // Estilo da fonte e tamanho
        context.textAlign = "center"; // Alinhamento do texto centralizado

        const cardsoureeffect = cardValue.soureeffect;
        const cardsoureeffectX = 250; // Posição x do texto (centro do canvas)
        const cardsoureeffectY = 525; // Posição y do texto (centro do canvas)
        const maxLineWidth = 310; // Largura máxima para cada linha de texto
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
}


export function CardComponent() {
    const { cardValue, fontSize } = useContext(Context);
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
            image.src = cardValue.image;

            // Adicionar a borda preta
            context.strokeStyle = "black";
            context.lineWidth = 2;
            context.strokeRect(0, 0, canvas.width, canvas.height);

            context.font = `${fontSize}px Arial`; // Estilo da fonte e tamanho
            context.textAlign = "center"; // Alinhamento do texto centralizado

            let color;

            switch (cardValue.color) {
                case "Yellow":
                    color = '#FFE100';
                    break;
                case "Blue":
                    color = '#0097E0';
                    break;
                case "Green":
                    color = '#009B6B';
                    break;
                case "Purple":
                    color = '#6353A5';
                    break;
                case "Black":
                    color = '#221714';
                    break;
                case "White":
                    color = '#FFFFFF';
                    break;
                default:
                    color = '#E6002D';
                    break;
            }

            if (cardValue.type === "Digimon") {
                drawDigimonCard(cardValue, canvas, context, color);
            } else if (cardValue.type === "Tamer") {
                drawTamerCard(cardValue, canvas, context, color);
            } else if (cardValue.type === "Option") {
                drawOptionCard(cardValue, canvas, context, color);
            } else if (cardValue.type === "Digi-Egg") {
                drawDigiEggCard(cardValue, canvas, context, color);
            }
        };
    }, [cardValue, fontSize]);

    return (
        <Card>
            <canvas ref={canvasRef}></canvas>
            <Button onClick={saveCardImage}>Save Image</Button>
        </Card>
    );
}

