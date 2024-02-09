import { RouterComponent } from '@/core';
import { OrgProvider, MemberProvider } from './core/providers';

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
