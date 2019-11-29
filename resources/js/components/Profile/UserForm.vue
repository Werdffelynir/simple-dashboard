<template>
    <VCard dark max-width="800" class="auth-form m-auto">

        <VForm v-model="form.valid" class="pa-10">
            <VRow>
                <VCol cols="12" md="4">
                    <VTextField
                        required
                        v-model="user.name"
                        :rules="form.rules.string"
                        label="User Name"></VTextField>
                    <VTextField
                        required
                        v-model="user.email"
                        :rules="form.rules.email"
                        label="E-mail Address"></VTextField>
                </VCol>
            </VRow>

            <VRow>
                <VCol alignSelf="end" class="text-right">
                    <VBtn v-on:click="send">Save</VBtn>
                </VCol>
            </VRow>
        </VForm>
    </VCard>
</template>
<style>
    .auth-form{
        margin: 0 auto;
    }
</style>
<script>
    import {getterWithModule} from '../../store/getterWith';
    import {GET_USER} from '../../store/Profile/getters';
    import {saveUser} from '../../services/profile.service';

    export default {
        name: 'userform-component',
        props: ['csrf'],

        data() {
            return {
                form: {
                    valid: false,
                    rules: {
                        password: [
                            v => !!v || 'Password is required',
                            v => v.length <= 24 || 'Password must be less than 24 characters',
                        ],
                        string: [
                            v => !!v || 'Name is required',
                            v => v.length <= 24 || 'Name must be less than 24 characters',
                        ],
                        email: [
                            v => !!v || 'E-mail is required',
                            v => /.+@.+/.test(v) || 'E-mail must be valid',
                        ]
                    },
                },
            };
        },

        computed: {
            user() {
                return {...getterWithModule('profile', GET_USER)};
            },
        },

        methods: {
            send() {
                if (this.form.valid) {
                    console.log('send form', this.user);
                    saveUser(this.user);
                }
            },
        },
    }
</script>
