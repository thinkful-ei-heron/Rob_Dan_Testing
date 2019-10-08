import React from 'react';

import ReactDOM from 'react-dom';

import App from './App';

import Card from './Card';

import List from './List';

import store from './store';

describe('Card component smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Card
        title={store.allCards['a'].title}
        content={store.allCards['a'].content}
        key={store.allCards['a'].id}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('List component smoke test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <List
        header={store.lists[0].header}
        cards={store.lists[0].cardIds.map(id => {
          return store.allCards[id];
        })}
        key={store.lists.id}
      />,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
