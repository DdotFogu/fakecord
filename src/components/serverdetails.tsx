import type { Server } from "../App";
import { useUsers } from "../App";

type detailProps = {
  server: Server;
};

function MsgDetails({server}: detailProps) {
    const { setServerPfpUrl, setServerName, removeServer, servers } = useUsers();
    
    const name = server.name
    const pfpUrl = server.pfpUrl;
    const idx = servers.indexOf(server)

    return (
    <>
    <div className='flex flex-row border rounded-2xl p-2 gap-2 justify-center items-center'>
        <input 
        type="file" 
        name="image" 
        accept="image/png, image/jpeg, image/webp"
        onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
                const fileURL = URL.createObjectURL(e.target.files[0]);
                setServerPfpUrl(idx, fileURL)
            }
        }}
        className='hidden'
        id={"serverFileInput" + idx}
        />
        
        <label htmlFor={"serverFileInput" + idx}>
            <img 
                src={pfpUrl} 
                alt="Server PFP"
                className='w-16 h-16 rounded-2xl '
            />
        </label>
        
        <input 
            type="text" 
            name="user" 
            value={name}
            onChange={(e) => {
                setServerName(idx, e.target.value);
            }}
            className='bg-gray-4 px-2 rounded-2xl border border-white h-fit'
            placeholder='Servername'
        />
        
        <button
            onClick={() => removeServer(idx)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
        </button>
    </div>
    </>
  )}

export default MsgDetails
