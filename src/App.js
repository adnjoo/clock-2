import React from 'react';
import moment from 'moment';
import { Container } from './components/Container';
import { Container2 } from './components/Container2';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [state, setState] = React.useState({});

  React.useEffect(() => {
    setInterval(() => {
      setState((prevState) => {
        return {
          ...prevState,
          hours: moment().format('h'),
          minutes: moment().format('mm'),
          seconds: moment().format('ss'),
        };
      });
    }, 1000);
  }, []);

  // React.useEffect(() => {
  //   console.log(state);
  // }, [state]); // dev debug

  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Container
              hours={state.hours}
              minutes={state.minutes}
              seconds={state.seconds}
            />
          }
        />
        <Route
          path='/2'
          element={
            <Container2
              hours={state.hours}
              minutes={state.minutes}
              seconds={state.seconds}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
