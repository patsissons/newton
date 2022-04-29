import {AppContext} from 'foundation/AppContext';
import {AppFrame} from 'foundation/AppFrame';
import {AppRoutes} from 'foundation/AppRoutes';

export function App() {
  return (
    <AppContext>
      <AppFrame>
        <AppRoutes />
      </AppFrame>
    </AppContext>
  );
}
