import { useUsers, User } from '../App';

type detailProps = {
  user: User;
};

function UserDetails({user}: detailProps) {
    const { removeUser, setUserName, setUserDisplay, setUserPfpUrl, setUserDate, setUserBio, users, setUserDm } = useUsers();

    const displayName = user.displayname;
    const username = user.username;
    const pfpUrl = user.pfpUrl;
    const bio = user.bio;
    const dateJoined = user.dateJoined.toISOString().slice(0, 16);
    const dm = user.dm;
    const idx = users.indexOf(user);

    return (
    <span className='flex flex-row flex-1 gap-4 w-fit items-center border border-white p-2 rounded-2xl min-w-[506px]'>
        <h1 className='font-bold'>{idx}</h1>
        <div className='flex flex-col justify-center items-center'>
            <input 
            type="file" 
            name="image" 
            accept="image/png, image/jpeg, image/webp"
            onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                    const fileURL = URL.createObjectURL(e.target.files[0]);
                    setUserPfpUrl(idx, fileURL);
                }
            }}
            className='hidden'
            id={"fileInput" + idx}
            />
            <label htmlFor={"fileInput" + idx}>
                <img 
                    src={pfpUrl} 
                    alt="User PFP"
                    className='w-16 h-16 rounded-full border border-white'
                />
            </label>
            
            <input
                type="datetime-local"
                value={dateJoined}
                onChange={(e) => {
                    const newDate = new Date(e.target.value);
                    setUserDate(idx, newDate);
                }}
                className='custom-date-input'
            />

            <label htmlFor={'dmCheckbox' + idx}>add dm</label>
            <input 
                type='checkbox'
                id={'dmCheckbox' + idx}
                onChange={(e) => {
                    console.log(e.target.checked)
                    setUserDm(idx, e.target.checked)
                }}
            />
        </div>

        <div className='flex flex-col gap-2'>
            <span className='flex flex-row gap-1'>
                <input 
                    type="text" 
                    name="display" 
                    value={displayName}
                    onChange={(e) => setUserDisplay(idx, e.target.value)}
                    className='bg-gray-4 px-2 rounded-2xl border border-white'
                    placeholder='Displayname'
                />
            </span>

            <span className='flex flex-row gap-1'>
                <input 
                    type="text" 
                    name="user" 
                    value={username}
                    onChange={(e) => setUserName(idx, e.target.value)}
                    className='bg-gray-4 px-2 rounded-2xl border border-white'
                    placeholder='Username'
                />
            </span>

            <span>
                <textarea
                    rows={4}
                    maxLength={190}
                    name="display" 
                    value={bio}
                    onChange={(e) => setUserBio(idx, e.target.value)}
                    className='bg-gray-4 px-2 rounded-2xl border border-white no-scrollbar w-full'
                    placeholder='Bio'
                />
            </span>
        </div>
        
        {user.removeabled ? (
            <button
                onClick={() => removeUser(idx)}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
            </button>
        ) : null}

    </span>
  )
}

export default UserDetails
