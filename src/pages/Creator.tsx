import '../styles/creator.css';

import { useUsers } from "../context/AppContext";
import { User, Msg, Server } from "../types";
import { Link } from "react-router-dom";

import UserDetails from "../components/creator/userdetails";
import MsgDetails from "../components/creator/msgdetails";
import ServerDetails from "../components/creator/serverdetails";

function Creator() {
  const { users, addUser, msgs, addMsg, servers, addServer} = useUsers();

  return (
    <>
      <div className="creator-wrapper">
        {/* where user can create users */}
        <div className="flex-column">
          <span className="flex-column users-div">
              {users.map((user: User) => {
                return (
                  <UserDetails key={users.indexOf(user)} userIdx={users.indexOf(user)} />
                );
              })}
          </span>

          <button
            onClick={addUser}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
          </button>
        </div>

        {/* where user can create messages */}
        <div className="flex-column">
          <span className="msgs-div flex-column">
            {msgs.map((msg : Msg) => (
              <MsgDetails key={msgs.indexOf(msg)} msgIdx={msgs.indexOf(msg)}/>
            ))}
          </span>
          <button
              onClick={() => {
                addMsg(new Msg(users[0]));
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
          </button>
        </div>

        {/* where user add server tabs */}
        <div className="flex-column">
          <span 
            className="flex-column servers-div"
          >
            {servers.map((server : Server) => (
              <ServerDetails key={servers.indexOf(server)} serverIdx={servers.indexOf(server)}/>
            ))}
          </span>
          <button
            onClick={addServer}
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
          </button> 
        </div>

        <Link to="/fakecord" 
          className="open-button"
        >
          Open Fakecord
        </Link>
      </div>
    </>
  )
}

export default Creator
