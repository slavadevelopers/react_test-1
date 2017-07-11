import React from 'react';
import ListItem from './listitem';
import Souvenir from './souvenir';
import './list.css';

export default class List extends React.Component {

    renderItem(item) {
        return (
            <ListItem key={ item.id }
                      text={ item.text }
                      src={ item.src }
                      alt={ item.alt }
                      hover={ item.hover }/>
        );
    }

    render() {
        return (
            <div className="list">
                {this.props.item.map(this.renderItem.bind(this))}
                <Souvenir />
            </div>
        );
    }
}
