import { SET_REDIRECT, REDIRECTING } from '../../components/login/constants';

export default function (state = null, action) {
  switch (action.type) {
    case REDIRECTING:
      return null;
    case SET_REDIRECT:
      return action.location;
    default:
      return state;
  }
}
