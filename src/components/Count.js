import react from "react";

export default function Count(props) {

     /**
     * Challenge:
     * - Create a new component named Count
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the whole div.counter--count
     *      and display the incoming prop `number`
     * - Replace the div.counter--count below with an instance of
     *   the new Count component
     */

    return (
        <div>
            <button onClick={props.add}>+</button>
            <p>{props.number}</p>
            <button onClick={props.subtract}>-</button>
        </div>
    )
};