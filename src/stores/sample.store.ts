import { action, observable } from 'mobx';
import BaseStore from './_base.store';

export class _SampleStore extends BaseStore {
  constructor() {
    super();
    super.setInitialState();
  }

  @observable
  stateValue: string = 'DEFAULT';

  @action('[Sample] Update Value')
  updateValue(newValue: string) {
    this.stateValue = newValue;
  }
}

export const SampleStore = new _SampleStore();
