import { Page } from '../../components/page'
import { Root } from '../../pages/root'
import { RouteIndex } from './types'

export const routes: RouteIndex = {
  root: {
    path: '/',
    element: (
      <Page title="{{project_name}}">
        <Root />
      </Page>
    ),
  },
}
