import { useRef, useEffect } from "react";
import { saveAs } from "file-saver";
import { Button } from "@mui/material";

import CommonRed from "../../img/DIGIMON-RED.png";
import CommonBlue from "../../img/DIGIMON-BLUE.png";
import CommonYellow from "../../img/DIGIMON-YELOW.png";
import { useContext } from "react";
import { Context } from "../../provider";

import { Title } from "./styled";

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
                const basePositionY = 450;

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
                    context.fillRect(backgroundX, backgroundY + 10, backgroundWidth, backgroundHeight);

                    // Desenhar o texto
                    context.fillStyle = "#fff"; // Cor do texto
                    context.filter = "none"; // Remover o filtro de desfoque
                    lines.forEach((text, index) => {
                        const lineY = cardEffectY + (index + 1) * lineHeight;
                        context.fillText(text, cardEffectX, lineY);
                    });
                }

                // Card Name
                context.font = "25px Arial"; // Estilo da fonte e tamanho
                context.textAlign = "center"; // Alinhamento do texto centralizado
                const cardName = cardValue.name;
                const cardNameY = 495; // Posição y do texto (abaixo do cardEffect)
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
                    context.textAlign = "center"; // Alinhamento do texto centralizado
                    const cardDP = cardValue.dp;
                    const cardDPY = 47; // Posição y do texto (abaixo do cardEffect)
                    const cardDPX = 360; // Posição y do texto (abaixo do cardEffect)
                    context.fillStyle = "#060606"; // Cor do texto
                    context.strokeText(cardDP, cardDPX, cardDPY); // Desenhar a borda
                }

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
                    const level_evolution_cost = `Lv.${cardValue.evolution_cost - 1}`;
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
                const cardnumberY = 481;
                const cardnumberX = 361;

                context.font = "10px Helvetica";
                context.textAlign = "center";
                context.fillStyle = "#ffffff";
                context.strokeStyle = "#000";
                context.lineWidth = 2;
                context.strokeText(cardnumber, cardnumberX, cardnumberY);
                context.fillText(cardnumber, cardnumberX, cardnumberY);
                context.textAlign = "center";


                // Card level
                if (cardValue.type === "Digimon") {
                    const level = cardValue.level;
                    const levelY = 504;
                    const levelX = 72;

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
                    const cardsoureeffectX = canvas.width / 2; // Posição x do texto (centro do canvas)
                    const cardsoureeffectY = 550; // Posição y do texto (centro do canvas)
                    const maxLineWidth = 360; // Largura máxima para cada linha de texto
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
                    const cardEffectY = basePositionY - cardEffectHeight;

                    // Desenhar o texto

                    context.fillStyle = "#ffffff"; // Cor do texto
                    lines.forEach((text, index) => {
                        const lineY = cardEffectY + (index + 1) * lineHeight;
                        context.fillText(text, cardsoureeffectX, lineY);
                    });
                }

                // Digimon Data
                if (cardValue.type === "Digimon") {
                    const level = `${cardValue.stage}   |   ${cardValue.attribute}     |   ${cardValue.digi_type}`;
                    const levelY = 508;
                    const levelX = 322;

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
            <Title>Aqui é o card</Title>
            <canvas ref={canvasRef} style={{ display: "flex" }} />
            <Button variant="outlined" onClick={saveCardImage} style={{ marginTop: "20px" }}>
                Salvar como imagem
            </Button>
        </div>
    );
}
