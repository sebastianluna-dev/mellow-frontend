export interface User {
  image: string,
  id: string,
  name: string,
  age: number
}

export type deleteUser = (id:string) => void