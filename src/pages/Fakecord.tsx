import { useUsers } from "../App";

function Fakecord() {
  const { users } = useUsers();

  return (
    <>
        <h1>Welcome to Fakecord!</h1>
    </>
  )
}

export default Fakecord
