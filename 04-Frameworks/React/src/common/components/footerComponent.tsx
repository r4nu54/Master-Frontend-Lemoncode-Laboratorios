import { PaginationComponent } from '@/pods/pagination';

export const FooterComponent: React.FC = () => {
  return (
    <footer className="flex justify-center items-center w-screen mb-3">
      <PaginationComponent />
    </footer>
  );
};
