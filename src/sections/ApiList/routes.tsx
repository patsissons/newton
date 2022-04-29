import {Route} from 'react-router-dom';

import {ApiDetails, ApiList} from './components';

export function useApiListRoutes() {
  return (
    <>
      <Route path=":api" element={<ApiDetails />} />
      <Route index element={<ApiList />} />
    </>
  );
}
