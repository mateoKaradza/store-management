import LoginProvider from './LoginProvider';
import notAuthed from '../utils/notAuthed';

export default {
  path: 'login',
  component: notAuthed(LoginProvider),
};
