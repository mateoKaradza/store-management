import shortid from 'shortid';
import findIndex from 'lodash/findIndex';

import { CREATE_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from './types';

function deleteMessage(state, id) {
  const index = findIndex(state, { id });
  if (index >= 0) {
    return [
      ...state.slice(0, index),
      ...state.slice(index + 1),
    ];
  }
  return state;
}

export default (state = [], action = {}) => {
  switch (action.type) {
    case CREATE_FLASH_MESSAGE: // eslint-disable-line
      const messages = deleteMessage(state, action.id);
      return [
        ...messages,
        {
          id: action.id || shortid.generate(),
          text: action.message,
        },
      ];
    case DELETE_FLASH_MESSAGE:
      return deleteMessage(state, action.id);
    default:
      return state;
  }
};
