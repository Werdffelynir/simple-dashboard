<template>
    <div>
        <h1>Hello friend!</h1>
    </div>
</template>
<style>
    .dashboard {
        width: 100%;
        padding: 0 2rem 0 1rem;
    }
</style>
<script>

    import Messenger from '../../components/common/Messenger';

    export default {
        name: 'dashboard-component',
        mounted() {
            console.log('Component "Dashboard" mounted.')
        },
        components: {
            'messenger-component': Messenger
        }
    }

</script>
