import {useI18n} from '@shopify/react-i18n';
import React from 'react';
import {useLazyComponent} from 'hooks/lazy';

const ApiDetailsPage = React.lazy(() => import('./ApiDetailsPage'));

export function ApiDetails() {
  const [i18n] = useI18n();
  return useLazyComponent(<ApiDetailsPage />, {
    title: i18n.translate('ApiDetails.title'),
  });
}
