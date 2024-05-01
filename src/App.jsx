import React from "react";
import Die from "./Components/Die.jsx";
import {nanoid} from "nanoid";

export default function App() {

    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [count, setCount] = React.useState(0)
    
    React.useEffect(() => {			
        const allHeld = dice.every(die => die.isHeld) 
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true);
        }	
    }, [dice])

    function generateNewDie() {     
        return {		
            value: Math.ceil(Math.random() * 6),
            isHeld: false,			
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())  	
        }
        return newDice;
    }
    
    function counter() {
        setCount(count + 1);
    }
    
    function rollDice() {
        if(!tenzies) {
            counter()
            setDice(oldDice => oldDice.map(die => {
                return die.isHeld ? 
                    die :
                    generateNewDie()
            }))
        } else {
            setTenzies(false)
	    setCount(0)
            setDice(allNewDice())
        }
    }
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ?     		 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)} 
        />
    ))
    
    return (
        <main>
            <h1 className="title">
                {tenzies ? 'Congratulations!' : 'Tenzies'}
            </h1>
            <p className="instructions">{tenzies ? 
                'Play again and beat your old score.'
                : 'Roll until all dice are the same. Click each die to freeze/unfreeze it at its current value between rolls.'}</p>
            <div className="dice-container">
                {diceElements}
            </div>
            <p className="counter">Count: {count}</p>
            <button 
                className="roll-dice" 
                onClick={rollDice}
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
    )
}
