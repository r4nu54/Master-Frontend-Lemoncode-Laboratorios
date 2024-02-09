import { HeaderComponent, FooterComponent } from '@/components';

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      <main className="p-5">{children}</main>
      <FooterComponent />
    </>
  );
};
