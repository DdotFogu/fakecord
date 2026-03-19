type DmTabProps = {
  bgColor?: string;
  imgUrl?: string;
  name?: string;
};

function DmTab({bgColor = "#FFFFFF", imgUrl, name}: DmTabProps) {
  return (
    <div
      className="dm-tab"
      style={{ backgroundColor: bgColor }}
    >
      <img 
      src={imgUrl} 
      width={32} 
      className="dm-pfp" />

      <p className="dm-title">{name ? name : "NO DISPLAY"}</p>
    </div>
  );
}

export default DmTab;
