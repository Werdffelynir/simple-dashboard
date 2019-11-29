<template id="messenger-template">

    <VCard dark max-width="800" class="auth-form m-auto">

        <div class="chat">
            <span v-for="chat in this.messages">
                <strong>{{chat.name}}: </strong> {{chat.message}}
            </span>
        </div>

        <VForm class="pa-10">
            <VRow>
                <VCol cols="6" md="12">
                    <VTextarea
                        required
                        v-model="message"
                        label="Message"></VTextarea>
                </VCol>
            </VRow>

            <VRow>
                <VCol alignSelf="end" class="text-right">
                    <VBtn v-on:click="send">Send message</VBtn>
                </VCol>
            </VRow>
        </VForm>

    </VCard>

</template>
<style>
    .chat span {
        display: block;
    }
    .chat {
        max-height: 30vh;
        min-height: 30vh;
        overflow-y: auto;
        background-color: #303030;
    }
</style>

<script>

    import io from 'socket.io-client';
    import {getterWithModule} from '../../store/getterWith';
    import {GET_USER} from '../../store/Profile/getters';


    const socket = io.connect('http://simple-dashboard.loc:3000');

    export default {
        template: '#messenger-template',
        name: 'messenger-component',
        props: [''],
        mounted() {
            console.log('Component "Messenger" mounted.')
        },
        data() {
            socket.on('chat', (messages) => {
                this.messages = messages.reverse();
            });
            return {
                message: '',
                messages: [],
            }
        },
        computed: {
            user() {
                return {...getterWithModule('profile', GET_USER)};
            },
        },
        methods: {
            send () {
                if (this.message.length > 2) {
                    socket.emit('chat', {name: this.user.name, message: this.message});
                    this.message = '';
                }
            },
        }
    }
</script>

