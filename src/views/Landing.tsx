import React from 'react';
import Collection from '../components/Collection';

import Hero from '../components/Hero';

const Landing: React.FC = () => {
    

    return (
        <section>
           <h2>Landing View</h2>
           <Hero />
           <Collection />
        </section>
    )
}

export default Landing;