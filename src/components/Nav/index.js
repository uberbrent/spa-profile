import React from 'react';

function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props

    return(
        <header>
            <h1>
                <a href='/'>
                    <span>brent.m.johnson</span>
                </a>
            </h1>
            <nav>
                <ul>
                    {categories.map((category) => {
                        <li
                            className={`mx-1 ${currentCategory === category}`}
                            key={category}
                        >
                            <span
                                onClick={() => {
                                    setCurrentCategory(catgegory)
                                }}
                            >{category}</span>
                        </li>
                    })}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;