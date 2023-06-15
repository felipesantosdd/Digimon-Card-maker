
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Context } from '../../provider';
import { useContext, useEffect, useState } from 'react';
import { Button, FormControlLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { getDigimonService } from '../../service/getDigimon';

export function InfoComponent() {




    const { cardType, setCardType, setCardValue } = useContext(Context);



    const [cardData, setCardData] = useState({
        name: '',
        dp: '',
        play_cost: '',
        evolution_cost: '',
        requirements: '',
        level: '',
        stage: '',
        attribute: '',
        cardEffect: '',
        cardnumber: '',
        digi_type: '',
        soureeffect: '',
        type: '',
        color: '',
        url: 'https://images.digimoncard.io/images/card-creator/card/common_red_digi.png'
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

    async function getDigimon(code) {
        try {
            const response = await getDigimonService(code);
            const digimonData = response.data[0];

            setCardData((prevCardValue) => ({
                ...prevCardValue,
                name: digimonData.name,
                color: digimonData.color,
                dp: digimonData.dp,
                play_cost: digimonData.play_cost,
                evolution_cost: digimonData.evolution_cost,
                level: digimonData.level,
                cardEffect: digimonData.maineffect || '',
                soureeffect: digimonData.soureeffect || '',
                attribute: digimonData.attribute,
                type: digimonData.type,
                stage: digimonData.stage,
                digi_type: digimonData.digi_type,
                url: 'https://images.digimoncard.io/images/card-creator/card/common_red_digi.png'
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
            {/* Tipo de card */}

            <Box sx={{ minWidth: 300, height: 'auto' }}>
                <FormControl fullWidth>
                    <TextField id="outlined-basic" label="Effect" variant="outlined" fullWidth style={{ margin: '5px' }} onChange={handleChangeCardData} name='cardEffect' />

                    <TextField id="outlined-basic" label="Inherited Effect" variant="outlined" fullWidth style={{ margin: '5px' }} onChange={handleChangeCardData} name='soureeffect' />

                    <TextField id="outlined-basic" label="Img Url" variant="outlined" fullWidth style={{ margin: '5px' }} onChange={handleChangeCardData} name='url' />
                </FormControl>
                <FormControl fullWidth>
                    <h4>Digite o Codigo do Digimon para buscar seus dados</h4>
                    <TextField id="outlined-basic" label="Card Number" variant="outlined" style={{ margin: '5px' }} onChange={handleChangeCardData} name='cardnumber' />
                    <Button variant="contained" onClick={() => getDigimon(cardData.cardnumber)}>Buscar</Button>

                    <TextField
                        id="outlined-multiline-flexible"
                        multiline
                        name='effect'
                        value={cardData.cardEffect}
                    />
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Efeito Legado"
                        multiline

                        name='soureeffect'
                        value={cardData.soureeffect}
                    />
                </FormControl>



            </Box>
        </div>
    )
}