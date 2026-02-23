import { useUsers } from "../App";
import UserDetails from "../component/userdetails"
import MsgDetails from "../component/msgdetails"
import type { Msg } from "../App";

// TODO MAKE IT WHEN EDITING THE DETAILS ACUTALLY CHANGES THE USERS OBJECT
function Creator() {
  const { users, addUser, msgs, addMsg } = useUsers();

  return (
    <>
        <h1>Fakecord: Fake Discord Messages</h1>

        <div className="flex flex-row gap-4">
          {/* where user can create users */}
          <div>
            <h2>Users</h2>
            <div 
            id="user-list"
            className="flex flex-col gap-1"
            >
              {Object.entries(users).map(([id, user]) => (
                <UserDetails key={id} user={user}/>
              ))}
            </div> 

            <button
            onClick={addUser}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
            </button>
          </div>
          

          {/* where user can create messages */}
          <div>
            <h2>Messages</h2>
            <div 
            id="user-list"
            className="flex flex-col gap-1"
            >
              {msgs.map((msg : Msg) => (
                <MsgDetails key={msg.owner.id} msg={msg}/>
              ))}
            </div> 
            <button
              onClick={addMsg}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
            </button>
          </div>
        </div>
    </>
  )
}

export default Creator
