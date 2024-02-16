import { useContext } from 'react';
import { AppLayout } from '@/layouts/app.layout';
import { MemberContext } from '@/core/providers/member-context';
import { FormComponent } from '@/common/components';
import { MemberListComponent } from './components';

export const ListPage = () => {
  const { members } = useContext(MemberContext);

  return (
    <AppLayout>
      <FormComponent />
      <MemberListComponent members={members} />
    </AppLayout>
  );
};
