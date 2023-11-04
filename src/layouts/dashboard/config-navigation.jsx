import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard',
    icon: icon('ic_dashboard'),
  },
  {
    title: 'customers',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'predict',
    path: '/predict',
    icon: icon('ic_analytics'),
  },
  {
    title: 'report',
    path: '/report',
    icon: icon('ic_report'),
  },
  {
    title: 'Bot',
    path: '/bot',
    icon: icon('ic_blog'),
  },
];

export default navConfig;
