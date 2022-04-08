import React, {useState} from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [randompic, setRandompic] = useState('');
  
  //////////////   ////////////  Call the Random API Using React-Axios //////////////////////////////////////////////////// 
  const handleClick = () => {
    axios
    .get (
      'https://api.generated.photos/api/v1/faces?api_key=IKwZxWisCEdDfFbNTQkVuA&order_by=random'
    ).then(res => {
      const api = (res.data.faces[0].urls[4][512]);
      api && setRandompic(api)
    })
    .catch(err => {
      console.log(err.message);
    });
  };

  /////////////////  End The API function ??????///////////////////////////////
  return (
    <>
    <div className="App">
      <h1>Generete a New One </h1>
      {randompic && <img src={randompic} alt='Photo'/> }
      <button type='button' onClick={handleClick}> New One </button>
    </div>
    
     </>
  );
}

export default App;
