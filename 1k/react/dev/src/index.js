import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AddPlayerButton from './AddPlayerButton';
import Player from './Player';

class PlayersList extends React.Component {
  render() {
    let players = this.props.players.map((player) => {
      return (
        <Player 
          name={player.name} 
          scores={player.scores} 
          misses={player.misses} 
          lastAction={player.lastAction}  
          handlerRemovePlayer={this.props.handlerRemovePlayer}
          handlerChangeAccount={this.props.handlerChangeAccount}
        />
      );
    });

    return (
      <div className="player-list">
        {players}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [
        {name: 'name', scores: '0', misses: '0', lastAction: '0'}
      ]
    };

    this.handlerAddPlayer = this.handlerAddPlayer.bind(this);
    this.handlerRemovePlayer = this.handlerRemovePlayer.bind(this);
    this.handlerChangeAccount = this.handlerChangeAccount.bind(this);
  }

  handlerAddPlayer(e) {
    e.preventDefalut();

    let newPlayerName = prompt('Введите имя');

    this.setState({
      players: this.state.players.concat({
        name: newPlayerName,
        scores: 0,
        misses: 0,
        lastAction: '-'
      })
    });
  }

  handlerRemovePlayer(playerName) {
    this.setState({
      players: this.state.players.filter(player => player.name !== playerName)
    });
  }

  handlerChangeAccount(playerName, action) {
    this.setState({
      players: this.state.players.map((player, i) => {
        if (player.name !== playerName) return player;

        if (+action !== 0) {
          return {...player, lastAction: action, scores: +player.scores + +action};
        }

        if (player.misses < 2) {
          return {...player, lastAction: 'Болт', misses: +player.misses +1};
        } else {
          return {...player, lastAction: 'Болт -120', scores: +player.scores - 120, misses: 0};
        }
        
      })
    });
  }

  render() {
    return (
      <div className="container">
        <PlayersList 
          players={this.state.players} 
          handlerRemovePlayer={this.handlerRemovePlayer}
          handlerChangeAccount={this.handlerChangeAccount}
        />
        <AddPlayerButton handlerAddPlayer={this.handlerAddPlayer} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));