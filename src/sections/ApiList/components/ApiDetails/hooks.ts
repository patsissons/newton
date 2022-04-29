import {useMemo} from 'react';
import {getApiEndpoint} from 'utilities/alchemy';

export function useApiEndpoint(api?: string) {
  return useMemo(() => (api ? getApiEndpoint(api) : undefined), [api]);
}
