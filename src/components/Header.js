import * as React from "react";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
    const navigate = useNavigate();
    
    const toggleWindow = (name) => {
        switch (name) {
            case "home":
                navigate("../", { replace: true });
                break;
            case "incomplete":
                navigate("../incomplete", { replace: true });
                break;
            default:
                navigate("../dashboard", { replace: true });
                break;
        }
    }

    return <>
        <header>
            <div className="header-container">
                <div className="header-content">
                    <div className="app-name">
                        <h4>Fedgroup Project</h4>
                        <small>Treasure's assessment</small>
                    </div>
                    <div className="app-navi">
                        <button onClick={() => toggleWindow("home")} className="btn btn-warning">Home</button>
                        <button onClick={() => toggleWindow("incomplete")} className="btn btn-warning">InComplete</button>
                        <button onClick={() => toggleWindow("dashboard")} className="btn btn-warning">Dashboard</button>
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default Header;