import {Navigation} from '@shopify/polaris';
import {HomeMajor, ListMajor} from '@shopify/polaris-icons';
import {useI18n} from '@shopify/react-i18n';
import {alchmeyApis} from 'data/alchemy';
import {useLocation} from 'react-router-dom';

export function AppNavigation() {
  const {pathname} = useLocation();
  const [i18n] = useI18n();

  return (
    <Navigation location={pathname}>
      <Navigation.Section
        items={[
          {
            url: '/',
            label: i18n.translate('AppNavigation.home'),
            icon: HomeMajor,
            exactMatch: true,
          },
        ]}
      />
      <Navigation.Section
        items={[
          {
            url: '/api',
            label: i18n.translate('AppNavigation.apiList'),
            icon: ListMajor,
            exactMatch: true,
            subNavigationItems: alchmeyApis.map(({id}) => ({
              label: id,
              url: `/api/${id}`,
              exactMatch: true,
            })),
          },
        ]}
      />
    </Navigation>
  );
}
