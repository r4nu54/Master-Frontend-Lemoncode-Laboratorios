import { useContext, useEffect, useState } from 'react';
import { AppLayout } from '@/layouts/app.layout';
import { OrgContext } from '@/core/providers';
import { FormComponent, ListComponent } from '@/components';
import { MemberEntityApi } from '@/core/models';
import { getMembersByOrg } from '@/core/api/';

export const ListPage = () => {
  const [members, setMembers] = useState<MemberEntityApi[]>([]);

  const { orgName } = useContext(OrgContext);

  useEffect(() => {
    getMembersByOrg(orgName).then(setMembers);
  }, [orgName]);

  return (
    <AppLayout>
      <FormComponent />
      <ListComponent members={members} />
    </AppLayout>
  );
};
