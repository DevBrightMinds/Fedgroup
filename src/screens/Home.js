import $ from "jquery";
import Cards from "../components/Cards";
import Header from "../components/Header";
import React, { useState, useEffect } from "react";

import { useDispatch } from "react-redux";
import { addToDos } from "../redux/actions/actions";

const Home = () => {
    const dispatch = useDispatch();

    const [ToDos, setToDos] = useState([]);
    const [PendingToDos, setPendingToDos] = useState([]);
    const [CompletedToDos, setCompletedToDos] = useState([]);

    const [InComplete, setIncomplete] = useState(false);

    useEffect(() => {
        // on load of this component, fetch all todos
        getToDos();

    }, []);

    // fetch todos area
    const getToDos = () => {
        let toDos;
        let pendingToDos = [];
        let completedToDos = [];

        $("#feedback").html("loading . . .");

        try {
            fetch("https://jsonplaceholder.typicode.com/todos/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                body: null,
            })
                .then(response => response.json())
                .then(data => {
                    $("#feedback").html("");

                    // filter todos to only 50 and display on screen
                    if (data.length > 0) {
                        if (data.length > 50)
                            toDos = data.slice(0, 50);
                        else
                            toDos = data;

                        pendingToDos = toDos.filter(item => {
                            return (!item.completed);
                        });

                        completedToDos = toDos.filter(item => {
                            return (item.completed);
                        });

                        setToDos(toDos);
                        setPendingToDos(pendingToDos);
                        setCompletedToDos(completedToDos);

                        dispatch(addToDos(toDos));

                    }

                })
                .catch((error) => {
                    $("#feedback").html("");
                    $("#feedback").html("Oops: " + error.message);
                });
        } catch (error) {
            $("#feedback").html("");
            $("#feedback").html("Oops: " + error.message);
        }
    }

    // move incomplete todos that have been updated to complete state - to the completed todos list 
    const updateSelectedToDo = (todo) => {
        let pendingToDos = PendingToDos;

        if (pendingToDos.indexOf(todo) > -1) {
            pendingToDos.splice(pendingToDos.indexOf(todo), 1);

            todo.completed = true;

            setPendingToDos(pendingToDos);
            setCompletedToDos([...CompletedToDos, todo]);

        }
    }

    return <>

        <div className="wrapper">
            <Header />

            <section>
                <div className="main-container">
                    <div className="feedback">
                        <p id="feedback"></p>
                    </div>
                    <div className="to-do-content">
                        <h4>To Dos ({ToDos.length})</h4>

                        <div className="completed">
                            <h6>Completed ({CompletedToDos.length})</h6>

                            <div className="to-dos-cards">
                                <Cards updateSelectedToDo={updateSelectedToDo} list={CompletedToDos} />
                            </div>

                        </div>
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

export default Home;