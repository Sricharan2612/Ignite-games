import React from "react";
// styled components and framer motion 
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";

import { popUp } from "../animation";

const Game = ({ name, released, image, id }) => {
    const stringPathId = id.toString();
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden';
        dispatch(loadDetail(id));
    };
    return (
        <StyledGame variants={popUp} initial='hidden' animate='show' layoutId={stringPathId} onClick={loadDetailHandler}>
            <Link to={`/games/${id}`} >
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <p>Release Date: {released}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={smallImage(image, 640)} alt={name} />
            </Link>
        </StyledGame >
    );
};

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    text-align: center;
    border-radius: 1rem;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.3);
    img{
        width: 100%;
        height: 80%;
        object-fit: cover;
    }
`;

export default Game;