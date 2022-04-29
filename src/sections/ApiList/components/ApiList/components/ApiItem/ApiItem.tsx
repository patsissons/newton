import {
  Badge,
  BadgeStatusValue,
  Heading,
  Icon,
  ResourceItem,
  Stack,
} from '@shopify/polaris';
import {CirclePlusMajor, CircleTickMajor} from '@shopify/polaris-icons';
import {useI18n} from '@shopify/react-i18n';
import {getDocsUrl} from 'utilities/alchemy';
import {ApiEndpoint} from 'types';

export function ApiItem({id, type, description}: ApiEndpoint) {
  const [i18n] = useI18n();

  return (
    <ResourceItem
      id={id}
      url={`api/${id}`}
      accessibilityLabel={i18n.translate('ApiItem.label', {id})}
      media={mediaForType()}
      shortcutActions={[
        {
          content: i18n.translate('ApiItem.docsLink'),
          url: getDocsUrl(id),
          external: true,
          accessibilityLabel: i18n.translate('ApiItem.docsLabel', {id}),
        },
      ]}
      verticalAlignment="center"
    >
      <Stack vertical spacing="extraTight">
        <Stack>
          <Badge status={badgeStatus()}>{type}</Badge>
          <Heading>{id}</Heading>
        </Stack>
        <p>{description}</p>
      </Stack>
    </ResourceItem>
  );

  function mediaForType() {
    switch (type) {
      case 'enhanced':
        return <Icon source={CirclePlusMajor} color="success" />;
      default:
        return <Icon source={CircleTickMajor} color="subdued" />;
    }
  }

  function badgeStatus(): BadgeStatusValue {
    switch (type) {
      case 'enhanced':
        return BadgeStatusValue.Success;
      default:
        return BadgeStatusValue.New;
    }
  }
}
