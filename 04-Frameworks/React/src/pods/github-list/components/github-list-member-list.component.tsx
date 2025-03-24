import { MemberEntityApi } from '@/pods/github-list/';
import { GitHubListMemberCardComponent } from '@/pods/github-list/';
import { Typography } from '@mui/material';

export const GithubListMemberListComponent = (props: { members: MemberEntityApi[] }) => {
  const { members } = props;

  if (members.length === 0) {
    return (
      <Typography
        variant="body1"
        className="text-center mt-4"
        role="status"
        aria-label="No se encontraron miembros"
      >
        No hay miembros para mostrar
      </Typography>
    );
  }

  return (
    <section
      className="grid justify-items-center gap-4 p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      role="region"
      aria-label={`Lista de ${members.length} miembros`}
    >
      <div className="sr-only" role="status">
        {`Mostrando ${members.length} miembros`}
      </div>
      {members.map((member, index) => (
        <div
          key={member.id}
          role="article"
          aria-posinset={index + 1}
          aria-setsize={members.length}
        >
          <GitHubListMemberCardComponent {...member} />
        </div>
      ))}
    </section>
  );
};
