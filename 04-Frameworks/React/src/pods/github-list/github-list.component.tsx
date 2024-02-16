import { useContext } from 'react';
import { AppLayout } from '@/layouts/app.layout';
import { MemberContext } from '@/core/providers/member-context';
import { GithubListFormComponent } from './components';
import { GithubListMemberListComponent } from './components';

export const ListPage = () => {
  const { members } = useContext(MemberContext);

  return (
    <AppLayout>
      <GithubListFormComponent />
      <GithubListMemberListComponent members={members} />
    </AppLayout>
  );
};
