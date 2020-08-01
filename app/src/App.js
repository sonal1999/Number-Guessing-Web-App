import React,{useState} from 'react';
import './App.css';
import Form from './components/form'
import Result from './components/result'
import {getInitialValues , getMessage}  from './util/initial';
 
function App() {
  const [initialValues , setValues] = useState(getInitialValues)

  const updateState = (value) => {
      const differnece = Math.abs(value-initialValues.actual);
      const {message , color} = getMessage(differnece);

      console.log(initialValues.actual);
      
      setValues({
        actual : initialValues.actual,
        msg : message,
        color : color,
    })

  }
 
    return (
      <div>
         <Result msg={initialValues.msg} color ={initialValues.color}></Result>
         <Form getInputValue = {value => updateState(value) }></Form>  
      </div>
     );  
}

export default App;
