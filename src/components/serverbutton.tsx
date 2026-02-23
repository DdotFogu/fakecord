import defaultIcon from "../assets/images/discord.webp";

type ServerButtonProps = {
  bgColor?: string;
  serverIcon?: string;
  iconSize?: number
};

function ServerButton({ bgColor = "#36393e", serverIcon = defaultIcon, iconSize = 40}: ServerButtonProps) {
  return (
    <div
      className="h-[40px] w-[40px] rounded-xl overflow-hidden flex justify-center items-center"
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={serverIcon}
        width={iconSize}
        height={iconSize}
        className="object-cover"
        style={{ width: iconSize, height : iconSize}}
      />
    </div>
  );
}

export default ServerButton;
