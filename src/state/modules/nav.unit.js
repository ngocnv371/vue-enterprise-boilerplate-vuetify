import * as navModule from './nav'

describe('@state/modules/nav', () => {
  it('exports a valid Vuex module', () => {
    expect(navModule).toBeAVuexModule()
  })
})
