<template>
    <div id="header-menu">
        <VToolbarItems>
            <h2>
                <i>Hello {{userName}}</i> </h2>
                    <a href="/" v-on:click="logout">
                <VBtn text>logout</VBtn>
            </a>
        </VToolbarItems>
    </div>
</template>

<script>

    import '../../../sass/components/menu.scss';
    import {makeLogout} from '../../services/auth.service';
    import {GET_USER} from '../../store/Profile/getters';

    export default {

        name: 'menu-component',

        data() {
            return {
            }
        },

        computed: {
            userName: function () {
                return this.$store.getters['profile/' + GET_USER].name
            }
        },

        methods: {
            logout(e) {
                e.preventDefault();
                makeLogout()
            },
        },
    }
</script>
