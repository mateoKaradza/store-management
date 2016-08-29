import Home from './Home';
import requireAuth from '../utils/requireAuth';

export default {
  path: '/',
  component: requireAuth(Home),
};
