import { CREATE_FLASH_MESSAGE, DELETE_FLASH_MESSAGE } from './constants';

export function createFlashMessage(message, id) {
  return { type: CREATE_FLASH_MESSAGE, message, id };
}

export function deleteFlashMessage(id) {
  return { type: DELETE_FLASH_MESSAGE, id };
}
