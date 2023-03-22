import { User as UserType, deleteUser } from "@/types"
import { motion } from "framer-motion"
import { CloseIcon } from "./Icons"

interface Props {
  user: UserType,
  deleteUser: deleteUser
}

export const User = ({user, deleteUser}: Props) => {

  const removeUser = () => {
    return() => deleteUser(user.id)
  }

  return(
    <motion.div 
      layout
      key={user.id}
      exit={{opacity: 0}}
      className="grid gap-4 bg-white shadow-lg p-2 rounded-2xl relative"
      style={{ gridTemplateColumns: "96px 1fr 48px"}}
    > 
      <img className="h-24 w-24 rounded-full object-cover" src={user.image} />
      <div>
        <p className="text-3xl font-light">{user.name}</p>
        <p className="text-lg font-light">{user.age} años</p>
      </div>
      <div className="h-9 w-9 p-2 ml-auto cursor-pointer" onClick={removeUser()}>
        <CloseIcon />
      </div>
    </motion.div>
  )
}