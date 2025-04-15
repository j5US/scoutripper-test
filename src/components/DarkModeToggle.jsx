import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
// import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <button onClick={toggleDarkMode} className="cursor-pointer">
            {isDarkMode ? <HiOutlineSun className="text-[22px] text-accent-secondary"/> : <HiOutlineMoon className="text-xl text-header-main"/>}
        </button>
    );
}

export default DarkModeToggle;