import react from 'react';
import Header from './components/Header';
import Meme from './components/Meme';
import Testing from './components/Testing';
import Count from './components/Count';


export default function App(){

    const [count, setCount] = react.useState(0)

    function add() {
        setCount(count+1);
    }   

    function subtract() {
        setCount(count-1);
    }
    
    return(
        <div>
            <Header />
            <Meme />
            {/* <Count number={count} add={add} subtract={subtract}/> */}
        </div>
    )
}