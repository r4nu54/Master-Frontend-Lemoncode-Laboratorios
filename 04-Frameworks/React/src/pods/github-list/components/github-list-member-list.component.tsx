import { MemberEntityApi } from '@/pods/github-list/';
import { GitHubListMemberCardComponent } from '@/pods/github-list/';

export const GithubListMemberListComponent = (props: { members: MemberEntityApi[] }) => {
  const { members } = props;

  return (
    <section className="grid justify-items-center grid-rows-3 gap-3 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {members.map(member => (
        <GitHubListMemberCardComponent {...member} key={member.id} />
      ))}
    </section>
  );
};
