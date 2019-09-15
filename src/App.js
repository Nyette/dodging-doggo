import React, { Component } from 'react';
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    initialize: true,
    game: {
      width: "100%",
      height: "100%",
      type: Phaser.AUTO,
      scene: {
        init: function() {
          // What goes in here?
          this.cameras.main.setBackgroundColor('#24252A')
        },
        preload: function() {
          this.load.image('dog', 'assets/dogPink.png')
        },
        create: function() {
          this.dog = this.add.sprite(40, 80, 'dog')
        },
        update: function() {
          // the dog's movement controls
        }
      }
    }
  }
  render() {
    const { initialize, game } = this.state
    return (
      <IonPhaser game={game} initialize={initialize} />
    )
  }
}

export default App;
