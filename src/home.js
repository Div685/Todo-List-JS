import { initial } from 'lodash';
import navSection from './nav';
const content = document.getElementById('content');

const initialHomePage = () => {
  content.appendChild(navSection());
}

export default initialHomePage;