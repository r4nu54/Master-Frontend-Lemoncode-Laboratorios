import { useContext } from 'react';
import { AppLayout } from '@/layouts/app.layout';
import { MemberContext } from '@/core/providers/member-context';
import { OrgContext } from '@/core/providers/org-context';
import { GithubListFormComponent } from './components';
import { GithubListMemberListComponent } from './components';

export const ListPage = () => {
  const { members } = useContext(MemberContext);
  const { isError } = useContext(OrgContext);

  return (
    <AppLayout>
      <GithubListFormComponent />
      {isError ? 'Organizacion no existe' : <GithubListMemberListComponent members={members} />}
    </AppLayout>
  );
};
