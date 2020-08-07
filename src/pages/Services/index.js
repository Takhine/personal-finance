import React, { useEffect } from "react";
import Banner from './Banner';
import ServiceSections from './ServiceSections';
import { Events } from "react-scroll";


export default function Services() {
      useEffect(() => {
    Events.scrollEvent.register("begin", function (to, element) {});

    Events.scrollEvent.register("end", function (to, element) {});

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
    return (
        <div id="services">
        <Banner />
        <ServiceSections />
        </div>
    )
}
