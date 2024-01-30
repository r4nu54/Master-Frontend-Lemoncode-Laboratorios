import { RouterComponent } from '@/core';
import { OrgProvider } from './core/providers/org.context';

function App() {
  return (
    <OrgProvider>
      <RouterComponent />
    </OrgProvider>
  );
}

export default App;
