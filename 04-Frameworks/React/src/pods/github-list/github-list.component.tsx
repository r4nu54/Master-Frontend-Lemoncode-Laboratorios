import { useContext } from 'react';
import { AppLayout } from '@/layouts/app.layout';
import { MemberContext } from '@/core/providers/member-context';
import { OrgContext } from '@/core/providers/org-context';
import { ErrorComponent } from '@/common/components';
import {
  GithubListFormComponent,
  GithubListMemberListComponent,
  GithubListSkeletonComponent
} from './components';

export const ListPage = () => {
  const { members, isLoading } = useContext(MemberContext);
  const { isError, orgName } = useContext(OrgContext);

  const renderContent = () => {
    if (isLoading) {
      return <GithubListSkeletonComponent />;
    }

    if (isError) {
      return (
        <ErrorComponent
          title="Organización no encontrada"
          message={`No se pudo encontrar la organización "${orgName}". Por favor, verifica el nombre e inténtalo de nuevo.`}
          onRetry={() => window.location.reload()}
        />
      );
    }

    return <GithubListMemberListComponent members={members} />;
  };

  return (
    <AppLayout>
      <GithubListFormComponent />
      {renderContent()}
    </AppLayout>
  );
};
