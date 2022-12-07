import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ComboBoxPlanner from './CboPlanner';
import RdbPassenger from './RdbPassenger';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Grid container justifyContent={'center'}>
    <Box sx={{  flexGrow: 1, 
                padding: 2, 
                margin:4,
                maxWidth:900,
                display:"flex",
                justifyContent:"center",
                alignItems:"center",}}>


      <Grid container spacing={2} >
        <Grid item xs={12} md={12} justifyContent="center">
          <Item><RdbPassenger/></Item>
        </Grid>
        <Grid item xs={12} md={6} justifyContent="center">
          <Item><ComboBoxPlanner/></Item>
        </Grid>
        <Grid item xs={12} md={6} justifyContent="center">
          <Item><ComboBoxPlanner/></Item>
        </Grid>
      </Grid>
    </Box>
    </Grid>
  );
}
