import React from 'react';
import Banner from './Banner';
import QuickCards from './QuickCard';
import Quote from './Quote';
import CreditCard from './CreditCards';
import About from './About';


export default function Home() {
    return (
        <div id="home">
        <Banner />
        <QuickCards />
        <Quote />
        <CreditCard />
        <About />
        </div>
    )
}
