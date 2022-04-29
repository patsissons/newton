import {Page, Layout, ResourceList} from '@shopify/polaris';
import {useI18n} from '@shopify/react-i18n';
import {alchmeyApis} from 'data/alchemy';
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {useToast} from 'utilities/toast';

import {ApiItem} from './components';

export default function ApiListPage() {
  const [i18n] = useI18n();
  const {state} = useLocation();
  const {show: showToast} = useToast();

  const stateError = hasStateError(state) && state.error;

  useEffect(() => {
    if (!stateError) {
      return;
    }

    showToast({
      content: stateError.toString(),
      error: true,
    });
  }, [showToast, stateError]);

  return (
    <Page title={i18n.translate('ApiLlist.title')}>
      <Layout sectioned>
        <ResourceList
          resourceName={{
            plural: i18n.translate('ApiLlist.ResourceList.plural'),
            singular: i18n.translate('ApiLlist.ResourceList.singular'),
          }}
          items={alchmeyApis}
          renderItem={ApiItem}
        />
      </Layout>
    </Page>
  );

  function hasStateError(state: unknown): state is {error: any} {
    return Boolean(state && typeof state === 'object' && 'error' in state);
  }
}
