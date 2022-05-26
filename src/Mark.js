import React from "react";
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom';
import "./style.css";
import { useState, useEffect } from "react";


function Mark() {
    const [clicked, setClicked] = useState(false);
    const { day } = useParams();

    function onClick(event) {

        console.log(clicked)
        setClicked((value) => value = event.target.id)
    }

    useEffect(() => {
        ClickedCircle();
    }, [clicked]);


    function ClickedCircle() {
        for (let i = 1; i < 6; i++) {
            const temp = document.getElementById(i);

            if (i <= clicked) {
                temp.classList.add("clickedScore")

            } else {
                if (temp.classList.contains("clickedScore")) {
                    temp.classList.remove("clickedScore")
                }
            }
        }
    };
    return (
        <>
            <div className="App">
                <div className="Container2">
                    <h3>{day}요일 평점 남기기</h3>
                    <div className="Mark">
                        <div className="score" id={1} onClick={onClick}>
                        </div>
                        <div className="score" id={2} onClick={onClick}>
                        </div>
                        <div className="score" id={3} onClick={onClick}>
                        </div>
                        <div className="score" id={4} onClick={onClick}>
                        </div>
                        <div className="score" id={5} onClick={onClick}>
                        </div>                        
                    </div>
                    <Link to="/">
                        <button>평점남기기</button>
                    </Link>
                </div>
            </div>
        </>
    )
}


export default Mark;