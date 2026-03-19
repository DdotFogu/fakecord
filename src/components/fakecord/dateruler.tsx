type daterulerProps = {
  date : Date
};


function dateruler({date = new Date(2025, 6, 4)}: daterulerProps) {
  const month = date.toLocaleString('default', { month: 'long' });
  
  return (
    <>
    <div className="date-ruler-root">
      <hr className="date-ruler"/>
      <h1 className="date-text">{month} {date.getDate()}, {date.getFullYear()}</h1>
      <hr className="date-ruler"/>
    </div>
    </>
  );
}

export default dateruler;
