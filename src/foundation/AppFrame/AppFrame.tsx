import {Frame as PolarisFrame} from '@shopify/polaris';
import {PropsWithChildren} from 'types';

import {AppToasts} from './components';

export function AppFrame({children}: PropsWithChildren) {
  return (
    <PolarisFrame>
      {children}
      <AppToasts />
    </PolarisFrame>
  );
}
