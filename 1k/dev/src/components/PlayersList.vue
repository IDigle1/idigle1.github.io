<template>
    <div class="players-list" >
        <player 
            v-for="(player, index) in players" 
            :key="index"
            @delete-player="deletePlayer"
            @change-account="changeAccount"
            :player="player" :index="index" />
    </div>
</template>

<script>
import Player from './Player.vue';

export default {
    name: 'Player',
    props: {
        players: Array
    },
    components: {
        "player": Player
    },
    methods: {
        addPlayer(index) {
            this.$emit('delete-player', index);
        },
        deletePlayer(index) {
            this.$emit('delete-player', index);
        },
        changeAccount(index, action) {
            this.$emit('change-account', index, action);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .players-list {
        max-height: calc(100vh - 60px);
        padding: 10px;
        overflow: auto;
    }
</style>
