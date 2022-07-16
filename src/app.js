import './app.css';
import GameBoard from './game-board'

export default function App() {
    return (
        <div className="app-container">
            <h1>Welcome to Hangman</h1>
            <p>Do you want to play the Hangman Game?</p>
            <div>
                <GameBoard secretWord="React" />
            </div>
        </div>);
}