let game = {
    players: [
        {
            name: 'name',
            scores: 500,
            lastAction: '+100',
            misses: 1
        }
    ],
    addPlayer(name = null, scores = 0, lastAction = '-', misses = 0) {
        let playerName = name || prompt('Имя');
        
        this.players.push({
            name: playerName,
            scores: scores,
            lastAction: lastAction,
            misses: 0
        });

        this.updateSession();
    },
    changeScores(playerid, action) {
        if(isNaN(parseInt(action))) return;

        if(action == 0) {
            this.players[playerid]['misses'] += 1;

            if(this.players[playerid]['misses'] >= 3) {
                this.players[playerid]['misses'] = 0;
                this.players[playerid]['scores'] += -120;
                this.players[playerid]['lastAction'] = '-120';
            }

            this.updateSession();
        } else {
            this.players[playerid]['scores'] += +action;
            if(+action > 0) {
                this.players[playerid]['lastAction'] = '+'+action;
            }
            
            console.log(this.players[playerid]['scores']);
            this.updateSession();
        }

        
    },
    updateSession() {
        $('.players').html('');

        for([index, player] of this.players.entries()) {
            $('.players').append(`
                <div class="player" id="player-${index}">
                    <button class="close-button" data-id=${index}><i class="close-icon"></i></button>
                    <h2 class="player-name">${player.name}</h2>
                    <div class="display-scores">
                        <span class="scores">${player.scores}</span>
                        <span class="last-action">${player.lastAction}</span>
                        <span class="misses">${player.misses}</span>
                    </div>
                    <div class="input-group">
                        <input type="text" data-id="${index}" placeholder="Введите очки">
                        <button class="change-account" data-id="${index}">Изменить</button>
                    </div>
                </div>
            `);
        }
        this.loadEventListeners();
        this.saveData();
    },
    loadEventListeners() {
        $('.change-account').click(function() {
            let $this = $(this);
            let $input = $this.siblings('input[type=text]');
            let value = $input.val();
            let index = $this.data('id');

            game.changeScores(index, value);
        });

        $('.close-button').click(function() {
            let id = $(this).data('id');

            game.deletePlayer(id);
        });
    },
    deletePlayer(id) {
        game.players.splice(id, 1);
        game.updateSession();
    },
    saveData() {
        localStorage.setItem('players', JSON.stringify(this.players));
    },
    loadData() {
        let loadedData = JSON.parse(localStorage.getItem('players'));
        if(!loadedData) {
            this.players = [];
        } else {
            this.players = loadedData;
        }
        

    }
};

game.loadData();
game.updateSession();
