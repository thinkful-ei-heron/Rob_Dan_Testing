import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Card from './Card';
import './List.css';
import List from './List';
import store from './store';

it('render list as expected', () => {
    const section = renderer
    .create(<List
        header={store.lists[0].header}
        cards={store.lists[0].cardIds.map(id => {
          return store.allCards[id];
        })}
        key={store.lists.id}
      />)
    .toJSON();
    expect(section).toMatchSnapshot();  
});