import { createBrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Vocabulary from "./pages/Vocabulary";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "vocabulary",
        element: <Vocabulary />,
      },
    ],
  },
]);

export default router;