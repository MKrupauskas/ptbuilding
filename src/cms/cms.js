import CMS from 'netlify-cms-app';
import Preview from '../components/Preview';

CMS.registerPreviewStyle('/styles/main.css');

CMS.registerPreviewTemplate('advanced', Preview);
CMS.registerPreviewTemplate('blog', Preview);
CMS.registerPreviewTemplate('page', Preview);
CMS.registerPreviewTemplate('post', Preview);
CMS.registerPreviewTemplate('portfolio', Preview);
