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
            let playerElement = createElement({
                tagName: 'div',
                id: 'player-' + index,
                className: 'player',
                attributes: null
            });

            $(playerElement).append('<button" class="close-button" data-id="'+index+'" onclick="game.deletePlayer(this)"><i class="close-icon"></i></button>');
            console.log($(playerElement))
            playerElement.appendChild(createElement({
                tagName: 'h2',
                className: 'player-name',
                text: player.name,
                attributes: null
            }));

            let displayScores = createElement({
                tagName: 'div',
                className: 'display-scores',
                text: null,
                attributes: null
            });

            playerElement.appendChild(displayScores);

            displayScores.appendChild(createElement({
                tagName: 'span',
                className: 'scores',
                text: player.scores,
                attributes: null
            }));

            displayScores.appendChild(createElement({
                tagName: 'span',
                className: 'last-action',
                text: player.lastAction,
                attributes: null
            }));

            displayScores.appendChild(createElement({
                tagName: 'span',
                className: 'misses',
                text: player.misses,
                attributes: null
            }));

            let inputGroup = createElement({
                tagName: 'div',
                className: 'input-group',
                text: null,
                attributes: null
            });

            playerElement.appendChild(inputGroup);

            inputGroup.appendChild(createElement({
                tagName: 'input',
                className: null,
                text: null,
                attributes: [
                    {name: 'type', value: 'text'},
                    {name: 'data-id', value: index}
                ]
            }));

            inputGroup.appendChild(createElement({
                tagName: 'button',
                className: 'change-account',
                text: 'Изменить',
                attributes: [
                    {name: 'data-id', value: index}
                ]
            }));

            

            $('.players').append(playerElement);

            this.loadEventListeners();
        }

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
    },
    deletePlayer(target) {
            let $this = $(target);
            let id = $this.data('id');
            
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
    
function createElement(arElement) {
    let element = document.createElement(arElement.tagName);

    if(arElement.className != null) {
        if(Array.isArray(arElement.className)) {
            for(className of arElement.className) {
                element.classList.add(className);
            }
        } else if(typeof arElement.className == 'string') {
            element.classList.add(arElement.className);
        } else {
            return false;
        }
        
    }

    if(arElement.attributes != null) {
        if(Array.isArray(arElement.attributes)) {
            for(attribute of arElement.attributes) {
                element.setAttribute(attribute.name, attribute.value)
            }
        } else {
            return false;
        }
    }

    if(arElement.text != null) {
        element.innerText = arElement.text;
    }

    if(arElement.id != null) {
        element.id = arElement.id;
    }

    return element;
}


game.loadData();
game.updateSession();
