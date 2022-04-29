import {alchmeyApis} from 'data/alchemy';
import {ApiEndpoint} from 'types';

export const docsUrlBase = 'https://docs.alchemy.com/alchemy/apis/ethereum';

export function getDocsUrl(api: string) {
  return [docsUrlBase, getApiUri()].join('/');

  function getApiUri() {
    switch (api) {
      case 'eth_blockNumber':
        return api.replace(/_/, '-').toLowerCase();
    }

    return api.toLowerCase();
  }
}

export function getApiEndpoint(api: string): ApiEndpoint | undefined {
  return alchmeyApis.find(({id}) => id === api);
}
