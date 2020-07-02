import React from 'react';

import { Card } from '../card/card.component';
import './card-list.styles.css';

//cardList is a functional component and not a class component
export const CardList = (props) => {
    return (
        <div className="card-list">
            {props.monsters.map((monster) => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    );
};
