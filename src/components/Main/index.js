import React, { useState } from 'react';
import Landing from '../Landing';
import Nav from '../Nav';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

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
        <main>
            <Nav
                categories={categories}
                currentCategory={currentCategory}
                setCurrentCategory={setCurrentCategory}
            >    
            </Nav>
            {renderPage(currentCategory)}
        </main>
    )
}

export default Main;