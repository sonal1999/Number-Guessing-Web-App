const generateRandomNumber = () => Math.floor((Math.random()*100)+1)

const getInitialValues = () => ({
    actual : generateRandomNumber,
    block : false,
})

export default getInitialValues;





