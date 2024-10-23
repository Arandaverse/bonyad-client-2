export interface ITypedData {
  types: Record<string, any>;
  primaryType: string;
  domain: {
    name: string;
    version: string;
    chainId: number;
  };
  message: Record<string, any>;
}
