import React, { useState, useEffect } from "react";

import Cards from "../components/Cards";
import Header from "../components/Header";
import { useSelector } from "react-redux";

const Completed = () => {
    const [PendingToDos, setPendingToDos] = useState([]);

    const toDosList = useSelector(state => state.ToDosList);

    // onload on this component - get todos list stored in redux state
    useEffect(() => {
        let newList = toDosList.filter(item => {
            return (!item.completed);
        });

        setPendingToDos(newList);

    }, []);

    const updateSelectedToDo = (todo) => {
        // we just going to alert the selected object
        alert(JSON.stringify(todo))
    }

    return <>
        <div className="wrapper">
            <Header />

            <section>
                <div className="main-container">
                    <div className="to-do-content">
                        <div className="pending">
                            <h6>Pending ({PendingToDos.length})</h6>

                            <div className="to-dos-cards">
                                <Cards updateSelectedToDo={updateSelectedToDo} list={PendingToDos} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
}

export default Completed;