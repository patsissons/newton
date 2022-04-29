import {Route, Routes} from 'react-router-dom';
import {Default} from 'sections';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Default />} />
    </Routes>
  );
}
