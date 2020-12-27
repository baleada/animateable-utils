import { configureable } from '@baleada/prepare'

const shared = configureable('rollup')
        .input('src/index.js'),
      esm = shared
        .delete({ targets: 'lib/*' })
        .esm({ file: 'lib/index.js', target: 'browser' })

export default [
  esm.configure()
]
