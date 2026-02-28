import type { User } from '../App'; 

type msgProps = { 
  owner : User 
  content : String 
  date : Date 
};

function msg({ owner, content, date }: msgProps) {
  return (
    <>
      <div className='flex my-2 justify-start items-center gap-4'>
        <img 
          src={owner.pfpUrl}
          width={40}
          height={40}
          className='rounded-full shrink-0 w-10 h-10'
        />

        <div className='flex flex-col text-white'>
          <div className='flex flex-row gap-2 items-baseline'>
            <h1 className='m-0 font-semibold'>{owner.displayname}</h1>
            <h2 className='m-0 font-light text-xs'>{date.getHours() % 12 || 12}:{date.getMinutes().toString().padStart(2, '0')} {date.getHours() >= 12 ? 'PM' : 'AM'}</h2>
          </div>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}

export default msg;