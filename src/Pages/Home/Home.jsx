import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import ToyCard from '../ToyCard/ToyCard';
import Galary from '../Galary/Galary';
import Category from '../Category/Category';

const Home = () => {

    const toys = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Galary></Galary>
            <Category></Category>


         {/* <h3>Shop By Category {toys.length}</h3>
        

        {
            toys.map(toy => <ToyCard
                key={toy._id}
                toy={toy}
            
            
            ></ToyCard>)
        } */}
        </div>
    );
};

export default Home;