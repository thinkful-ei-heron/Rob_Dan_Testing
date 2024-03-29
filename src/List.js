import React from 'react';
import Card from './Card';
import './List.css';

export default function lists (props) {
return( 
  <section className="List">
    <header className="List-header">
              <h2>{props.header}</h2>
    </header>
      <div className="List-cards">
          {props.cards.map(card => {
            return(
              <Card title={card.title}  content={card.content} key={card.id}/>
            )
          })
        }
      </div>
      <button type="button" className="List-add-button">
            + Add Random Card
      </button>
  </section>
  );
}