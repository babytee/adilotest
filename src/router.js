import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () =>
        import(/* webpackChunkName: "Home" */ "./pages/home.vue")
    },
    {
        path: "/start-recording",
        name: "startRecording",
        component: () =>
        import(/* webpackChunkName: "startRecording" */ "./pages/start-recording.vue")
    },
    {
        path: "/record-screen",
        name: "recordScreen",
        component: () =>
        import(/* webpackChunkName: "recordScreen" */ "./pages/record-screen.vue")
    }
]

const router = new createRouter( {
    history: createWebHistory(),
    linkExactActiveClass: "active",
    routes,
    scrollBehavior() {
        // always scroll to top
        return { top: 0 }
    }
})

export default router;