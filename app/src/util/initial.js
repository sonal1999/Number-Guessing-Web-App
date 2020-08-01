const generateRandomNumber = Math.floor((Math.random()*100)+1)  

export const getInitialValues = () => ({
    actual : generateRandomNumber,
    msg : 'You are close to ...',
    color : '',
})

export const getMessage = (difference) => {
    let message;
    let color;
  if (difference === 0) {
    color= 'green';
    message = 'Correct !';
  } else if (difference >= 1  && difference <= 4) {
    color= 'red';
    message = 'Hot !';
  } else if (difference >= 5  && difference <= 15) {
    color= 'yellow';
    message = 'Warm !';
  } else if (difference >= 16) {
    color= 'blue';
    message = 'Cold !';
  }
  return {
    message,
    color
  };
}








