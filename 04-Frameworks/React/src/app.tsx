import { RouterComponent } from '@/core';
import { OrgProvider } from '@/core/providers/org-context';
import { MemberProvider } from '@/core/providers/member-context';

function App() {
  return (
    <OrgProvider>
      <MemberProvider>
        <RouterComponent />
      </MemberProvider>
    </OrgProvider>
  );
}

export default App;
