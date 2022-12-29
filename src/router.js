import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
// lazy-loaded
const Profile = () => import("./components/Profile.vue")
const BoardAdmin = () => import("./components/AdminDashboard.vue")
const BoardUser = () => import("./components/UserDashboard.vue")
const Users = () => import("./components/Users.vue")
const User = () => import("./components/User.vue")
const AddUser = () => import("./components/AddUser.vue")
const Activities = () => import("./components/Activities.vue")
const Activity = () => import("./components/Activity.vue")
const AddActivity = () => import("./components/AddActivity.vue")
const Categories = () => import("./components/Categories.vue")
const Category = () => import("./components/Category.vue")
const AddCategory = () => import("./components/AddCategory.vue")
const Goals = () => import("./components/Goals.vue")
const Goal = () => import("./components/Goal.vue")
const AddGoal = () => import("./components/AddGoal.vue")

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        path: "/register",
        component: Register,
    },
    {
        path: "/profile",
        name: "profile",
        // lazy-loaded
        component: Profile,
    },
    {
        path: "/admin",
        name: "admin",
        // lazy-loaded
        component: BoardAdmin,
    },
    {
        path: "/user",
        name: "user",
        // lazy-loaded
        component: BoardUser,
    },
    {
        path: "/users",
        name: "users",
        // lazy-loaded
        component: Users,
    },
    {
        path: '/user/:userid',
        name: "user",
        // lazy-loaded
        component: User,
    },
    {
        path: '/adduser',
        name: "adduser",
        // lazy-loaded
        component: AddUser,
    },
    {
        path: '/activities',
        name: "activities",
        // lazy-loaded
        component: Activities,
    },
    {
        path: '/activities/:activityid',
        name: "activity",
        // lazy-loaded
        component: Activity,
    },
    {
        path: '/addactivity',
        name: "addactivity",
        // lazy-loaded
        component: AddActivity,
    },
    {
        path: '/categories',
        name: "categories",
        // lazy-loaded
        component: Categories,
    },
    {
        path: '/categories/:categoryid',
        name: "category",
        // lazy-loaded
        component: Category,
    },
    {
        path: '/addcategory',
        name: "addcategory",
        // lazy-loaded
        component: AddCategory,
    },
    {
        path: '/goals',
        name: "goals",
        // lazy-loaded
        component: Goals,
    },
    {
        path: '/goals/:goalid',
        name: "goal",
        // lazy-loaded
        component: Goal,
    },
    {
        path: '/addgoal',
        name: "addgoal",
        // lazy-loaded
        component: AddGoal,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register', '/home'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });

export default router;