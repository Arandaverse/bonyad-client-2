import { ITypedData } from "@/types/web3/typedData.types";
import { JsonRpcSigner } from "@ethersproject/providers";
import { useChainId, useWallet } from "@thirdweb-dev/react";

export const useTypedDataSigner = () => {
  const walletInstance = useWallet();
  const primaryType = process.env.NEXT_PUBLIC__PROJECT_NAME;
  const chainId = useChainId();

  const signTypedData = async (
    message: ITypedData["message"]
  ): Promise<{ signature: string; typedData: ITypedData } | null> => {
    if (!chainId) return null;

    const signer = (await walletInstance?.getSigner()) as JsonRpcSigner;

    const typedData: ITypedData = {
      message,
      primaryType,
      domain: { name: primaryType, version: "1", chainId: chainId },
      types: {
        [primaryType]: Object.keys(message).map((key) => ({
          name: key,
          type: typeof message[key],
        })),
      },
    };

    const signature = await signer._signTypedData(
      typedData.domain,
      typedData.types,
      typedData.message
    );

    return {
      signature,
      typedData,
    };
  };

  return signTypedData;
};
