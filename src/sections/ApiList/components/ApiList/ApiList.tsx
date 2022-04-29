import {useI18n} from '@shopify/react-i18n';
import React from 'react';
import {useLazyComponent} from 'hooks/lazy';

const ApiListPage = React.lazy(() => import('./ApiListPage'));

export function ApiList() {
  const [i18n] = useI18n();

  return useLazyComponent(<ApiListPage />, {
    title: i18n.translate('ApiLlist.title'),
  });
}
