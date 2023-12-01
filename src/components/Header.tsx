import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setMode } from "../redux/mode-slice";
import book from "../img/icons8-dictionary-48.png";
import lightIcon from "../img/light-icon.png";
import darkIcon from "../img/dark-icon.png";

export default function Header() {
    const modeType = useAppSelector(state => state.mode);
    const dispatch = useAppDispatch();
    
    function handleModeBtn() {
        dispatch(setMode());
    }
    const btnIcon = modeType.mode === "dark" ? lightIcon : darkIcon;

    return (
        <div className={`header ${modeType.mode}-mode`}>
            <img src={book} />
            <button onClick={handleModeBtn} className={`btn ${modeType.mode}-modeForBtnMode`}><img alt="" src={btnIcon} /></button>
        </div>
    )
}