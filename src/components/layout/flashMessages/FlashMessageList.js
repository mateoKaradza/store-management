import React, { PropTypes } from 'react';
import FlashMessage from './FlashMessage';

const FlashMessageList = ({ flashMessages, deleteFlashMessage }) => {
  const flashMessageList = flashMessages.map(message =>
    <FlashMessage key={message.id} message={message} deleteFlashMessage={deleteFlashMessage} />
  );

  return (
    <div className="row" style={{ marginTop: '10px' }}>
      {flashMessageList}
    </div>
  );
};

FlashMessageList.propTypes = {
  flashMessages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
};

export default FlashMessageList;
