import factory from './factory'
import slate from '../../packages/slate/package.json'
import slateBase64Serializer from '../../packages/slate-base64-serializer/package.json'
import slateDevEnvironment from '../../packages/slate-dev-environment/package.json'
import slateDevWarning from '../../packages/slate-dev-warning/package.json'
import slateHotkeys from '../../packages/slate-hotkeys/package.json'
import slateHtmlSerializer from '../../packages/slate-html-serializer/package.json'
import slateHyperscript from '../../packages/slate-hyperscript/package.json'
import slatePlainSerializer from '../../packages/slate-plain-serializer/package.json'
import slatePropTypes from '../../packages/slate-prop-types/package.json'
import slateReact41 from '../../packages/slate-react-41/package.json'
import slateSimulator from '../../packages/slate-simulator/package.json'

const configurations = [
  ...factory(slate),
  ...factory(slateBase64Serializer),
  ...factory(slateDevEnvironment),
  ...factory(slateDevWarning),
  ...factory(slateHotkeys),
  ...factory(slateHtmlSerializer),
  ...factory(slateHyperscript),
  ...factory(slatePlainSerializer),
  ...factory(slatePropTypes),
  ...factory(slateReact41),
  ...factory(slateSimulator),
]

export default configurations
