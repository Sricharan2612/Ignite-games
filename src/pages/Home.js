import React, { useEffect } from "react";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

// styled components and framer motion 
import styled from "styled-components";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { fadeIn } from "../animation";
// Components
import Game from "../components/Game";
import GameDetails from "../components/GameDetails";

import { useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    const pathId = location.pathname.split('/')[2];
    //Fetch the games
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    //Getting the data back
    const { popular, newGames, upcoming, searched } = useSelector(data => data.games);
    return (
        <GameList variants={fadeIn} initial='hidden' animate='show'>
            <LayoutGroup type='crossfade'>
                <AnimatePresence>
                    {pathId && <GameDetails pathId={pathId} />}
                </AnimatePresence>
                {searched.length ? (
                    <div className="searched">
                        <h2>Searched games</h2>
                        <Games>
                            {searched.map(game => (
                                <Game name={game.name} released={game.released} image={game.background_image} id={game.id} key={game.id} />
                            ))}
                        </Games>
                    </div>
                ) : ''}
                <h2>Upcoming games</h2>
                <Games>
                    {upcoming.map(game => (
                        <Game name={game.name} released={game.released} image={game.background_image} id={game.id} key={game.id} />
                    ))}
                </Games>
                <h2>Popular games</h2>
                <Games>
                    {popular.map(game => (
                        <Game name={game.name} released={game.released} image={game.background_image} id={game.id} key={game.id} />
                    ))}
                </Games>
                <h2>New games</h2>
                <Games>
                    {newGames.map(game => (
                        <Game name={game.name} released={game.released} image={game.background_image} id={game.id} key={game.id} />
                    ))}
                </Games>
            </LayoutGroup>
        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0rem;
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
    
`;

export default Home;