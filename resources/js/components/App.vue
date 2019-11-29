<template>
    <VApp>
        <div v-if="isAuth">
            <VNavigationDrawer app clipped-x :width="sidebar ? 250 : 60">
                <sidebar-component />
            </VNavigationDrawer>

            <VAppBar app>
                <template v-if="$vuetify.breakpoint.smAndUp">
                    <VBtn v-on:click="sidebarToggle">
                        <VIcon>mdi-view-parallel</VIcon>
                    </VBtn>
                </template>
                <VSpacer></VSpacer>
                <menu-component />
            </VAppBar>
        </div>

        <VContent class="content-main pr-4">
            <VContainer class="container-main" fluid>
                <router-view></router-view>
            </VContainer>
        </VContent>

        <VFooter app>
            <div class="copy text-right"><span>Development</span> &copy; 2019 </div>
        </VFooter>

        <notification-component />

    </VApp>
</template>


<script>
    import NotificationComponent from './common/Notification.vue';
    import SidebarComponent from './common/Sidebar.vue';
    import MenuComponent from './common/Menu.vue';
    import {isAuthorized, init} from '../services/auth.service';


    export default {
        name: 'app-component',

        props: ['csrf'],

        mounted () {
            init();
        },

        data (vueAppComponent) {
            return {
                sidebar: true,
            };
        },

        methods: {
            sidebarToggle() {
                this.sidebar = !this.sidebar
            },
        },

        watch: {},

        computed: {
            isAuth() {
                return isAuthorized()
            },
        },

        components: {
            'notification-component': NotificationComponent,
            'sidebar-component': SidebarComponent,
            'menu-component': MenuComponent,
        },

    }
</script>
