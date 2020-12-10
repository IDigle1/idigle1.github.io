import React from 'react';

export default class Player extends React.Component {
    constructor(props) {
      super(props);
    
      this.state = {
        accountInputValue: ''
      };

      this.handlerChangeAccountInput = this.handlerChangeAccountInput.bind(this);
    }

    handlerChangeAccountInput(event) {
        this.setState({accountInputValue: event.target.value})
    }
  
    render() {
      return (
        <div className="player" key={this.props.name}>
          <button class="close-button" onClick={() => this.props.handlerRemovePlayer(this.props.name)}>
            <i class="close-icon"></i>
          </button>

          <h2 class="player-name">{this.props.name}</h2>
  
          <div class="display-scores">
            <span class="scores">{this.props.scores}</span>
            <span class="last-action">{this.props.lastAction}</span>
            <span class="misses">{this.props.misses}</span>
          </div>
  
          <div class="input-group">
            <input type="text" placeholder="Введите очки" onChange={(event) => this.handlerChangeAccountInput(event)} />
            <button class="change-account" onClick={() => this.props.handlerChangeAccount(this.props.name, this.state.accountInputValue)}>Изменить</button>
          </div>
        </div>
      );
    }
  }