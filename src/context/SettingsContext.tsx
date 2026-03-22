import { createContext, useContext, useState, useEffect } from "react";


const Context = createContext<any>({ 
    setMuteToggle: (_bool : boolean) => {},
    mute_toggle: false,
    setDeafToggle: (_bool : boolean) => {},
    deaf_toggle: false
 });

export const useSettings = () => useContext(Context);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
    const [mute_toggle, setMuteToggle] = useState<Boolean>(false);
    const [deaf_toggle, setDeafToggle] = useState<Boolean>(false);

    return (
        <Context.Provider value={{
        setMuteToggle, mute_toggle,
        setDeafToggle, deaf_toggle
        }}>
        {children}
        </Context.Provider>
    );
}