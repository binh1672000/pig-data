import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Data from "@/pages/Data.vue";
import TableList from "@/pages/TableList.vue";
import ShowImage from "@/pages/ShowImage.vue";
import Icons from "@/pages/Icons.vue";
import Notifications from "@/pages/Notifications.vue";
import Test from "@/pages/Test.vue";
import Demo from "@/pages/Demo.vue";


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
      },
      {
        path: "data",
        name: "Data",
        component: Data,
      },
      {
        path: "table",
        name: "Table List",
        component: TableList,
      },
      {
        path: "showimage",
        name: "ShowImage",
        component: ShowImage,
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },{
        path: "test",
        name: "test",
        component: Test,
      },{
        path: "demo",
        name: "demo",
        component: Demo,
      },
      
      
      
    ],
  },
];

export default routes;
