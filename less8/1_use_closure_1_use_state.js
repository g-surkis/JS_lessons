// Creating private variables
const a  = 5

function useState(initialValue) {
    let a = initialValue;  
    return [ () => a, (b) => a = b];
  }
  const [health, setHealth] = useState(10);

  console.log('health', health())


  setHealth(2);
  console.log('health', health())


  setHealth(3);

  setHealth(+3)