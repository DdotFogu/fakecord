import { Msg, useUsers, User } from '../../App';

type detailProps = {
  msg: Msg;
};

function MsgDetails({msg}: detailProps) {
    const { users, msgs, removeMsg, setMsgContent, setMsgOwner, setMsgTime } = useUsers();
    
    const id = users.indexOf(msg.owner);

    // TODO RE-ADD THE NAME TAG FOR THE LABELS
    return (
    <>
    <div className='flex flex-col border rounded-2xl p-2 gap-2'>
        <span className='flex flex-row gap-2'>
            <select
                value={id}
                onChange={(e) => {
                    const selectedId = Number(e.target.value);
                    const owner = users[selectedId];
                    if (owner !== undefined) {
                        setMsgOwner(msgs.indexOf(msg), owner);
                    }
                }}
                className='bg-gray-4 px-2 rounded-2xl border border-white align-middle w-fit'
            >
                {users.map((user: User) => (
                    <option key={users.indexOf(user)} value={users.indexOf(user)}>
                        {user.displayname ? user.displayname : "no display"} / {user.username ? user.username : "no user"}
                    </option>
                ))}
            </select>

            <input
                type="datetime-local"
                value={msg.time.toISOString().slice(0, 16)}
                onChange={(e) => {
                    const newTime = new Date(e.target.value);
                    setMsgTime(msgs.indexOf(msg), newTime);
                }}
                className='custom-date-input w-fit'
            />

            <button
                onClick={() => removeMsg(msgs.indexOf(msg))}
                className='ml-auto'
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
            </button>
        </span>
        
        
        <textarea
            rows={8}
            value={msg.content}
            onChange={(e) => {
                setMsgContent(msgs.indexOf(msg), e.target.value);
            }}
            placeholder='Message Content'
            className='bg-gray-4 px-2 rounded-2xl border border-white no-scrollbar w-full'
        />
    </div>
    </>
  )}

export default MsgDetails
