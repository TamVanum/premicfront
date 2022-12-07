import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';



const prices =  [
    { detail: "student", amount: 600 },
    { detail: "minimal", amount: 400 },
    { detail: "Rancagua", amount: 1100 },
]
    


function Prices() {
    return (
        <React.Fragment>
        
        <Container maxWidth="md" align="center" component="main" sx={{paddingTop: 2}}>
        <Grid container spacing={5} alignItems="flex-end">
            {prices.map((prices) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={prices.detail}
                xs={12}
                md={4}
              >
                <Card>
                  <CardHeader
                    title={prices.detail}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{
                      align: 'center',
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'baseline',
                        mb: 0,
                      }}
                    >
                      <Typography sx={{fontSize: 30}} color="text.primary">
                        ${prices.amount}
                      </Typography>
                    </Box>
                    
                  </CardContent>
                  
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </React.Fragment>

        );
    }


    export default Prices;
