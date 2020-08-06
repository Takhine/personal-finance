import React from 'react';
import Banner from './Banner';
import QuickCards from './QuickCard';
import Quote from './Quote';


export default function Home() {
    return (
        <div id="home">
        <Banner />
        <QuickCards />
        <Quote />
        </div>
    )
}
