import React from 'react';
import {Container} from "@mui/material";

const MainLayout = ({children}: any) => {
    return (
        <Container maxWidth='xl'>
            {children}
        </Container>
    );
};

export default MainLayout;
