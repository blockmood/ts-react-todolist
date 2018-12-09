import * as React from 'react';
import TodoApp from './container/TodoApp'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
          <TodoApp />
      </div>
    );
  }
}

export default App;
