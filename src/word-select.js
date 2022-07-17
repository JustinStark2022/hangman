import {useState} from 'react';
// eslint-disable-next-line
export default function({wordSelected, isShown}) {
    const [secretWord, setSecretWord] = useState('');

    return (
        <div className={isShown ? '' : 'hidden'}>
            <input 
                type="text"
                onChange={(e) => setSecretWord(e.target.value)}
            />
            <button 
                onClick={e => wordSelected(secretWord)}
            >
                Set Secret Word
            </button>

        </div>

    )


}