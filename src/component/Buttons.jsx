import React, { useState } from 'react'
import * as math from 'mathjs';
import '../style/Buttons.css'



const Buttons = () => {

    const [result, setResult] = useState();


    const handleButtonPress = (value) => {
        setResult((prevResult) => prevResult + value)

    };

    const calculate = () => {
        if (result === '') {
            return;
        }

        try {
            const evaluatedResult = math.evaluate(result);
            if (evaluatedResult === undefined || evaluatedResult === null || isNaN(evaluatedResult)) {
                setResult('Error');
            } else {
                setResult(String(evaluatedResult));
            }
        } catch (error) {
            setResult('Error');
        }
    };



    const handleClear = () => {
        setResult('');
    };

    return (
        <div>
            <div className="container">
                <h1 style={{ color: "Black" }} >Calculator App with ReactJS and MathJs</h1>
            </div>

            <div className="calculator">
                <div className="form__group field">
                    <input type="input" className="form__field" value={String(result)} readOnly />
                </div>

                <div className="buttons">
                    <button type="button" className="btn btn-danger" onClick={handleClear}>C</button>
                    <button type="button" className="btn btn-secondary" onClick={() => handleButtonPress(7)}>7</button>
                    <button type="button" className="btn btn-secondary" onClick={() => handleButtonPress(8)}>8</button>
                    <button type="button" className="btn btn-secondary" onClick={() => handleButtonPress(9)}>9</button>
                    <button type="button" className="btn btn-dark" onClick={() => handleButtonPress('/')}>/</button>
                    <button type="button" className="btn btn-secondary" onClick={() => handleButtonPress(4)}>4</button>
                    <button type="button" className="btn btn-secondary" onClick={() => handleButtonPress(5)}>5</button>
                    <button type="button" className="btn btn-secondary" onClick={() => handleButtonPress(6)}>6</button>
                    <button type="button" className="btn btn-dark" onClick={() => handleButtonPress('*')}>*</button>
                    <button type="button" className="btn btn-secondary" onClick={() => handleButtonPress(1)}>1</button>
                    <button type="button" className="btn btn-secondary" onClick={() => handleButtonPress(2)}>2</button>
                    <button type="button" className="btn btn-secondary" onClick={() => handleButtonPress(3)}>3</button>
                    <button type="button" className="btn btn-dark" onClick={() => handleButtonPress('-')}>-</button>
                    <button type="button" className="btn btn-secondary" onClick={() => handleButtonPress(0)}>0</button>
                    <button type="button" className="btn btn-outline-dark" onClick={() => handleButtonPress('.')}>.</button>
                    <button type="button" className="btn btn-primary" onClick={calculate}>=</button>
                    <button type="button" className="btn btn-dark" onClick={() => handleButtonPress('+')}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Buttons
