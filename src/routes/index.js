import AboutPage from '../pages/AboutPage';
import LandingPage from '../pages/LandingPage';
import NotFoundPage from '../pages/NotFoundPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';
import TermsAndConditionPage from '../pages/TermsAndConditionPage';
import FeaturePage from '../pages/FeaturePage.jsx';

export const clientSideRoutes = [
	{
		id: 1,
		title: 'LandingPage',
		path: '/',
		element: LandingPage,
	},
	{
		id: 2,
		title: 'AboutPage',
		path: '/about',
		element: AboutPage,
	},
	{
		id: 3,
		title: 'PrivacyPolicyPage',
		path: '/privacy-policy',
		element: PrivacyPolicyPage,
	},
	{
		id: 4,
		title: 'TermsAndConditionPage',
		path: '/terms-and-conditions',
		element: TermsAndConditionPage,
	},
	{
		id: 5,
		title: 'NotFoundPage',
		path: '/*',
		element: NotFoundPage,
	},
	{
		id: 5,
		title: 'FeaturePage',
		path: '/feature',
		element: FeaturePage,
	},
];
