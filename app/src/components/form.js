import React, {useState} from 'react'
//import ReactDom, { render } from 'react-dom'
import './form.css';
//import getInitialValues from '../util/initial';

const Form = () => {
    const generateRandomNumber = Math.floor(Math.random()*100) + 1;

const getInitialValues = () => ({
    actual : generateRandomNumber,
    block : false,
})


    const [value , setValue] = useState(getInitialValues);
    

    const handleSubmit = () => {
        console.log(value.actual);
        console.log("Submission is done !!!");
        setValue({
            actual : 25,
            block : true
        })
    }


    return (    
        <div className='div1'>

        <input className='input1' type='text' placeholder='Enter your guess' ></input>
        <br></br>
        
        <button className='submit1' type="submit" onClick={handleSubmit}>Guess</button>

        </div>  
    )
}
export default Form;
