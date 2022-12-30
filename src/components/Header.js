import react from 'react';

export default function Header(){
    const result = react.useState("Yes");

    return(
        <nav>
            <img src="./logo512.png" className="nav-image" />
            <span className="nav-title">MemeGenerator</span>
            <span className="nav-project">React Course - Project 3</span>
            <p>{result}</p>
        </nav>
    )
}