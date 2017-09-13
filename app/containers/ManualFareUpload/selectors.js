import { createSelector } from 'reselect';

/**
 * Direct selector to the manualFareUpload state domain
 */
const selectManualFareUploadDomain = () => (state) => state.get('manualFareUpload');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ManualFareUpload
 */

const makeSelectManualFareUpload = () => createSelector(
  selectManualFareUploadDomain(),
  (substate) => substate.toJS()
);

export default makeSelectManualFareUpload;
export {
  selectManualFareUploadDomain,
};
