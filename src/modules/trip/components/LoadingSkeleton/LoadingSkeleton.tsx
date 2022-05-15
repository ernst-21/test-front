import React from 'react';
import {MainHeader} from "../../../../layout/Header";
import {MainLayout} from "../../../../layout/MainLayout";
import {MOCK_TRIPS} from "../../constants/trip";
import {CardList} from "../List";

const MyComponent = () => {
    return (
        <div className='App'>
            <MainHeader />
            <MainLayout>
                {MOCK_TRIPS.map((trip) => (<CardList key={trip?.id} highlight={false} isLoading={true} data={MOCK_TRIPS} />))}
            </MainLayout>
        </div>
    );
};

export default MyComponent;
