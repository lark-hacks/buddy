import "./Menubar.css";

export default function Menubar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menubar " + (menuOpen && "active")}>
            <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>
    )
}