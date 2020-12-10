import React from 'react';
import Player from './Player';

export default class PlayersList extends React.Component {
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