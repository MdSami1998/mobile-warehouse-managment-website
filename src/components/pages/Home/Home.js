import React from 'react';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Subscribe from '../Subscribe/Subscribe';
import TeamMembers from '../TeamMembers/TeamMembers';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products></Products>
            <TeamMembers></TeamMembers>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;