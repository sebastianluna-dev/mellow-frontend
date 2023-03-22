import type { NextApiRequest, NextApiResponse } from 'next'

const users = [
  {
    image: "/profile-picture-2.jpg",
    id: "esfs-grsv-rsrg-scrr",
    name: "Jonas Green",
    age: 27
  },
  {
    image: "/profile-picture-3.jpg",
    id: "ehyr-nhdc-hvju-sfht",
    name: "Taylor Swift",
    age: 32
  },
  {
    image: "/profile-picture-1.jpg",
    id: "cknj-cgbj-cgtd-bghr",
    name: "Sebastian Luna",
    age: 21
  }
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(users)
}