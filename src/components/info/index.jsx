
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Context } from '../../provider';
import { useContext, useState } from 'react';
import { TextField } from '@mui/material';

export function InfoComponent() {

    const { cardType, setCardType, setCardValue } = useContext(Context);

    const [cardData, setCardData] = useState({
        name: '',
        playCost: '',
        DP: '',
        costLevel: '',
        digivolutionCost: '',
        requirements: '',
        cardEffect: '',
        boostSet: '',
        level: '',
        form: '',
        attribute: '',
        type: '',
        inheritedEffect: '',
        url: ''
    });

    const handleChange = (event) => {
        setCardType(event.target.value);
    };

    const handleChangeCardData = (event) => {
        const { name, value } = event.target;
        const updatedCardData = { ...cardData, [name]: value };
        setCardData(updatedCardData);
        setCardValue(updatedCardData);
    };

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
            <Box sx={{ minWidth: 120, height: 'auto' }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Card Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={cardType}
                        label="Age"
                        onChange={handleChange}
                        style={{ margin: '5px' }}
                    >
                        <MenuItem value={'digimonRed'}>Digimon Red</MenuItem>
                        <MenuItem value={'digimonBlue'}>Digimon Blue</MenuItem>
                        <MenuItem value={'digimonYellow'}>Digimon Yellow</MenuItem>
                    </Select>
                </FormControl>

                {/* Nome do Card */}
                <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth style={{ margin: '5px' }} onChange={handleChangeCardData} name='name' />

                <TextField id="outlined-basic" label="Play Cost" variant="outlined" style={{ margin: '5px' }} onChange={handleChangeCardData} name='playCost' />

                <TextField id="outlined-basic" label="Batle Points" variant="outlined" style={{ margin: '5px' }} onChange={handleChangeCardData} name='DP' />

                <TextField id="outlined-basic" label="Digivolution Cost Level" variant="outlined" style={{ margin: '5px' }} onChange={handleChangeCardData} name='costLevel' />

                <TextField id="outlined-basic" label="Digivolution Cost" variant="outlined" style={{ margin: '5px' }} onChange={handleChangeCardData} name='digivolutionCost' />

                <TextField id="outlined-basic" label="Digivolution Requirements" variant="outlined" fullWidth style={{ margin: '5px' }} onChange={handleChangeCardData} name='requirements' />

                <TextField id="outlined-basic" label="Card Effect(s)" variant="outlined" fullWidth style={{ margin: '5px' }} onChange={handleChangeCardData} name='cardEffect' />

                <TextField id="outlined-basic" label="Booster Set" variant="outlined" fullWidth style={{ margin: '5px' }} onChange={handleChangeCardData} name='boostSet' />

                <TextField id="outlined-basic" label="Level" variant="outlined" style={{ margin: '5px' }} onChange={handleChangeCardData} name='level' />

                <TextField id="outlined-basic" label="Form" variant="outlined" style={{ margin: '5px' }} onChange={handleChangeCardData} name='form' />

                <TextField id="outlined-basic" label="Attribute" variant="outlined" style={{ margin: '5px' }} onChange={handleChangeCardData} name='attribute' />

                <TextField id="outlined-basic" label="Type" variant="outlined" style={{ margin: '5px' }} onChange={handleChangeCardData} name='type' />

                <TextField id="outlined-basic" label="Inherited Effect" variant="outlined" fullWidth style={{ margin: '5px' }} onChange={handleChangeCardData} name='inheritedEffect' />

                <TextField id="outlined-basic" label="Img Url" variant="outlined" fullWidth style={{ margin: '5px' }} onChange={handleChangeCardData} name='url' />


            </Box>
        </div>
    )
}