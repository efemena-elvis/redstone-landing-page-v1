// ================================
// REDSTONE LANDING PAGE ROUTES
// ================================
const landingRoutes = [
  {
    path: "/",
    alias: "/home",
    component: () =>
      import(
        /* webpackChunkName: "landing-layout" */
        "@/modules/landing/layouts/layout-landing"
      ),

    children: [
      // ===============================
      // REDSTONE HOME ROUTE
      // ===============================
      {
        path: "",
        name: "RedstoneHome",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing/pages/home"
          ),
      },
      {
        path: "/contact-sales",
        name: "ContactSales",
        component: () =>
          import(
            /* webpackChunkName: "landing-module" */
            "@/modules/landing/pages/contact-sales"
          ),
      },
    ],
  },
];

export default landingRoutes;
