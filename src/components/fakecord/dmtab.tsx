import defaultIcon from "../assets/images/discord.webp";

type DmTabProps = {
  bgColor?: string;
  imgUrl?: string;
  name?: string;
};

function DmTab({bgColor = "#FFFFFF", imgUrl, name}: DmTabProps) {
  return (
    <div
      className="w-full h-[42.01px] rounded-lg flex flex=row items-center px-2 min-h-[42.01px]"
      style={{ backgroundColor: bgColor }}
    >
      <img 
      src={imgUrl ? imgUrl : defaultIcon} 
      width={32} 
      className="rounded-2xl object-cover" />

      <p className="ml-2.5 text-gray-300 font-semibold">{name ? name : "NO DISPLAY"}</p>
    </div>
  );
}

export default DmTab;
