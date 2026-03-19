import '../../styles/creator.css';

import { useUsers } from "../../context/AppContext";
import { useMsg } from "../../hooks";
import { User } from "../../types";

type detailProps = {
  msgIdx: number;
};

function MsgDetails({msgIdx}: detailProps) {
    const { users } = useUsers();
    const msg = useMsg(msgIdx)

    const content = msg.getContent()
    const owner = msg.getOwner();
    const time = msg.getTime().toISOString().slice(0, 16);

    return (
    <>
    <div className='msgdetails-wrapper'>
        <span className='details-input'>
            <select
                value={users.indexOf(owner)}
                onChange={(e) => {
                    const selectedId = Number(e.target.value);
                    const owner = users[selectedId];
                    if (owner !== undefined) {
                        msg.setOwner(owner);
                    }
                }}
                className='user-select'
            >
                {users.map((user: User) => (
                    <option key={users.indexOf(user)} value={users.indexOf(user)}>
                        {user.getDisplay() ? user.getDisplay() : "no display"} / {user.getName() ? user.getName() : "no user"}
                    </option>
                ))}
            </select>

            <input
                type="datetime-local"
                value={time}
                onChange={(e) => {
                    const newTime = new Date(e.target.value);
                    msg.setTime(newTime);
                }}
                className='custom-date-input'
            />

            <button
                onClick={() => msg.remove()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
            </button>
        </span>
        
        
        <textarea
            rows={8}
            value={content}
            onChange={(e) => {
                msg.setContent(e.target.value);
            }}
            placeholder='Message Content'
            className='content-input no-scrollbar'
        />
    </div>
    </>
  )}

export default MsgDetails
