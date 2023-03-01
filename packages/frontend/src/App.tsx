import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Mycomponent } from './Mycomponent'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    // fetch data
    const dataFetch = async () => {
      const data = await (
        await fetch(
          "https://run.mocky.io/v3/b3bcb9d2-d8e9-43c5-bfb7-0062c85be6f9"
        )
      ).json();

      // set state when the data received
      setData(data);
    };

    dataFetch();
  }, []);

  return (
    <div className="App">
      <Mycomponent title="Cualquier cosa"/>
      <Mycomponent title="Cualquier otra cosa"/>
      {data.map(({ id }) => <Mycomponent key={id} title={id}/>)}

    </div>
  )
}

export default App
