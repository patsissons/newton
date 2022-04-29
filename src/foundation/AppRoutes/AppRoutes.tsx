import {Route, Routes} from 'react-router-dom';
import {Default, useApiListRoutes} from 'sections';

export function AppRoutes() {
  const apiListRoutes = useApiListRoutes();

  return (
    <Routes>
      <Route path="api">{apiListRoutes}</Route>
      <Route path="*" element={<Default />} />
    </Routes>
  );
}
