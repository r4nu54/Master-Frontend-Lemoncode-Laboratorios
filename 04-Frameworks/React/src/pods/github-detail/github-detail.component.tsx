import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AppLayout } from '@/layouts/app.layout';
import {
  getMembersByLogin,
  MemberDetailApi,
  GitHubCardDetailComponent,
  GitHubCardDetailSkeletonComponent,
} from '@/pods/github-detail';

export const DetailPage: React.FC = () => {
  const { login } = useParams();

  const [memberDetail, setMemberDetail] = useState<MemberDetailApi>();
  useEffect(() => {
    if (!login) return;
    getMembersByLogin(login).then(setMemberDetail);
  }, []);

  return (
    <AppLayout>
      <div>
        {!memberDetail ? <GitHubCardDetailSkeletonComponent /> : <GitHubCardDetailComponent {...memberDetail!} />}
      </div>
    </AppLayout>
  );
};
