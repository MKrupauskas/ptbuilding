import CMS from 'netlify-cms-app';
import Preview from '../components/Preview';

CMS.registerPreviewStyle('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400;1,700&display=swap');
CMS.registerPreviewStyle('/styles/main.css');

CMS.registerPreviewTemplate('advanced', Preview);
CMS.registerPreviewTemplate('blog', Preview);
CMS.registerPreviewTemplate('page', Preview);
CMS.registerPreviewTemplate('post', Preview);
CMS.registerPreviewTemplate('portfolio', Preview);
