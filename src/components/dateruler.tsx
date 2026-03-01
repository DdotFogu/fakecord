type daterulerProps = {
  date : Date
};


function dateruler({date = new Date(2025, 6, 4)}: daterulerProps) {
  const month = date.toLocaleString('default', { month: 'long' });
  
  return (
    <>
    <div className="flex flex-row items-center justify-center gap-1 w-full">
      <hr className="w-full border-dark-2"/>
      <h1 className="text-white text-xs w-fit whitespace-nowrap">{month} {date.getDate()}, {date.getFullYear()}</h1>
      <hr className="w-full border-dark-2"/>
    </div>
    </>
  );
}

export default dateruler;
