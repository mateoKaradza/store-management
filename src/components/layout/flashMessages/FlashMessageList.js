import React, { PropTypes } from 'react';
import FlashMessage from './FlashMessage';

const FlashMessageList = ({ flashMessages, deleteFlashMessage }) => {
  const flashMessageList = flashMessages.map(message =>
    <FlashMessage key={message.id} message={message} deleteFlashMessage={deleteFlashMessage} />
  );

  if (flashMessages.length === 0)
    return null;

  return (
    <section className="content-header">
      {flashMessageList}
    </section>
  );
};

FlashMessageList.propTypes = {
  flashMessages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
};

export default FlashMessageList;
