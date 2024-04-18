import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

export default function ButtonAppBar() {
   return (
      <Box className="container navbar" sx={{ flexGrow: 1 }}>
         <AppBar style={{background: "white", color: "black"}} position="static">
            <Container>
               <Toolbar>
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                     Logo
                  </Typography>
                  <Button variant="contained" color="secondary">Sign in</Button>
               </Toolbar>
            </Container>
         </AppBar>
      </Box>
   );
}

