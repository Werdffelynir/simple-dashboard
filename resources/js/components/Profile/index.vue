<template>
<div>
    <VCard dark max-width="800" class="auth-form m-auto">

    <span v-for="key in fields">
        <VRow>
            <VCol alignSelf="end" class="text-right">
                {{key}}
            </VCol>
            <VCol alignSelf="end" class="text-left">
                {{user[key]}}
            </VCol>
        </VRow>
    </span>

    </VCard>
</div>
</template>
<script>

    import {getterWithModule} from '../../store/getterWith';
    import {GET_USER} from '../../store/Profile/getters';


    export default {
        name: 'profile-component',
        mounted() { },
        data() {
            return {
                fields: ['id', 'name', 'email', 'created_at']
            }
        },
        computed: {
            user() {
                return {...getterWithModule('profile', GET_USER)};
            },
        },

    }
</script>
