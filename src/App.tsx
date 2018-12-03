import * as React from 'react';
import './App.css';
import MyData from './components/mydata';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <MyData name={'Mithilesh Tarkar'} />
      </div>
    );
  }
}

export default App;
