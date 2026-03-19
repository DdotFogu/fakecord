import defaultIcon from "../../assets/images/discord.webp"

type ServerButtonProps = {
  bgColor?: string;
  serverIcon?: string;
  iconSize?: number
};

function ServerButton({ bgColor = "#121213", serverIcon = defaultIcon, iconSize = 40}: ServerButtonProps) {
  return (
    <div
      className="server-btn"
      style={{ backgroundColor: bgColor }}
    >
      <img
        src={serverIcon}
        width={iconSize}
        height={iconSize}
        className="server-pfp"
        style={{ width: iconSize, height : iconSize}}
      />
    </div>
  );
}

export default ServerButton;
