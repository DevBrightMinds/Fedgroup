import * as React from "react";

const UsersCards = (props) => {
    return <>
        {
            props.list.map((user, index) => {
                return <div key={index} className="users-card" style={{ width: "30%", margin: 10 }}>
                    <div className="card-header">
                        User {user.user}
                    </div>
                    <div className="card-body">
                        Total: {user.total}
                    </div>
                </div>
            })
        }
    </>
}

export default UsersCards;