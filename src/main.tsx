import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/app/store.ts";
import App from "./App.tsx";

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  throw new Error('No root with ID="root"');
}
