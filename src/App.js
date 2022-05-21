import React from 'react';
import moment, { weekdays } from 'moment';
import { Container } from './components/Container';
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
  React.useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <Container
      hours={state.hours}
      minutes={state.minutes}
      seconds={state.seconds}
    />
  );
}

export default App;
