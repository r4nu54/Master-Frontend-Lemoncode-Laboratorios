import React from 'react'
import { Link } from 'react-router-dom'

interface MemberEntity {
  id: string
  login: string
  avatar_url: string
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([])

  const orgs = 'Lemoncode'

  React.useEffect(() => {
    const fetchData = async (): Promise<void> => {
      // const data = await fetch(`https://api.github.com/orgs/${orgs}/members`)
      const data = await fetch('https://657b7dec394ca9e4af1467db.mockapi.io/members')
      const json = await data.json()
      setMembers(json)
    }

    fetchData().catch(error => console.log(error))
  }, [])

  return (
    <>
      <h2>List Users: {orgs}</h2>
      <div className='list-user-list-container'>
        <span className='list-header'>Avatar</span>
        <span className='list-header'>Id</span>
        <span className='list-header'>Name</span>
        {members.map(member => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
      <Link to='/detail'>Navigate to detail page</Link>
    </>
  )
}
