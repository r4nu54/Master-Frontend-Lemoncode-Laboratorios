import { useContext, useEffect, useState } from 'react';

import { AppLayout } from '@/layouts/app.layout';
import { OrgContext } from '@/core/providers/org.context';

import { FormComponent } from '@/components/FormComponent';
import { CardComponent } from '@/components/CardComponent';

import { MemberEntity } from '@/core/models';

export const ListPage = () => {
  const [members, setMembers] = useState<MemberEntity[]>([]);

  const { orgName } = useContext(OrgContext);

  useEffect(() => {
    const getDatos = async () => {
      try {
        // const newData = await fetch('https://657b7dec394ca9e4af1467db.mockapi.io/members');
        const newData = await fetch(`https://api.github.com/orgs/${orgName}/members`);
        const response = await newData.json();
        setMembers(response);
      } catch (error) {
        console.log(error);
      }
    };
    getDatos();
  }, [orgName]);

  return (
    <AppLayout>
      <FormComponent />
      <section className='grid grid-flow-row-dense grid-rows-3 gap-3 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2'>
        {members.map((member) => (
          <CardComponent
            {...member}
            key={member.id}
          />
        ))}
      </section>
    </AppLayout>
  );
};
