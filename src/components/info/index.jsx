import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
    Button, Checkbox, FormControlLabel, FormLabel, Radio, RadioGroup, TextField
} from '@mui/material';
import { getDigimonService } from '../../service/getDigimon';
import { Container, Options } from './styled.js';
import backImage from "../../img/Back.png";
import { translateEffect } from '../../service/translate';
import { Context } from '../../provider';

export function InfoComponent() {
    const { cardType, setCardType, setCardValue, fontSize, setFontSize } = useContext(Context);
    const [cardData, setCardData] = useState({
        name: '',
        dp: 0,
        play_cost: 0,
        evolution_cost: 0,
        requirements: 0,
        level: 0,
        stage: '',
        attribute: '',
        cardEffect: '',
        cardnumber: '',
        digi_type: 'Digi-Egg',
        soureeffect: '',
        type: '',
        color: '',
        digimon_level_cost: 0,
        rare: false,
        url: 'https://img.mypcards.com/img/9/1595/digimon_bt5_001_p1/digimon_bt5_001_p1_en.jpg'
    });

    const handleChangeCardData = (event) => {
        const { name, value } = event.target;
        const updatedCardData = { ...cardData, [name]: value };
        setCardData(updatedCardData);
        setCardValue((prevCardValue) => ({
            ...prevCardValue,
            [name]: value

        }));

    };

    const handleFontSize = (event) => {
        const font = event.target.value;
        setFontSize(font)
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        const updatedCardData = { ...cardData, [name]: checked };
        setCardData(updatedCardData);
        setCardValue((prevCardValue) => ({
            ...prevCardValue,
            [name]: checked,
        }));
    };


    async function getDigimon(code) {
        try {
            const response = await getDigimonService(code.target.value);
            const digimonData = response.data[0];

            const translatedMainEffect = await translateEffect(digimonData.maineffect);
            const translatedSourceEffect = await translateEffect(digimonData.soureeffect);
            const erro = 'NO QUERY SPECIFIED. EXAMPLE REQUEST: GET?Q=HELLO&LANGPAIR=EN|IT'

            const updatedCardData = {
                ...cardData,
                name: digimonData.name,
                color: digimonData.color,
                dp: Number(digimonData.dp),
                play_cost: digimonData.play_cost,
                evolution_cost: digimonData.evolution_cost,
                level: digimonData.level,
                cardEffect: translatedMainEffect === erro ? '' : translatedMainEffect || '',
                soureeffect: translatedSourceEffect === erro ? '' : translatedSourceEffect || '',
                cardnumber: digimonData.cardnumber,
                attribute: digimonData.attribute,
                type: digimonData.type,
                stage: digimonData.stage,
                digi_type: digimonData.digi_type,
                digimon_level_cost: digimonData.level - 1,
                url: `https://en.digimoncard.com/images/cardlist/card/${digimonData.cardnumber}.png`
            };

            setCardData(updatedCardData);
            setCardValue(updatedCardData);
        } catch (error) {
            console.error(error.response.data);
        }
    }

    useEffect(() => {
        setCardValue(cardData)

    }, [cardData])

    var valorAreaTransferencia = ""; // Variável para armazenar o valor atual da área de transferência

    function copiarTextoParaAreaTransferencia(texto) {
        // Verifica se o valor atual é diferente do novo valor
        if (valorAreaTransferencia !== texto) {
            // Cria um elemento de área de transferência temporário
            var tempInput = document.createElement("textarea");
            tempInput.style.position = "absolute";
            tempInput.style.left = "-1000px";
            tempInput.value = texto;
            document.body.appendChild(tempInput);

            // Seleciona o texto no elemento de área de transferência temporário
            tempInput.select();
            tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis

            // Copia o texto selecionado para a área de transferência
            document.execCommand("copy");

            // Remove o elemento de área de transferência temporário
            document.body.removeChild(tempInput);

            // Atualiza o valor da variável com o novo valor
            valorAreaTransferencia = texto;

            // Exibe uma mensagem ou realiza outras ações de acordo com a necessidade
            console.log("Valor copiado para a área de transferência: " + texto);
        } else {
            // Valor atual é o mesmo que o novo valor, não há necessidade de copiar novamente
            console.log("Valor já está na área de transferência: " + texto);
        }
    }





    return (
        <div style={{
            width: '50%',
            height: 'auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px'
        }}>
            <Container>
                <Options>
                    <TextField
                        defaultValue={''}
                        label="Codigo do Card"
                        variant="standard"
                        size="small"
                        onChange={(event) => getDigimon(event)}
                        style={{ width: '30%' }}
                    />  <Button onClick={() => copiarTextoParaAreaTransferencia(cardData.cardnumber)}>Copiar</Button>

                    <FormControlLabel
                        control={<Checkbox checked={cardData.rare} name='rare' value={cardData.rare} onChange={(event) => handleCheckboxChange(event)} />}
                        name="rare"
                        label="Rare"
                        value={cardData.rare}
                    />
                </Options>
                <div>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '50ch' }
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            defaultValue={''}
                            label="Link da Imagem"
                            variant="standard"
                            style={{ width: '95%' }}
                            onChange={(event) => handleChangeCardData(event)}
                            name='url'
                            value={cardData.url}
                        />
                        <TextField
                            defaultValue={''}
                            label="Efeito do Digimon"
                            variant="standard"
                            style={{ width: '85%' }}
                            multiline
                            onChange={(event) => handleChangeCardData(event)}
                            name='cardEffect'
                            value={cardData.cardEffect}
                        />
                        <TextField
                            defaultValue={''}
                            label="Font Size"
                            variant="standard"
                            style={{ width: '10%' }}
                            multiline
                            type='number'
                            onChange={(event) => handleFontSize(event)}
                            name='fontSize'
                            value={fontSize}
                        />
                        <Button variant="contained" onClick={() => copiarTextoParaAreaTransferencia(cardData.cardEffect)}>Copiar Effeito</Button>
                        <TextField
                            defaultValue={''}
                            label="Nome do Digimon"
                            variant="standard"
                            style={{ width: '45%' }}
                            onChange={(event) => handleChangeCardData(event)}
                            name='name'
                            value={cardData.name}
                        />

                        <TextField
                            defaultValue={''}
                            label="Forma"
                            variant="standard"
                            size="small"
                            onChange={(event) => handleChangeCardData(event)}
                            style={{ width: '45%' }}
                            name='stage'
                            value={cardData.stage}
                        />
                        <TextField
                            defaultValue={''}
                            label="Atributo"
                            variant="standard"
                            size="small"
                            onChange={(event) => handleChangeCardData(event)}
                            style={{ width: '45%' }}
                            name='attribute'
                            value={cardData.attribute}
                        />
                        <TextField
                            defaultValue={''}
                            label="Tipo de Digimon"
                            variant="standard"
                            size="small"
                            onChange={(event) => handleChangeCardData(event)}
                            style={{ width: '45%' }}
                            name='digi_type'
                            value={cardData.digi_type}
                        />
                        <TextField
                            defaultValue={''}
                            label="Efeito Legado"
                            variant="standard"
                            size="small"
                            onChange={(event) => handleChangeCardData(event)}
                            style={{ width: '95%' }}
                            multiline
                            name='soureeffect'
                            value={cardData.soureeffect}
                        /><Button variant="contained" onClick={() => copiarTextoParaAreaTransferencia(cardData.soureeffect)}>Copiar Efeito Legado</Button>

                    </Box>
                </div>
            </Container>
        </div >
    )
}