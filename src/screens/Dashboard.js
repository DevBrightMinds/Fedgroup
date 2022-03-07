import React, { useState, useEffect } from "react";

import Header from "../components/Header";
import { useSelector } from "react-redux";
import UserCards from "../components/UserCards";

const Dashboard = () => {
    const [mostCompleted, setMostCompleted] = useState([]);
    const [mostInComplete, setMostInComplete] = useState([]);

    const toDosList = useSelector(state => state.ToDosList);

    // when component loads, group todos by their user id
    // then get the total of each particular user
    useEffect(() => {
        let usersData = [];

        const grouped = toDosList.reduce((item, { completed, ...rest }) => ({
            ...item,
            [completed]: [...(item[completed] ?? []), { ...rest, completed }]
        }), {});

        const usersCompleted = grouped.true;
        const usersIncomplete = grouped.false;

        const completedToDosUsers = groupBy(usersCompleted, "userId");
        const inCompletedToDosUsers = groupBy(usersIncomplete, "userId");

        for (let item in completedToDosUsers) {
            if (completedToDosUsers.hasOwnProperty(item)) {
                usersData.push({
                    total: completedToDosUsers[item].length,
                    user: completedToDosUsers[item][0].userId,
                });
            }
        }

        setMostCompleted(usersData);

        usersData = [];

        for (let item in inCompletedToDosUsers) {
            if (inCompletedToDosUsers.hasOwnProperty(item)) {
                usersData.push({
                    total: inCompletedToDosUsers[item].length,
                    user: inCompletedToDosUsers[item][0].userId,
                });
            }
        }

        setMostInComplete(usersData);

    }, [])


    const groupBy = (array, key) => {
        return array.reduce((result, obj) => {
            (result[obj[key]] = result[obj[key]] || []).push(obj);
            return result;
        }, {});
    };

    return <>
        <div className="wrapper">
            <Header />

            <section>
                <div className="main-container">
                    <h4>Complete ToDos</h4>
                    <div className="incomplete-todos" style={{ width: "100%" }}>
                        <UserCards list={mostCompleted} />
                    </div>
                    <h4>In Complete ToDos</h4>
                    <div className="incomplete-todos" style={{ width: "100%" }}>
                        <UserCards list={mostInComplete} />
                    </div>
                </div>
            </section>

        </div>
    </>
}

export default Dashboard;