import React from 'react';
import List from './List';
// import store from './store';
import './App.css';

function App(props) {
  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {props.store.lists.map(list => {
          return (
            <List
              header={list.header}
              cards={list.cardIds.map(id => {
                return props.store.allCards[id];
              })}
              key={list.id}
            />
          );
        })}
      </div>
    </main>
  );
}

export default App;
