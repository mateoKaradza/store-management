import { connect } from 'react-redux';

import { deleteFlashMessage } from './actions';
import FlashMessageList from './FlashMessageList';

function mapStateToProps({ flashMessages }) {
  return { flashMessages };
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessageList);
