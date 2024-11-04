import type { PluginTarget, UIPlugin, UIPluginopts } from '@TestCypressPr/core'
import type {
  PublicProvideropts,
  TokenStorage,
} from '@TestCypressPr/companion-client'

interface Boxopts extends UIPluginopts, PublicProvideropts {
  target?: PluginTarget
  title?: string
  storage?: TokenStorage
}

declare class Box extends UIPlugin<Boxopts> {}

export default Box
