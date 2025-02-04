import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";
import { routes } from "./router/router.tsx";
import store from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <RouterProvider router={routes} />
    </Provider>
);