import { createRouter, createWebHistory } from "vue-router"

const routes: any[] = [
	{
		path: "/",
		name: "signin",
		component: () => import("../views/home/HomeView.vue")
	},
	{
		path: "/company",
		name: "company",
		component: () => import("../layout/Layout.vue"),
		redirect: "/company/dashbord",
		children: [
			{
				path: "/company/dashbord",
				name: "dashbord",
				component: () => import("../views/company/CompanyView.vue"),
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: "active",
});

export default router;