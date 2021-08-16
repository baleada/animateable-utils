import { configureable } from '@baleada/prepare'

const external = [
        '@baleada/logic',
      ],
      shared = new configureable.Rollup()
        .input('src/index.ts')
        .external(external)
        .resolve()
        .typescript(),
      esm = shared
        .delete({ targets: 'lib/*', verbose: true })
        .esm({ file: 'lib/index.js', target: 'browser' })
        .analyzer()
        .configure(),
      dts = new configureable.Rollup()
        .input('types/index.d.ts')
        .external(external)
        .output({ file: 'lib/index.d.ts', format: 'esm' })
        .dts()
        .configure()


export default [
  esm,
  dts,
]
