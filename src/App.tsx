import React from 'react';
import './App.css';
import {CardList} from "./modules/trip/components/List";
import {MainLayout} from "./layout/MainLayout";
import {Box} from "@mui/material";

function App() {

  return (
    <div className="App">
        <MainLayout>
            <header className="header">
                Evaneos
            </header>
            <Box>
                <CardList />
            </Box>
        </MainLayout>
    </div>
  );
}

export default App;
