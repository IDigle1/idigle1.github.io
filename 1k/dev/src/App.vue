<template>
  <div id="app">
    <div class="container">
        <players-list 
        :players="players" 
        @delete-player="deletePlayer" 
        @change-account="changeAccount" />
    </div>
    <add-player @add-player="addPlayer"></add-player>
  </div>
</template>

<script>
import PlayersList from './components/PlayersList.vue';
import AddPlayer from './components/AddPlayer.vue';

export default {
    name: 'App',
    components: {
        "players-list": PlayersList,
        "add-player": AddPlayer
    },
    data() {
        return {
            players: []
        }
    },
    beforeMount() {
        if(!localStorage.getItem('players')) {
            localStorage.setItem('players', "[]");
            return;
        }

        let loadedPlayersData = JSON.parse(localStorage.getItem('players'));

        this.players = loadedPlayersData;
    },
    watch: {
        players: {
            handler: function() {
                let savedData = JSON.stringify(this.players);
                localStorage.setItem('players', savedData);
            },
            deep: true
        }
    },
    methods: {
        addPlayer() {
            let playerName = prompt('Введите имя игрока');

            this.players.push({
                name: playerName,
                scores: 0,
                lastAction: '-',
                misses: 0
            });

            this.saveData();
        },
        deletePlayer(index) {
            this.players.splice(index, 1);
            this.saveData();
        },
        changeAccount(index, action) {
            console.log(index, action);
            if (+action === 0) {
                if (this.players[index].misses < 2) {
                    this.players[index].misses++;
                    this.players[index].lastAction = 'Болт';
                } else {
                    this.players[index].misses = 0;
                    this.players[index].scores += -120;
                    this.players[index].lastAction = '-120';
                }

                return;
            } 
            
            if (+action >= 0 || +action <= 0) {
                this.players[index].scores += +action;
                this.players[index].lastAction = (action > 0) ? (`+${action}`) : action;
            }
            
        }
    }
}
</script>

<style lang="scss">
    

</style>
