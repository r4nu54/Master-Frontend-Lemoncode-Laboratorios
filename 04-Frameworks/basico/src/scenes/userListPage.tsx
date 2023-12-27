import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Card, CardHeader, CardContent, CardTitle, buttonVariants } from '@/components/ui';
import { routes } from '@/core';

import { AppLayout } from '@/layouts/app.layout';
import { OrgContext } from '@/core/providers/org.context';

interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
}

export const ListPage = () => {
  const [members, setMembers] = useState<MemberEntity[]>([]);
  const { orgName, setOrgName } = useContext(OrgContext);

  useEffect(() => {
    const getDatos = async () => {
      try {
        const newData = await fetch('https://657b7dec394ca9e4af1467db.mockapi.io/members');
        // fetch('https://api.github.com/orgs/lemoncode/members')
        const response = await newData.json();
        setMembers(response);
      } catch (error) {
        console.log(error);
      }
    };
    getDatos();
  }, []);

  return (
    <AppLayout>
      <header>
        <input
          defaultValue={orgName}
          onChange={(e) => setOrgName(e.target.value)}
          type='text'
          className='border-2 border-green-900 rounded-md p-2 '
        />
        <button></button>
        <div className='text-2xl font-semibold text-center p-3'>Listado de usuarios</div>
      </header>
      <main className='grid grid-flow-row-dense xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-rows-3 gap-3'>
        {members.map((member) => (
          <Card
            className='flex flex-col items-center w-[280px]'
            key={member.id}
          >
            <CardHeader>
              <img
                className='w-32 h-32 rounded-full border-4 border-green-900'
                src={member.avatar_url}
                alt={member.login}
              />
            </CardHeader>
            <CardContent className='flex flex-col items-center gap-1'>
              <CardTitle className='mb-2'>{member.login}</CardTitle>
              <Link
                className={buttonVariants({
                  size: 'lg',
                  className: 'bg-green-900 hover:bg-green-500 ',
                })}
                to={routes.details(member.login)}
              >
                Más info...
              </Link>
            </CardContent>
          </Card>
        ))}
      </main>
    </AppLayout>
  );
};
