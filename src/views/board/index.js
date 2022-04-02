const routes = [
  {
    path: "/",
    name: "started",
    component: () => import(`./Started`),
    meta: {
      guest: true,
    },
  },
  {
    path: "/list",
    name: "list",
    component: () => import(`./List`),
    meta: {
      guest: true,
    },
  },
];

export default routes;
