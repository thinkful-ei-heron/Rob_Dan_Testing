import React from 'react';
import renderer from 'react-test-renderer';

import Card from './Card';
import './List.css';
import store from './store';

it('render card as expected', () => {
    const div = renderer
    .create(<Card
        title={store.allCards['a'].title}
        content={store.allCards['a'].content}
        key={store.allCards['a'].id}
      />)
    .toJSON();
    expect(div).toMatchSnapshot();  
});