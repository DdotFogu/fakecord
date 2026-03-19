import { User } from "../../types";

type msgProps = { 
  owner : User 
  content : String 
  date : Date
  showUser: boolean
};

function msg({ owner, content, date, showUser = true}: msgProps) {
  return (
    <>
      <div className='msg-root' style={{marginTop : showUser ? 12 : 0}}>
        {showUser && 
          <img 
            src={owner ? owner.pfpUrl : ""}
            width={40}
            height={40}
            className='msg-pfp'
          />
        }

        <div className='msg-body'>
          {showUser && 
            <span className='msg-header'>
              <h1 className='msg-displayname'>{owner ? owner.displayname : "NO DISPLAY"}</h1>
              <h2 className='msg-timestamp'>{date.getDate()}/{date.getMonth()}/{date.getFullYear().toString().slice(2)}, {date.getHours() % 12 || 12}:{date.getMinutes().toString().padStart(2, '0')} {date.getHours() >= 12 ? 'PM' : 'AM'}</h2>
            </span>
          }
          <p style={{ marginLeft : !showUser ? 56 : 0}}>{content}</p>
        </div>
      </div>
    </>
  );
}

export default msg;