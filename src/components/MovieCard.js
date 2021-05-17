import { Box, Button, Card, Grid, Paper, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Row } from 'react-bootstrap'
import Rating from './Rating'
import ReactCardFlip from 'react-card-flip';
import { PRIMARY_COLOR, WHITE_COLOR } from '../styles/colors';

const MovieCard = ({ movie }) => {
    const [ isFlipped, setIsFlipped ] = useState(false)

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }
    return (
        <Paper elevation={3} variant="outlined">
            <Card style={{ height: '400px', backgroundColor: '#000' }}>
                <ReactCardFlip isFlipped={isFlipped} infinite>
                    <Row style={{ height: '400px',width: '250px' }} onClick={() => handleClick()}>
                        <Grid item style={{...styles.back, ...{ backgroundImage: `url(${movie.img})` }}}>
                            <div  className="overlay2">
                                <Grid item style={{ width: '100%' }}>
                                    <Typography style={{ ...styles.infoText, ...{ fontWeight: 'bold', color: PRIMARY_COLOR }}}>{movie.mainGenre}</Typography>
                                    <Typography align="center" style={{ fontWeight: 'bold' }}>{movie.title}</Typography>
                                    <Box style={{ display: 'flex'}}>
                                        <Typography style={styles.infoText} className="bod">
                                            {movie.duration}
                                        </Typography>
                                        <Typography style={styles.infoText} className="bod2">Rated {movie.ageRating}</Typography>
                                    </Box>
                                </Grid>
                            </div>
                        </Grid>
                    </Row>
                    
                    <Row style={{ height: '400px', width: '250px' }}>
                        <Grid item style={{...styles.back, ...{ backgroundImage: `url(${movie.img})` }}}>
                            <div className="overlay">
                                <div onClick={() => handleClick()} style={{ height: '100%' }}>
                                    <Typography style={{ ...styles.infoText, ...{ textAlign: 'left', paddingTop: '10px' }}}
                                    >
                                        {movie.description.substring(0, 200)}...
                                    </Typography>
                                    <Typography style={{ ...styles.infoText, ...{ marginTop: 5, textAlign: 'left'}}}>
                                        Rated - {movie.ageRating}
                                    </Typography>
                                    <Typography style={{ ...styles.infoText,  ...{ marginTop: 5, textAlign: 'left'}}}>
                                        Duration - {movie.duration}
                                    </Typography>
                                    <Typography style={{ ...styles.infoText,  ...{ marginTop: 5, textAlign: 'left'}}}>
                                        Today's viewing times <br />
                                        01:00PM, 05:30PM, 08:45PM
                                    </Typography>
                                    <Rating rate={movie.rating} />
                                </div>
                                <Button 
                                    style={{ 
                                        position: 'absolute', bottom: 70, left: 18, 
                                        width: '85%', borderColor: WHITE_COLOR,
                                        color: WHITE_COLOR, textTransform: 'capitalize'
                                    }}
                                    variant="outlined"
                                >
                                    Watch Trailer
                                </Button>
                                <Button 
                                    style={{ 
                                        position: 'absolute', bottom: 20, left: 18, 
                                        width: '85%', backgroundColor: PRIMARY_COLOR,
                                        color: WHITE_COLOR, textTransform: 'capitalize'
                                    }}
                                    variant="contained"
                                >
                                    Buy Ticket
                                </Button>
                            </div>
                        </Grid>
                    </Row>
                </ReactCardFlip>
            </Card>
        </Paper>
    )
}

const styles = {
    back: {
        width: '100%', height: '100%', 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    infoText: {
        fontSize: '12px',
        textAlign: 'center'
    }
}

export default MovieCard
