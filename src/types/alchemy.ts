export type ApiType = 'jsonrpc' | 'enhanced';

export interface ApiEndpoint {
  id: string;
  type: ApiType;
  description: string;
}
