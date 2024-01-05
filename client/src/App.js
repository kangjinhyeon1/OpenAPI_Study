import { styled } from 'styled-components'
import axios from 'axios'
import './App.css';
import { useState } from 'react';

function App() {

  const [text, setText] = useState("책")

  const translate = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:4123/translate",
        {
          params: {
            text: text
          }
        }
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Main>
        1wwwe
      </Main>
      <button onClick={translate}>
        asd
      </button>
    </>

  );
}

export default App;

const Main = styled.div`
  font-size: 100px;
`;