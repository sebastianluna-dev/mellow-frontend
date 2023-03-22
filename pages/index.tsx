import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { Users } from '@/components/Users'
import { User } from '@/types'

interface Props {
  users: User[]
}

const Home = ({users}: Props) => {
  return (
    <>
      <Head>
        <title>Frontend</title>
        <meta name="description" content="Test Frontend" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Users usersData={users} />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/users")
  const result = await res.json()
  return {
    props: {
      users: result
    }
  }
}

export default Home