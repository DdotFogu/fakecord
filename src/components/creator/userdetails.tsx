import '../../styles/creator.css';

import { useUser } from "../../hooks";

type detailProps = {
  userIdx: number;
};

function UserDetails({userIdx}: detailProps) {
    const user = useUser(userIdx)

    const displayName = user.getDisplay()   ;
    const username = user.getName();
    const pfpUrl = user.getPfp();
    const bio = user.getBio();
    const dateJoined = user.getShortDate();

    return (
    <span className='userdetails-wrapper'>
        <h1>{userIdx}</h1>
        <div className='details-list'>
            <input 
            type="file" 
            name="image" 
            accept="image/png, image/jpeg, image/webp"
            onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                    const fileURL = URL.createObjectURL(e.target.files[0]);
                    user.setPfp(fileURL);
                }
            }}
            className='hidden'
            id={"fileInput" + userIdx}
            />
            <label htmlFor={"fileInput" + userIdx}>
                <img 
                    src={pfpUrl} 
                    alt="User PFP"
                    className='user-pfp'
                />
            </label>
            
            <input
                type="datetime-local"
                value={dateJoined}
                onChange={(e) => {
                    const newDate = new Date(e.target.value);
                    user.setDate(newDate);
                }}
                className='custom-date-input'
            />

            <label htmlFor={'dmCheckbox' + userIdx}>add dm</label>
            <input 
                type='checkbox'
                id={'dmCheckbox' + userIdx}
                onChange={(e) => {
                    user.setDm(e.target.checked)
                }}
            />
        </div>

        <div className='input-list'>
            <span className='flex-row'>
                <input 
                    type="text" 
                    name="display" 
                    value={displayName}
                    onChange={(e) => user.setDisplay(e.target.value)}
                    className='text-input'
                    placeholder='Displayname'
                />
            </span>

            <span className='flex-row'>
                <input 
                    type="text" 
                    name="user" 
                    value={username}
                    onChange={(e) => user.setName(e.target.value)}
                    className='text-input'
                    placeholder='Username'
                />
            </span>

            <span>
                <textarea
                    rows={4}
                    maxLength={190}
                    value={bio}
                    onChange={(e) => user.setBio(e.target.value)}
                    className='text-input no-scrollbar'
                    placeholder='Bio'
                />
            </span>
        </div>
        
        {user.removeabled ? (
            <button
                onClick={() => user.remove()}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EA3323"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
            </button>
        ) : null}

    </span>
  )
}

export default UserDetails
