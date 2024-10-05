import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './Order-Online.css';
import UberEats from '../assets/uber-eats.svg';
import DoorDash from '../assets/doordash-logo.svg';
import Grubhub from '../assets/grubhub-logo.png';
import Slice from '../assets/slice.svg';

export default function ButtonSizes() {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div className='order-online-buttons'>
        <Button variant="contained" size="large" id='order-button'>
          {/* Uber Eats */}
          <img src={UberEats} alt="" />
        </Button>
        <Button variant="contained" size="large" id='order-button'>
        <img src={DoorDash} alt="" />
        </Button>
        <Button variant="contained" size="large" id='order-button'>
        <img src={Grubhub} alt="" />
        </Button>
        <Button variant="contained" size="large" id='order-button'>
        <img src={Slice} alt="" />
        </Button>
      </div>
    </Box>
  );
}