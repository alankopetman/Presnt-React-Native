import {
  Login,
  Registration,
  Home,
} from '../Components';

const anonRoutes = () => ([
  {
    path: '/login',
    component: Login
  },
  {
    path: '/registration',
    component: Registration
  },
])

const authRoutes = () => ([
  {
    path: '/home',
    component: Home
  },
])

module.exports = {
  authRoutes,
  anonRoutes,
}
