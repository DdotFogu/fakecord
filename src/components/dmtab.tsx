import defaultIcon from "../assets/images/discord.webp";

type DmTabProps = {
  bgColor?: string;
};

function DmTab({bgColor = "#282b30"}: DmTabProps) {
  return (
    <div
      className="w-full h-[2.188vw] rounded-lg flex flex=row items-center px-2"
      style={{ backgroundColor: bgColor }}
    >
      <img 
      src={defaultIcon} 
      width={32} 
      className="rounded-2xl object-cover" />

      <p className="ml-2 text-white text-sm font-semibold">new user</p>
    </div>
  );
}

export default DmTab;
