import { RouterComponent } from '@/core';
import { OrgProvider } from '@/core/providers/org-context';
import { MemberProvider } from '@/core/providers/member-context';
import { PaginationProvider } from '@/core/providers/pagination-context';

function App() {
  return (
    <OrgProvider>
      <PaginationProvider>
        <MemberProvider>
          <RouterComponent />
        </MemberProvider>
      </PaginationProvider>
    </OrgProvider>
  );
}

export default App;
