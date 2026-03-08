type ServerButtonProps = {
  bgColor?: string;
  serverIcon?: string;
  iconSize?: number
};

function ServerButton({ bgColor = "#121213", serverIcon, iconSize = 40}: ServerButtonProps) {
  return (
    <div
      className="h-[40px] w-[40px] rounded-xl overflow-hidden flex justify-center items-center min-h-[40px] min-w-[40px]"
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
