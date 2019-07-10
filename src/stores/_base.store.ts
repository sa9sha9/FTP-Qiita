import { action, toJS, configure } from 'mobx';

// strict mode. see https://github.com/mobxjs/mobx/blob/gh-pages/docs/refguide/api.md#enforceactions
configure({ enforceActions: 'always' });

/**
 * Storeの共通処理(initializeなど)を持つclass。
 * かならずこのclassをextendしてStoreをつくる。
 *
 * 下記の記事のinitalState作成パターンを利用。
 * https://github.com/mobxjs/mobx/issues/814#issuecomment-446797155
 */
export default class BaseStore {
  _superInitialState: {
    [key: string]: any;
  } | null = null;

  /**
   * initialStateを保存しておくStore。必ずextendした各classのconstructorで呼ぶ。
   */
  @action.bound
  setInitialState() {
    this._superInitialState = toJS(this);
  }

  /**
   * stateをinitialStateに戻すaction
   */
  @action.bound
  reset() {
    if (!this._superInitialState) {
      console.warn('reset() does not work unless you call this.setInitialState() at the end of the constructor.');
      return;
    }

    const initialState = { ...this._superInitialState };
    for (const key in initialState) {
      if (!initialState.hasOwnProperty(key)) continue;
      if (key === '_superInitialState') continue;
      this[key] = initialState[key];
    }
  }
}
