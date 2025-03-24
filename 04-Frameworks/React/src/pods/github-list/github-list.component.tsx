import { useContext } from 'react';
import { AppLayout } from '@/layouts/app.layout';
import { MemberContext } from '@/core/providers/member-context';
import { OrgContext } from '@/core/providers/org-context';
import { GithubListFormComponent } from './components';
import { GithubListMemberListComponent } from './components';
import { ErrorComponent } from '@/common/components';

export const ListPage = () => {
  const { members } = useContext(MemberContext);
  const { isError, orgName } = useContext(OrgContext);

  return (
    <AppLayout>
      <GithubListFormComponent />
      {isError ? (
        <ErrorComponent
          title="Organización no encontrada"
          message={`No se pudo encontrar la organización "${orgName}". Por favor, verifica el nombre e inténtalo de nuevo.`}
          onRetry={() => window.location.reload()}
        />
      ) : (
        <GithubListMemberListComponent members={members} />
      )}
    </AppLayout>
  );
};
