import React, { useEffect } from "react";
import Banner from './Banner';
import QuickCards from './QuickCard';
import Quote from './Quote';
import CreditCard from './CreditCards';
import About from './About';
import { Events } from "react-scroll";


export default function Home() {
      useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {});

    Events.scrollEvent.register("end", function (to, element) {});

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
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
