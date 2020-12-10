import React from 'react';

export default class AddPlayerButton extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div class="button-group">
                <a type="button" onClick={(e) => this.props.handlerAddPlayer(e)} class="add-player">Добавить игрока</a>
            </div>
        );
    }
}