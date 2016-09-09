import { PLATFORMS_FETCH_SUCCESS } from './types';

export default function (state = [], action) {
  switch (action.type) {
    case PLATFORMS_FETCH_SUCCESS:
      return action.platforms;
    default:
      return state;
  }
}
