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
                        v-model="form.data.email"
                        :rules="form.rules.email"
                        label="E-mail Address"></VTextField>
                    <VTextField
                        required
                        type="password"
                        autocomplete="username"
                        v-model="form.data.password"
                        :rules="form.rules.password"
                        :counter="24"
                        label="Password"></VTextField>
                    <VCheckbox v-model="form.data.rememberMe" label="Remember Me"></VCheckbox>
                </VCol>
            </VRow>

            <VRow>
                <VCol alignSelf="end" class="text-right">
                    <VBtn v-on:click="send">Login</VBtn>
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
    import { makeLogin } from '../../services/auth.service';

    export default {
        name: 'login-component',
        props: ['csrf'],
        data () {
            return {
                show: true,
                form: {
                    valid: false,
                    data: {
                        email: 'admin@admin.com',
                        password: 'admin@admin.com',
                        rememberMe: true,
                    },
                    rules: {
                        password: [
                            v => !!v || 'Password is required',
                            v => v.length <= 24 || 'Password must be less than 24 characters',
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
                    console.log('send form', this.form.data);
                    makeLogin(this.form.data);
                }
            },
        },
    }
</script>
