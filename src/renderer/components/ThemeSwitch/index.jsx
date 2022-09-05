import { useEffect } from 'react';
import { useThemeContext } from '../../hooks/useThemeContext';
import '../../scss/theme-switch.scss';
import { BrightnessHighFill, MoonFill } from '../../utils/appIcons';

export default function ThemeSwitch() {
  const { darkMode, setDarkMode } = useThemeContext();

  /**
   *
   * @returns {Boolean} on basis of switch state, it return true, if dark mode is selected,
   *                    else returns false.
   */
  const switchTheme = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    /**
     * @description  set or unset the dark mode
     * */

    darkMode
      ? document.documentElement.setAttribute('darkMode', '')
      : document.documentElement.removeAttribute('darkMode', '');
  }, [darkMode]);

  return (
    <div id="theme-switch" className="me-3">
      <div className="switch-track">
        <div className="switch-check">
          <span className="switch-icon">
            <MoonFill />
          </span>
        </div>
        <div className="switch-x">
          <span className="switch-icon">
            <BrightnessHighFill />
          </span>
        </div>
        <div className="switch-thumb"></div>
      </div>

      <input
        type="checkbox"
        checked={darkMode}
        onChange={switchTheme}
        aria-label="Switch between dark and light mode"
      />
    </div>
  );
}
