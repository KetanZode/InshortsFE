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
        className="px-5 p-2 rounded-3xl shadow-sm shadow-slate-300 nav-theme bg-blue-600 text-white border-3"
      >
        {themes.map((t) => (
          <option key={t} value={t} className="">
            <div className="rounded-3xl">{t.split('Theme')}</div>
          </option>
        ))}
      </select>
    </div>
  );
}

export default ToggleTheme;
