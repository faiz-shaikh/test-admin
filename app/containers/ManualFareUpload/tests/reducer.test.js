
import { fromJS } from 'immutable';
import manualFareUploadReducer from '../reducer';

describe('manualFareUploadReducer', () => {
  it('returns the initial state', () => {
    expect(manualFareUploadReducer(undefined, {})).toEqual(fromJS({}));
  });
});
