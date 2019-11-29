<template>
    <VCard v-if="show" dark max-width="800" class="auth-form m-auto">

        <div class="auth-menu">
            <router-link to="/login">
                <VBtn text>Login</VBtn>
            </router-link>
            <router-link to="/register">
                <VBtn text>Register</VBtn>
            </router-link>
        </div>

        <VForm v-model="form.valid" class="pa-10">
            <VRow>
                <VCol cols="12" md="4">
                    <VTextField
                        required
                        v-model="form.data.name"
                        autocomplete="username"
                        :rules="form.rules.string"
                        label="User Name"></VTextField>
                    <VTextField
                        required
                        v-model="form.data.email"
                        :rules="form.rules.email"
                        label="E-mail Address"></VTextField>
                    <VTextField
                        required
                        type="password"
                        v-model="form.data.password"
                        :rules="form.rules.password"
                        :counter="24"
                        label="Password"></VTextField>
                    <VTextField
                        required
                        type="password"
                        v-model="form.data.passwordConfirm"
                        :rules="form.rules.passwordConfirm"
                        :counter="24"
                        label="Confirm Password"></VTextField>
                </VCol>
            </VRow>

            <VRow>
                <VCol alignSelf="end" class="text-right">
                    <VBtn v-on:click="send">Register</VBtn>
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
    import {makeRegister} from '../../services/auth.service';
    import {requestPost} from '../../util/request';
    import {URL_POST_REGISTER} from '../../api';

    export default {
        name: 'register-component',
        props: ['csrf'],
        data () {
            return {
                show: true,
                form: {
                    valid: false,
                    data: {
                        name: 'admin',
                        email: 'admin@admin.com',
                        password: 'admin@admin.com',
                        passwordConfirm: '',
                    },
                    rules: {
                        password: [
                            v => !!v || 'Password is required',
                            v => v.length <= 24 || 'Password must be less than 24 characters',
                        ],
                        passwordConfirm: [
                            v => v === this.form.data.password || 'Confirm please Password',
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
                }
            }
        },

        methods: {
            send() {
                if (this.form.valid) {
                    makeRegister(this.form.data);

                    requestPost(URL_POST_REGISTER, this.form.data)
                        .then(response => {
                            if (response.message) {
                                setTimeout(()=>
                                    this.$router.push('/login'),3000);
                            }
                        })
                        .catch(error => {});
                }
            },
        },

    }
</script>
