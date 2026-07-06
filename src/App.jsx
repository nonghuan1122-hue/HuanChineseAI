import "./index.css";

import { Outlet } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <div className="h-screen bg-slate-100">

      <div className="flex h-full">

        <Sidebar />

        <div className="flex-1 flex flex-col">

          <div className="p-4 pb-0">
            <Header />
          </div>

          <main className="flex-1 overflow-y-auto px-4 pb-4">

            <div className="min-h-full rounded-[30px]">

              <Outlet />

            </div>

          </main>

        </div>

      </div>

    </div>
  );
}

export default App;