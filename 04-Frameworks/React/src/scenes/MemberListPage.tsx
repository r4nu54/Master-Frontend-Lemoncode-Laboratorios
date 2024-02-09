import { useContext } from 'react';
import { AppLayout } from '@/layouts/app.layout';
import { MemberContext } from '@/core/providers';
import { FormComponent, ListComponent } from '@/components';

export const ListPage = () => {
  const { members } = useContext(MemberContext);

  return (
    <AppLayout>
      <FormComponent />
      <ListComponent members={members} />
    </AppLayout>
  );
};
