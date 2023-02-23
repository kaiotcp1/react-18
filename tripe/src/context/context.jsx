import React from "react";
import { useState, useContext } from "react";
import sublinks from './data';

const AppContext = React.createContext();

export const appProvider = ({children}) => {
const [isSidebarOpen, setIsSidebarOpen] = useContext(true);
const [isSubmenuOpen, setIsSubmenuOpen] = useContext(true);

const openSidebar = () => {
    setIsSidebarOpen(true);
};

const closeSidebar = () => {
    setIsSidebarOpen(false);
};

const openSubmenu = () => {
    setIsSubmenuOpen(true);
};

const closeSubmenu = () => {
    setIsSubmenuOpen(false);
};

return <AppContext.Provider value={{
    isSubmenuOpen, 
    isSidebarOpen, 
    openSidebar, 
    openSubmenu, 
    closeSidebar, 
    closeSubmenu}}>
    {children}
</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}