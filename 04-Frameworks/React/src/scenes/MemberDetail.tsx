import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMembersByLogin } from '@/core/api';
import { MemberDetailApi } from '@/core/models';
import { CardDetailComponent } from '@/components';
import { AppLayout } from '@/layouts/app.layout';

export const DetailPage: React.FC = () => {
  const { login } = useParams();

  const [memberDetail, setMemberDetail] = useState<MemberDetailApi>();
  useEffect(() => {
    if (!login) return;
    getMembersByLogin(login).then(setMemberDetail);
  }, []);

  return (
    <AppLayout>
      <CardDetailComponent {...memberDetail!} />
    </AppLayout>
  );
};
