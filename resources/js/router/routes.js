import DashboardComponent from '../components/Dashboard';
import ProfileComponent from '../components/Profile';
import LoginComponent from '../components/auth/Login.vue';
import RegisterComponent from '../components/auth/Register.vue';
import UserForm from '../components/Profile/UserForm';
import UserFormPassword from '../components/Profile/UserFormPassword';
import Messenger from '../components/common/Messenger';


export const routes = [
    {
        name: 'Dashboard',
        path: '/',
        component: DashboardComponent },
    {
        name: 'Login',
        path: '/login',
        component: LoginComponent },
    {
        name: 'Register',
        path: '/register',
        component: RegisterComponent },
    {
        name: 'Profile',
        path: '/profile',
        component: ProfileComponent },
    {
        name: 'Profile User',
        path: '/profile/user',
        component: UserForm },
    {
        name: 'Profile Password',
        path: '/profile/password',
        component: UserFormPassword },
    {
        name: 'Online Chat',
        path: '/chat',
        component: Messenger },
];
