
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Context } from '../../provider';
import { useContext, useEffect, useState } from 'react';
import {
    Button, Checkbox, FormControlLabel, FormLabel, Radio, RadioGroup, TextField
} from '@mui/material';
import { getDigimonService } from '../../service/getDigimon';
import { Container, Options } from './styled.js';
import backImage from "../../img/Back.png"

export function InfoComponent() {




    const { cardType, setCardType, setCardValue } = useContext(Context);



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

            setCardData((prevCardValue) => ({
                ...prevCardValue,
                name: digimonData.name,
                color: digimonData.color,
                dp: Number(digimonData.dp),
                play_cost: digimonData.play_cost,
                evolution_cost: digimonData.evolution_cost,
                level: digimonData.level,
                cardEffect: digimonData.maineffect || '',
                soureeffect: digimonData.soureeffect || '',
                cardnumber: digimonData.cardnumber,
                attribute: digimonData.attribute,
                type: digimonData.type,
                stage: digimonData.stage,
                digi_type: digimonData.digi_type,
                digimon_level_cost: digimonData.level - 1,
                url: `https://en.digimoncard.com/images/cardlist/card/${digimonData.cardnumber}.png`
            }));

            setCardValue(cardData)
            console.log({
                response: digimonData,
                data: cardData
            })
        } catch (error) {
            console.error(error.response.data);
        }
    }

    function rare(event) {
        console.log(event.target.value)
    }

    useEffect(() => {
        setCardValue(cardData)
    }, [cardData])


    return (
        <div style={{
            width: '500px',
            height: 'auto',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '10px'
        }}>
            <Container>
                <Options>

                    <Select
                        label="Tipo de Card"
                        defaultValue={'Digimon'}
                        onChange={(event) => handleChangeCardData(event)}
                        name='type'
                        value={cardData.type}
                    >
                        <MenuItem value={'Digimon'}>Digimon</MenuItem>
                        <MenuItem value={'Option'}>Option</MenuItem>
                        <MenuItem value={'Tamer'}>Tamer</MenuItem>
                        <MenuItem value={'Digi-Egg'}>Digi-Egg</MenuItem>
                    </Select>

                    <TextField
                        defaultValue={''}
                        label="Codigo do Card"
                        variant="standard"
                        size="small"
                        onChange={(event) => getDigimon(event)}
                        style={{ width: '30%' }}
                    />

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
                        <RadioGroup
                            row
                            name="color"
                            display="flex"
                            onChange={(event) => handleChangeCardData(event)}
                        >
                            <FormControlLabel name='color' value="Black" control={<Radio />} label="Black" />
                            <FormControlLabel name='color' value="Red" control={<Radio />} label="Red" />
                            <FormControlLabel name='color' value="Yellow" control={<Radio />} label="Yellow" />
                            <FormControlLabel name='color' value="Blue" control={<Radio />} label="Blue" />
                            <FormControlLabel name='color' value="Purple" control={<Radio />} label="Purple" />
                            <FormControlLabel name='color' value="White" control={<Radio />} label="White" />
                            <FormControlLabel name='color' value="Green" control={<Radio />} label="Green" />

                        </RadioGroup>


                        <TextField
                            defaultValue={''}
                            label="Custo"
                            variant="standard"
                            size="small"
                            onChange={(event) => handleChangeCardData(event)}
                            style={{ width: '45%' }}
                            name='play_cost'
                            value={cardData.play_cost}
                        />
                        <TextField
                            defaultValue={0}
                            label="DP"
                            variant="standard"
                            size="small"
                            onChange={(event) => handleChangeCardData(event)}
                            style={{ width: '45%' }}
                            name='dp'
                            type='number'
                            value={cardData.dp}
                        />
                        <TextField
                            defaultValue={''}
                            label="Custo de Evolução"
                            variant="standard"
                            size="small"
                            onChange={(event) => handleChangeCardData(event)}
                            style={{ width: '45%' }}
                            name='evolution_cost'
                            value={cardData.evolution_cost}
                        />
                        <TextField
                            defaultValue={''}
                            label="Digimon Level"
                            variant="standard"
                            size="small"
                            onChange={(event) => handleChangeCardData(event)}
                            style={{ width: '45%' }}
                            name='digimon_level_cost'
                            value={cardData.digimon_level_cost}
                        />
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
                            style={{ width: '95%' }}
                            multiline
                            onChange={(event) => handleChangeCardData(event)}
                            name='cardEffect'
                            value={cardData.cardEffect}
                        />
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
                            label="Level do Digimon"
                            variant="standard"
                            size="small"
                            onChange={(event) => handleChangeCardData(event)}
                            style={{ width: '45%' }}
                            name='level'
                            value={cardData.level}
                        />
                        <TextField
                            defaultValue={''}
                            label="Codigo do Card"
                            variant="standard"
                            size="small"
                            onChange={(event) => handleChangeCardData(event)}
                            style={{ width: '45%' }}
                            name='cardnumber'
                            value={cardData.cardnumber}
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
                        />

                    </Box>
                </div>
            </Container>
        </div >
    )
}