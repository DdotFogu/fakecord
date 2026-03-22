import UserPresence from "./userpresence";

import { Presence } from "../../types";

type DmTabProps = {
  bgColor?: string;
  imgUrl?: string;
  name?: string;
  presence?: Presence;
};

function DmTab({bgColor = "#FFFFFF", imgUrl, name, presence}: DmTabProps) {
  return (
    <div
      className="dm-tab"
      style={{ backgroundColor: bgColor }}
    >
      <img 
        src={imgUrl} 
        width={32} 
        className="dm-pfp" 
      />

      <span 
        className="dmtab-presence"
        style={{ backgroundColor: bgColor }}
      >
        <UserPresence presence={presence} size={16}/>
      </span>

      <p className="dm-title">{name ? name : "NO DISPLAY"}</p>
    </div>
  );
}

export default DmTab;
