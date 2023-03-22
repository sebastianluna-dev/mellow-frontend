import { User as UserType } from "@/types"
import { User } from "./User"
import { useState } from "react"
import { AnimatePresence } from "framer-motion"

interface Props {
  usersData: UserType[]
}

export const Users = ({usersData}: Props) => {
  const [ users, setUser ] = useState(usersData)

  const deleteUser = (id:string) => {
    const arrayFiltered = users.filter(user => user.id !== id)
    //before updating the state you can do a delete request to the api with the userId
    //if the request got 200 status then you can update the state and if you got an error you can display an error message
    setUser(arrayFiltered)
  }
  return(
    <div className=" bg-orange-50 min-h-screen pt-20 px-4 sm:px-8 md:px-16 lg:px-24">
      <h1 className="text-7xl text-center mb-16">Usuarios</h1>
      <div className="grid max-w-6xl mx-auto gap-8">
        <AnimatePresence mode="popLayout">
          {
            users.map( user => (
              <User 
                key={user.id}
                user={user} 
                deleteUser={deleteUser}
              />
            ))
          }
        </AnimatePresence>
      </div>
    </div>
  )
}
