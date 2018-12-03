import * as React from 'react';
import './App.css';
import MyData from './components/mydata';

class App extends React.Component {
  public render() {
    return (
      <div className='App'>
        <MyData name={''} email={''}  />
      </div>
    );
  }
}

export default App;
