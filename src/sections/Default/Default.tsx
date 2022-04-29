import {Page, Layout, Card} from '@shopify/polaris';
import {useI18n} from '@shopify/react-i18n';

export function Default() {
  const [i18n] = useI18n();

  return (
    <Page
      title={i18n.translate('Default.Page.title')}
      subtitle={i18n.translate('Default.Page.subtitle')}
    >
      <Layout sectioned>
        <Card title={i18n.translate('Default.Card.title')} sectioned>
          <p>{i18n.translate('Default.description')}</p>
        </Card>
      </Layout>
    </Page>
  );
}
