<template>
    <div class="sb">
        <VList dense>
            <router-link to="/">
                <VListItem link>
                    <VListItemAction>
                        <VIcon>mdi-home</VIcon>
                    </VListItemAction>
                    <VListItemContent>
                        <VListItemTitle>Start</VListItemTitle>
                    </VListItemContent>
                </VListItem>
            </router-link>

            <router-link to="/profile">
                <VListItem link>
                    <VListItemAction>
                        <VIcon>mdi-account-box</VIcon>
                    </VListItemAction>
                    <VListItemContent>
                        <VListItemTitle>Profile</VListItemTitle>
                    </VListItemContent>
                </VListItem>
            </router-link>

            <router-link to="/profile/password">
                <VListItem link>
                    <VListItemAction>
                        <VIcon>mdi-lock</VIcon>
                    </VListItemAction>
                    <VListItemContent>
                        <VListItemTitle>Edit Password</VListItemTitle>
                    </VListItemContent>
                </VListItem>
            </router-link>

            <router-link to="/profile/user">
                <VListItem link>
                    <VListItemAction>
                        <VIcon>mdi-mail</VIcon>
                    </VListItemAction>
                    <VListItemContent>
                        <VListItemTitle>Edit Name & E-mail</VListItemTitle>
                    </VListItemContent>
                </VListItem>
            </router-link>

            <router-link to="/chat">
                <VListItem link>
                    <VListItemAction>
                        <VIcon>mdi-card-text-outline</VIcon>
                    </VListItemAction>
                    <VListItemContent>
                        <VListItemTitle>Messenger</VListItemTitle>
                    </VListItemContent>
                </VListItem>
            </router-link>
        </VList>
    </div>
</template>
<script>
    import '../../../sass/components/sidebar.scss';

    export default {
        name: 'sidebar-component',
    }
</script>
