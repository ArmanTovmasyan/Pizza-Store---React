import react from 'react';
import { useState } from 'react';

function ShowMore({text, max = 55}) {
    // let showLess = true;
    const [showLess, setShowLess] = useState(true);

    // const text = props.text;
    // let max = props.max;
    // if(max === undefined) {
    //     max = 55;
    // }

    if (text.length <= max){
       return <p>{text}</p>;
    }

    return (
        <div>
            {showLess ? `${text.substring(0, max)} ...` : text}
            <a href = "#" onClick = {(event)=>{
                event.preventDefault();
                setShowLess(!showLess);
            }}>{showLess ? "more" : "less"}</a>
        </div>
    );
}

export default ShowMore;