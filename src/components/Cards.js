import * as React from "react";

const Header = (props) => {
    return <>
        {
            props.list.map((item, index) => {
                return <div key={index} className="to-do-card">
                    <div className="to-do-card-footer" style={{ display: item.completed ? "none" : "block" }}>
                        <button onClick={() => props.updateSelectedToDo(item)} className="btn btn-warning">Update</button>
                    </div>
                    <div className="to-do-card-body">
                        <small>
                            {item.title}
                        </small>
                    </div>
                </div>
            })
        }
    </>
}

export default Header;