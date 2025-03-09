import { useEffect, useState } from "react";

const themes = ["darkTheme", "lightTheme", "grayTheme"]; // Available themes

function ToggleTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || themes[0]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme); // Apply theme
    localStorage.setItem("theme", theme); // Save preference
    console.log("Current Theme:", theme);
  }, [theme]);

  return (
    <div>
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="p-2 rounded-3xl border border-gray-300 nav-theme bg-blue-600 text-theme"
      >
        {themes.map((t) => (
          <option key={t} value={t} className="rounded-3xl">
            {t.split('Theme')}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ToggleTheme;
