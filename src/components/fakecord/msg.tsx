import { User } from "../../App";

type msgProps = { 
  owner : User 
  content : String 
  date : Date
  showUser: boolean
};

function msg({ owner, content, date, showUser = true}: msgProps) {
  return (
    <>
      <div className='flex gap-4 wrap-anywhere' style={{marginTop : showUser ? 12 : 0}}>
        {showUser && 
          <img 
            src={owner ? owner.pfpUrl : ""}
            width={40}
            height={40}
            className='rounded-full shrink-0 w-10 h-10'
          />
        }

        <div className='flex flex-col text-white'>
          {showUser && 
            <span className='flex flex-row gap-2 items-baseline'>
              <h1 className='m-0 font-semibold'>{owner ? owner.displayname : "NO DISPLAY"}</h1>
              <h2 className='m-0 font-light text-xs wrap-break-word'>{date.getDate()}/{date.getMonth()}/{date.getFullYear().toString().slice(2)}, {date.getHours() % 12 || 12}:{date.getMinutes().toString().padStart(2, '0')} {date.getHours() >= 12 ? 'PM' : 'AM'}</h2>
            </span>
          }
          <p style={{ marginLeft : !showUser ? 56 : 0}}>{content}</p>
        </div>
      </div>
    </>
  );
}

export default msg;