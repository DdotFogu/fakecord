import type { ReactNode } from "react";
import { Presence } from "../../types";

type PresenceProp = {
  presence? : Presence;
  size? : number;
};

function UserPresence({presence, size = 26}: PresenceProp){
    
    const IDS: Record<string, string> = {
        "Online": "online",
        "Offline": "offline",
        "Idle": "idle",
        "DND": "dnd"
    }
    const mask_id: string = IDS[presence as Presence];

    const MASKS: Record<string, ReactNode> = {
        "Online": <mask id={mask_id}><rect x="3" y="3" width="10" height="10" rx="5" ry="5" fill="#FFFFFF"></rect><rect x="12.5" y="10"   rx="0" ry="0" fill="black"></rect><polygon points="-2.16506,-2.5 2.16506,0 -2.16506,2.5" fill="black" transform="scale(0) translate(13.125 10)"></polygon><circle fill="black" cx="12.5" cy="10" r="0"></circle></mask>,
        "Offline": <mask id={mask_id}><rect x="3" y="3" width="10" height="10" rx="5" ry="5" fill="#FFFFFF"></rect><rect x="5.6" y="5.6" width="5" height="5" rx="2.5" ry="2.5" fill="black"></rect><polygon points="-2.16506,-2.5 2.16506,0 -2.16506,2.5" fill="black" transform="scale(0) translate(13.125 10)"></polygon><circle fill="black" cx="12.5" cy="10" r="0"></circle></mask>,
        "Idle": <mask id={mask_id}><rect x="3" y="3" width="10" height="10" rx="5" ry="5" fill="#FFFFFF"></rect><rect x="1.5" y="1.5" width="7.5" height="7.5" rx="3.75" ry="3.75" fill="black"></rect><polygon points="-2.16506,-2.5 2.16506,0 -2.16506,2.5" fill="black" transform="scale(0) translate(13.125 10)"></polygon><circle fill="black" cx="12.5" cy="10" r="0"></circle></mask>,
        "DND": <mask id={mask_id}><rect x="3" y="3" width="10" height="10" rx="5" ry="5" fill="#FFFFFF"></rect><rect x="4.3" y="7" width="7.5" height="2.5" rx="1.25" ry="1.25" fill="black"></rect><polygon points="-2.16506,-2.5 2.16506,0 -2.16506,2.5" fill="black" transform="scale(0) translate(13.125 10)"></polygon><circle fill="black" cx="12.5" cy="10" r="0"></circle></mask>
    }

    const COLORS: Record<string, string> = {
        "Online": "#45A366",
        "Offline": "#84858D",
        "Idle": "#FFC04E",
        "DND": "#DA3E44"
    }

    const mask: ReactNode = MASKS[presence as Presence];
    const color: string = COLORS[presence as Presence];

    return(
        <svg 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            xmlns="http://www.w3.org/2000/svg" 
            width={size}
            height={size} 
            viewBox="0 0 16 16" 
            className="cursorDefault__44b0c"
        >
            <defs>{mask}</defs>
            <rect
                fill={color}
                width="40"
                height="40"
                mask={`url(#${mask_id})`}
            />
        </svg>
    ); 
}

export default UserPresence;