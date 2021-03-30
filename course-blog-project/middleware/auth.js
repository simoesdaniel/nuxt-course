export default function({ store, redirect, req }) {
  store.dispatch("auth/initAuth", req);

  if (!store.getters["auth/isAuthenticated"]) {
    redirect("/admin/auth/");
  }
}
