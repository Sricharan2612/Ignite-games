// styled components and framer motion 
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { smallImage } from "../util";

// Images
import playstation from '../img/playstation.svg'
import xbox from '../img/xbox.svg'
import steam from '../img/steam.svg'
import nintendo from '../img/nintendo.svg'
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'

// Get Star Images
import fullStar from '../img/star-full.png'
import emptyStar from '../img/star-empty.png'

const GameDetails = ({pathId}) => {
    const navigate = useNavigate();
    const { screen, game, isLoading } = useSelector(state => state.detail);

    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';
            navigate('/');
        }
    };

    // Get Platform Images
    const getPlatformImages = (platform) => {
        switch (platform) { 
            case 'PlayStation 4':
                return playstation;
            case 'Xbox One':
                return xbox;
            case 'PC':
                return steam;
            case 'Nintendo Switch':
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad;
        }
    }
    
    // Get Star images for rating
    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img src={fullStar} alt='star' key={i} />);
            } else {
                stars.push(<img src={emptyStar} alt='star' key={i} />);
            }
        }
        return stars;
    };


    return (
        <>
            {!isLoading && (
                <CardShadow className="shadow" onClick={exitDetailHandler}>
                    <Detail layoutId={pathId}>
                        <Stats>
                            <div className="rating">
                                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                                <p>Rating: {game.rating}</p>
                                {getStars()}
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms.map((data) => (
                                        <img src={getPlatformImages(data.platform.name)} alt={data.platform.name} key={data.platform.id}  />
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt={game.background_image} />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screen.results.map((screen) => (
                                <img src={smallImage(screen.image, 1280)} alt={screen.image} key={screen.id} />
                            ))}
                        </div>
                    </Detail>
                </CardShadow>
            )}
        </>
    );
};

const CardShadow = styled(motion.div)`
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar{
        width: 0.4rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
        border-radius: 1rem;
    }
    &::-webkit-scrollbar-track{
        background-color: white;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 5rem;
    background: white;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width: 100%;
    }

`;

const Stats = styled(motion.div)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 2rem;
        height: 2rem;
        display: inline;
    }
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img{
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
        width: 100%;
    }
`;

const Description = styled(motion.div)`
    margin: 5rem 0rem;
`;

export default GameDetails;