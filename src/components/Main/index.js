import React, { useState } from 'react';
import Landing from '../Landing';
import Nav from '../Nav';

function Main() {

    const [categories] = useState([
        'landing', 'about', 'portfolio', 'contact', 'resume'
    ])

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    console.log(currentCategory)

    const renderPage = () => {
        switch (currentCategory) {
            default:
                return <Landing />
            case 'about':
                return <About />
            case 'portfolio':
                return <Portfolio />
            case 'contact':
                return <Contact />
            case 'resume':
                return <Resume />
        }
    }
    return (
        <div></div>
    )
}

export default Main;