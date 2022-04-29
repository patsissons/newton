import {Frame as PolarisFrame} from '@shopify/polaris';
import {PropsWithChildren} from 'types';

import {AppNavigation, AppToasts} from './components';

export function AppFrame({children}: PropsWithChildren) {
  return (
    <PolarisFrame navigation={renderNavigation()}>
      {children}
      <AppToasts />
    </PolarisFrame>
  );

  function renderNavigation() {
    return <AppNavigation />;
  }
}
