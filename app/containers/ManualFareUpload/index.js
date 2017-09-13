/*
 *
 * ManualFareUpload
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { FormattedMessage } from 'react-intl';
import makeSelectManualFareUpload from './selectors';
import messages from './messages';
import Button from '../../components/Button';

export class ManualFareUpload extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="ManualFareUpload"
          meta={[
            { name: 'description', content: 'Description of ManualFareUpload' },
          ]}
        />
        <section>
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
          <p><span className="bold">135</span> manual flight offers live</p>
          <span className="smallerFont">last updated: 10 march 2017, 01:05pm</span>
          <div className="btnBox">
            <Button className="btn linkBtn" id="downloadTemplateBtn" value="Download Template" />
            <Button className="btn linkBtn" id="downloadCsvBtn" href="http://ukid.bluee.net/static/tt/abc.csv" value="Download CSV" />
            <Button className="btn linkBtn" id="uploadBtn" value="Upload" />
          </div>
        </section>
      </div>

    );
  }
}

ManualFareUpload.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  ManualFareUpload: makeSelectManualFareUpload(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManualFareUpload);
