import React from 'react';
import "./style.css";
import styled from "styled-components"
import { Link } from 'react-router-dom';

const CircleDiv = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 5px;
    background-color: ${(props) => (props.rand >= props.id ? "yellow" : "gray")
    };`

const Day = (props) => {
    console.log(props)

    return (
        <>
            <div className='Day'>
                <p>{props.day}</p>
                <CircleDiv id={1} rand={props.rand}>
                </CircleDiv>
                <CircleDiv id={2} rand={props.rand}>
                </CircleDiv>
                <CircleDiv id={3} rand={props.rand}>
                </CircleDiv>
                <CircleDiv id={4} rand={props.rand}>
                </CircleDiv>
                <CircleDiv id={5} rand={props.rand}>
                </CircleDiv>
                <Link to={`/Mark/${props.day}`}>
                    <div className='Go'>
                    </div>
                </Link>
            </div>
        </>
    );
}


export default Day;