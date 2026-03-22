import type { ReactNode } from "react";

type PopupDetails = {
    content?: ReactNode,
    pos?: {x: number, y: number},
    visible?: boolean
}

const TextPopup = (({content, pos, visible}: PopupDetails) => {

    return(
        <div 
            className="text-popup"
            style={{
                left: pos?.x, 
                top: pos?.y,
                display: visible ? "block" : "none",
                transform: "translateX(-50%)"
            }}
        >
            {content}
        </div>
    );
});

export default TextPopup;