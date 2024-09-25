import { DeployUniswapV3Action, type actions } from '@infinit-xyz/uniswap-v3/actions'
import type { z } from 'zod'

type Param = z.infer<typeof actions['init']['paramsSchema']>

// TODO: Replace with actual params
const params: Param = {
  // Native currency label (e.g., ETH)
  "nativeCurrencyLabel": 'ETH',

  // Address of the owner of the proxy admin
  "proxyAdminOwner": '0x67cfd663ffe3d0ef1662906e5dfc843c143eeb0f',

  // Address of the owner of factory
  "factoryOwner": '0x67cfd663ffe3d0ef1662906e5dfc843c143eeb0f',

  // Address of the wrapped native token (e.g., WETH)
  "wrappedNativeToken": '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
}

// Signer configuration
const signer = {
  "deployer": "samurai"
}

export default { params, signer, Action: DeployUniswapV3Action }
