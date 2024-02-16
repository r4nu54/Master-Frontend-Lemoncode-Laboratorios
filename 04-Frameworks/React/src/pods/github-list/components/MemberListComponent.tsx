import { MemberEntityApi } from '../api';
import { CardListComponent } from './index';

export const MemberListComponent = (props: { members: MemberEntityApi[] }) => {
  const { members } = props;

  return (
    <section className="grid grid-flow-row-dense justify-items-center grid-rows-3 gap-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2">
      {members.map(member => (
        <CardListComponent {...member} key={member.id} />
      ))}
    </section>
  );
};
