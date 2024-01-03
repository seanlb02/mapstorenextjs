import { createContext, useState } from "react";



export const Sidebar_props = createContext({});

export default function Context({ children }) {
    const [sidebarprops, setSidebarprops] = useState({previewBool: false, boundbox:[
      [50.505, -29.09],
      [52.505, 29.09]
    ]});
  
    return (
      <Sidebar_props.Provider value={{ sidebarprops, setSidebarprops }}>
        {children}
      </Sidebar_props.Provider>
    );
  }
  