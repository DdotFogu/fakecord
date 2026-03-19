import { useServer } from "../../hooks";

type detailProps = {
  serverIdx: number;
};

function MsgDetails({serverIdx}: detailProps) {
    const server = useServer(serverIdx);

    const name = server.getName();
    const pfp = server.getPfp();

    return (
    <>
    <div className='serverdetails-wrapper'>
        <input 
        type="file" 
        name="image" 
        accept="image/png, image/jpeg, image/webp"
        onChange={(e) => {
            if (e.target.files && e.target.files[0]) {
                const fileURL = URL.createObjectURL(e.target.files[0]);
                server.setPfp(fileURL)
            }
        }}
        className='pfp-file-input'
        id={"serverFileInput" + serverIdx}
        />
        
        <label htmlFor={"serverFileInput" + serverIdx}>
            <img 
                src={pfp} 
                alt="Server PFP"
                className='server-pfp'
            />
        </label>
        
        <input 
            type="text" 
            name="user" 
            value={name}
            onChange={(e) => {
                server.setName(e.target.value);
            }}
            className='server-name-input'
            placeholder='Servername'
        />
        
        <button
            onClick={() => server.remove()}
        >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
        </button>
    </div>
    </>
  )}

export default MsgDetails
