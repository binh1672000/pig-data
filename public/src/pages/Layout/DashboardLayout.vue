<template>
<div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <notifications></notifications>

    <side-bar :sidebar-item-color="sidebarBackground" :sidebar-background-image="sidebarBackgroundImage">
        <mobile-menu slot="content"></mobile-menu>
        <sidebar-link to="/dashboard">
            <md-icon>dashboard</md-icon>
            <p>Dashboard</p>
        </sidebar-link>
        <sidebar-link to="/data">
            <md-icon>content_paste</md-icon>
            <p>DATABASE</p>
        </sidebar-link>
        <sidebar-link to="/table">
            <md-icon>storage</md-icon>
            <p>MISS DATA</p>
        </sidebar-link>
        <sidebar-link to="/showimage">
            <md-icon>library_books</md-icon>
            <p>???? </p>
        </sidebar-link>

        <sidebar-link to="/test">
            <md-icon>home</md-icon>
            <p>Final graphs</p>
        </sidebar-link>
        <sidebar-link to="/demo">
            <md-icon>home</md-icon>
            <p>Demo</p>
        </sidebar-link>

    </side-bar>

    <div class="main-panel">
        <top-navbar></top-navbar>

        <fixed-plugin :color.sync="sidebarBackground" :image.sync="sidebarBackgroundImage">
        </fixed-plugin>

        <dashboard-content> </dashboard-content>

        <content-footer v-if="!$route.meta.hideFooter"></content-footer>
    </div>
</div>
</template>

<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "@/pages/Layout/MobileMenu.vue";
import FixedPlugin from "./Extra/FixedPlugin.vue";

export default {
    components: {
        TopNavbar,
        DashboardContent,
        ContentFooter,
        MobileMenu,
        FixedPlugin,
    },
    data() {
        return {
            sidebarBackground: "green",
            sidebarBackgroundImage: require("@/assets/img/sidebar-2.jpg"),
        };
    },
};
</script>
