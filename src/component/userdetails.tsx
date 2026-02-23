import { useUsers } from '../App';
import type { User } from '../App';

type detailProps = {
  user: User;
};

function UserDetails({user}: detailProps) {
    const { removeUser, setUserName, setUserDisplay, setUserPfpUrl} = useUsers();

    const displayName = user.displayName;
    const username = user.username;
    const pfpUrl = user.pfpUrl;
    const id = user.id;

    return (
    <>
    <div className='flex flex-row gap-4 border w-fit items-center'>
        <img 
        src={pfpUrl} 
        alt="User PFP"
        className='w-16 h-16 rounded-full '
        />

        <form className="">
            <label htmlFor="display">User Display:</label>
            <input 
            type="text" 
            name="display" 
            value={displayName}
            onChange={(e) => setUserDisplay(id, e.target.value)}
            />

            <br />

            <label htmlFor="user">User Username:</label>
            <input 
            type="text" 
            name="user" 
            value={username}
            onChange={(e) => setUserName(id, e.target.value)}
            />

            <br />  

            <label >User PFP:</label>
            <input 
                type="file" 
                name="image" 
                accept="image/png, image/jpeg, image/webp"
                onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                        const fileURL = URL.createObjectURL(e.target.files[0]);
                        setUserPfpUrl(id, fileURL);
                    }
                }}
            />
        </form>
        
        {user.removeabled && (
            <button
            onClick={() => removeUser(id)}
            >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
            </button>
        )}
    </div>
    </>
  )
}

export default UserDetails
