import { MemberEntityApi } from '@/core/models';
import { CardComponent } from '@/components/CardComponent';

export const ListComponent = (props: { members: MemberEntityApi[] }) => {
  const { members } = props;

  return (
    <section className='grid grid-flow-row-dense grid-rows-3 gap-3 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
      {members.map((member) => (
        <CardComponent
          {...member}
          key={member.id}
        />
      ))}
    </section>
  );
};
