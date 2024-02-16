import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMembersByLogin } from './api';
import { MemberDetailApi } from './api';
import { CardDetailComponent } from './components';
import { AppLayout } from '@/layouts/app.layout';
import { CardDetailSkeletonComponent } from './components';

export const DetailPage: React.FC = () => {
  const { login } = useParams();

  const [memberDetail, setMemberDetail] = useState<MemberDetailApi>();
  useEffect(() => {
    if (!login) return;
    getMembersByLogin(login).then(setMemberDetail);
  }, []);

  return (
    <AppLayout>
      <div>{!memberDetail ? <CardDetailSkeletonComponent /> : <CardDetailComponent {...memberDetail!} />}</div>
    </AppLayout>
  );
};
