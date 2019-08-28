import React,{useState, useEffect} from 'react';
import Loading from './layout/Loading/Loading';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true)
    },5000);
  });

  return (loaded) ? (
    <div className="App">
    </div>
  ) : (
    <Loading />
  )
}

export default App;
