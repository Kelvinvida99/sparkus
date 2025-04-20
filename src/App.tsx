import { LayoutGrid } from "lucide-react";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import { ConductorsTable } from "./modules/tables/material-properties/components/ConductorsTable";
import { SidebarItem } from "./components/layout/Sidebar/SidebarItem";

function App() {
  return (
    <main className="flex h-screen">
      <Sidebar>
        <SidebarItem icon={<LayoutGrid size={20} />} text="Tablas" alert />
      </Sidebar>

      {/* Contenido principal */}
      <ConductorsTable />
    </main>
  );
}

export default App;
