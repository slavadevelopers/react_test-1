import React from 'react';
import className from 'classname';
import './list.css';

export default class ListItem extends React.Component {

    changeHover() {
        console.log('change');
    }
    
    render() {
        const classListItem = className('list-item', {
            'hover': this.props.hover
        });
        return (
                <div className={ classListItem } onMouseEnter={ this.changeHover.bind(this) } onMouseLeave={ this.changeHover.bind(this) }>
                    <div>
                        <img src={ this.props.src } alt={ this.props.alt }/>
                    </div>
                </div>
        );
    }
}
