import React from 'react'
import '../style/globalStyle.css'
import './form.css';

const Form = ({getInputValue}) => {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const guess = e.target.elements.guess.value;

        console.log(guess);
      //  e.target.elements.guess.value = ''; // Clear input field after submit
        console.log("Submission is done !!!");
        
        getInputValue(guess);
    }


    return (    
        <div className='div1'>
        <form onSubmit={handleSubmit}>
           <input className='input1' type='text' placeholder='Enter your guess' name='guess' ></input>
           <br></br>
           <button className='submit1' type="submit" >Guess</button>
        </form>

        </div>  
    )
}
export default Form;