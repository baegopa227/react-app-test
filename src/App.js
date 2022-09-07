import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [test,setTest] = useState('');

  useEffect(()=>{
      axios.get('/api/test')
      .then(response => setTest(response.data))
      .catch(error => console.log(error))
  },[]);

  return (
    <div>{test}
    </div>
  );
}

export default App;
