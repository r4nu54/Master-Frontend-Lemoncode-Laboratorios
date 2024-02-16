import { HeaderComponent, FooterComponent } from '@/common/components';
import { useParams } from 'react-router-dom';

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { login } = useParams();
  return (
    <>
      <HeaderComponent />
      <main className="p-2">{children}</main>
      {login ? '' : <FooterComponent />}{' '}
    </>
  );
};
