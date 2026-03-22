import type { ReactNode } from "react";

type BtnProps = {
    svg?: ReactNode
    dropdown?: boolean
    onBtnEnter?: (e: React.MouseEvent) => void
    onBtnExit?: (e: React.MouseEvent) => void
    onBtnClick?: (e: React.MouseEvent) =>  void
    onDropDownEnter?: (e: React.MouseEvent) => void
    onDropDownExit?: (e: React.MouseEvent) => void
}

function FooterBtn({svg, dropdown = false, onBtnEnter, onBtnExit, onBtnClick, onDropDownEnter, onDropDownExit}: BtnProps) {
    return(
        <span 
            className={`footer-btn-wrapper ${dropdown ? "footer-btn-wrapper--dropdown" : "footer-btn-wrapper--solo"}`}
        >
          <button 
            className="footer-btn"
            onMouseEnter={onBtnEnter}
            onMouseLeave={onBtnExit}
            onClick={onBtnClick}
          >
            {svg}
          </button>
          {dropdown && <span 
            className="footer-btn-dropdown"
            onMouseEnter={onDropDownEnter}
            onMouseLeave={onDropDownExit}
          >
            <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="buttonChevronIcon__5e764" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="oklab(0.700617 0.00173205 -0.0100245)" d="M5.3 9.3a1 1 0 0 1 1.4 0l5.3 5.29 5.3-5.3a1 1 0 1 1 1.4 1.42l-6 6a1 1 0 0 1-1.4 0l-6-6a1 1 0 0 1 0-1.42Z"></path></svg>
          </span>}
        </span>
    );
}

export default FooterBtn;