import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle: React.FC = () => {
  // TODO: handle theme toggle logic
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <Sun className="text-foreground absolute size-4 scale-100 rotate-0 transform text-2xl opacity-100 transition-all duration-300 ease-in-out xl:size-5 dark:scale-0 dark:-rotate-90 dark:opacity-0" />
      <Moon className="text-foreground absolute size-4 scale-0 rotate-90 transform opacity-0 transition-all duration-300 ease-in-out xl:size-5 dark:scale-100 dark:rotate-0 dark:opacity-100" />
    </button>
  );
};

export default ThemeToggle;
