import {useState} from 'react';

export default function ({value}) {
    const [isClicked, setIsClicked] = useState(false);
    let className = 'button';

    if (isClicked) {
        className += 'guessed';
    }

    setIsClicked(true)


    return (
        <button 
            className={className}
        >
            {value}
        </button>
    );
}