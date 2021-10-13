import { Theme, refs } from '../index';

export default function switchTheme(e) {
  if (refs.body.classList.contains(Theme.LIGHT)) {
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', Theme.DARK);
    localStorage.setItem('checked', true);
  } else {
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.LIGHT);
    refs.checkbox.removeAttribute('checked');
    localStorage.removeItem('checked');
  }
}
