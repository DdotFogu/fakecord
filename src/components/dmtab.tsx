import defaultIcon from "../assets/images/discord.webp";

type DmTabProps = {
  bgColor?: string;
  imgUrl?: string;
  name?: string;
};

function DmTab({bgColor = "#282b30", imgUrl, name}: DmTabProps) {
  return (
    <div
      className="w-full h-[2.188vw] rounded-lg flex flex=row items-center px-2"
      style={{ backgroundColor: bgColor }}
    >
      <img 
      src={imgUrl ? imgUrl : defaultIcon} 
      width={32} 
      className="rounded-2xl object-cover" />

      <p className="ml-2.5 text-gray-300 font-semibold">{name ? name : "NO NAME"}</p>
    </div>
  );
}

export default DmTab;
