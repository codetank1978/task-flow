// components/ThemeSwitcher.js
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const themes = [
  { name: 'Cupcake', value: 'cupcake' },
  { name: 'Synthwave', value: 'synthwave' },
  { name: 'Aqua', value: 'aqua' },
];

export default function ThemeSwitcher() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost">
        Theme
      </label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        {themes.map((t) => (
          <li key={t.value}>
            <button 
              className={`btn btn-block ${theme === t.value ? 'btn-active' : ''}`}
              onClick={() => changeTheme(t.value)}
            >
              {t.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}