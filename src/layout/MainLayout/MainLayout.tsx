import React from 'react';
import {Container} from "@mui/material";

const MainLayout = ({children}: any) => {
    return (
        <Container
            sx={{padding: {xs:'2rem', md:'6rem 2rem'}}}
            maxWidth='xl'
        >
            {children}
        </Container>
    );
};

export default MainLayout;
