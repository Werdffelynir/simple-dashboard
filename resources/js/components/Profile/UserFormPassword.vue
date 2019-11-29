<template>
    <VCard dark max-width="800" class="auth-form m-auto">

        <VForm v-model="form.valid" class="pa-10">
            <VRow>
                <VCol cols="12" md="4">
                    <VTextField
                        required
                        type="password"
                        v-model="form.data.oldPassword"
                        :rules="form.rules.password"
                        :counter="24"
                        label="Old Password"></VTextField>
                    <VTextField
                        required
                        type="password"
                        v-model="form.data.newPassword"
                        :rules="form.rules.password"
                        :counter="24"
                        label="New Password"></VTextField>
                    <VTextField
                        required
                        type="password"
                        v-model="form.data.passwordConfirm"
                        :rules="form.rules.passwordConfirm"
                        :counter="24"
                        label="Confirm New Password"></VTextField>
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

    import { changePassword } from '../../services/profile.service';


    export default {
        name: 'userform-password-component',
        props: ['csrf'],

        data() {
            return {
                form: {
                    valid: false,
                    data: {
                        oldPassword: "admin@admin.com",
                        newPassword: "admin@admin.com",
                        passwordConfirm: "admin@admin.com",
                    },
                    rules: {
                        password: [
                            v => !!v || 'Password is required',
                            v => v.length <= 24 || 'Password must be less than 24 characters',
                        ],
                        passwordConfirm: [
                            v => v === this.form.data.newPassword || 'Confirm please Password',
                        ],
                    },
                },
            };
        },

        computed: {},

        methods: {
            send() {
                if (this.form.valid) {
                    changePassword(this.form.data);
                }
            },
        },
    }
</script>
