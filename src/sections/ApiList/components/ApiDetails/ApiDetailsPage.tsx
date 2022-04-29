import {Card, Layout, Page} from '@shopify/polaris';
import {Navigate, useParams} from 'react-router-dom';

import {useApiEndpoint} from './hooks';

export default function ApiDetailsPage() {
  const {api} = useParams();
  const apiEndpoint = useApiEndpoint(api);

  if (!apiEndpoint) {
    const error = api ? `${api} is not a valid API` : undefined;
    return <Navigate to="/api" replace state={error && {error}} />;
  }

  return (
    <Page>
      <Layout sectioned>
        <Card title={api} sectioned>
          <p>...</p>
        </Card>
      </Layout>
    </Page>
  );
}
