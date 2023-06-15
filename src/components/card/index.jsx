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
            context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height + 22);

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
