import defaultIcon from "../assets/images/discord.webp";

type TabProps = {
  bgColor?: string;
  serverIcon?: string;
  iconSize?: number
  height?: number;
  text?: string;
};

function Tab({ bgColor = "#36393e", serverIcon = defaultIcon, iconSize = 40, height = 40, text = ""}: TabProps) {
  return (
    <div
      className="w-full rounded-xl overflow-hidden flex justify-start items-center p-2 gap-2"
      style={{ backgroundColor: bgColor, height: height }}
    >
      <img
        src={serverIcon}
        width={iconSize}
        height={iconSize}
        className="object-cover"
        style={{ width: iconSize, height : iconSize}}
      />
      <p className="text-gray-400 font-semibold">{text}</p>
    </div>
  );
}

export default Tab;
