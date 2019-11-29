<template id="notification-template">
    <VSnackbar top :multi-line="true" v-model="visibly" v-show="visibly" >
        <h2 v-bind:class="type === 'error' ? 'red--text' : ''">
            {{message}}
        </h2>
        <VBtn color="pink" text @click="hide">Close</VBtn>
    </VSnackbar>
</template>
<style></style>
<script>


    import {getterWithModule} from '../../store/getterWith';
    import {
        GET_NOTIFICATION_MESSAGE,
        GET_NOTIFICATION_TYPE,
        VISIBLY_NOTIFICATION
    } from '../../store/UI/getters';
    import {commitWithModule} from '../../store/commitWith';

    export default {
        template: '#notification-template',
        name: 'notification-component',
        props: [''],
        mounted() {
            console.log('Component "Notification" mounted.')
        },
        data() {
            return {}
        },
        computed: {
            type() {
                return getterWithModule('ui', GET_NOTIFICATION_TYPE);
            },
            message() {
                return getterWithModule('ui', GET_NOTIFICATION_MESSAGE);
            },
            visibly() {
                return !!getterWithModule('ui', VISIBLY_NOTIFICATION)
            },
        },
        methods: {
            hide () {
                commitWithModule('ui', VISIBLY_NOTIFICATION, false);
            },
        }
    }
</script>
