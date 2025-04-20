// Sidebar.tsx
import { ChevronFirst, ChevronLast } from "lucide-react";
import { ReactNode, useState } from "react";
import { SidebarContext } from "./hooks/SidebarContext";

// Context para que los items sepan si está expandido


export default function Sidebar({ children }: { children: ReactNode }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside
      className={`
        h-screen bg-white border-r shadow-sm
        transition-all duration-300 ease-in-out
        ${expanded ? "w-60" : "w-16"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 pb-2">
        {/* Logo: ancho animado */}
        <img
          src="../../../../../public/assets/logo_sparkus.png"
          alt="Logo"
          className={`
            overflow-hidden transition-all duration-300
            ${expanded ? "w-32" : "w-0"}
          `}
        />
        {/* Botón collapse */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          title={expanded ? "Colapsar" : "Expandir"}
        >
          {expanded ? <ChevronFirst /> : <ChevronLast />}
        </button>
      </div>

      {/* Menú */}
      <SidebarContext.Provider value={{ expanded }}>
        <nav className="flex-1 overflow-hidden">
          <ul className="px-2">{children}</ul>
        </nav>
      </SidebarContext.Provider>

      {/* Footer de usuario */}
      {/* <div className="border-t p-3 flex items-center">
        <img
          src="https://ui-avatars.com/api/?background=0D8ABC&color=fff"
          alt="Avatar"
          className="w-10 h-10 rounded-md flex-shrink-0"
        />
        <div
          className={`
            flex-1 flex items-center transition-all duration-300
            ${expanded ? "opacity-100 ml-3" : "opacity-0 ml-0"}
            overflow-hidden
          `}
        >
          <div className="leading-tight">
            <h4 className="font-semibold text-sm">John Doe</h4>
            <p className="text-xs text-gray-600">johndoe@gmail.com</p>
          </div>
          <MoreVertical size={20} className="ml-auto" />
        </div>
      </div> */}
    </aside>
  );
}




