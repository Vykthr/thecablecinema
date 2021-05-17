import React from 'react'
import { Container, Grid, Box, TextField, InputLabel, Select, MenuItem, Typography, Divider, Button, TextareaAutosize, Paper, Card } from '@material-ui/core'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel as SingleCarousel } from 'react-responsive-carousel';
import { CSSTransition } from 'react-transition-group';
import { Col, Form, Row } from 'react-bootstrap';
import { PRIMARY_COLOR, WHITE_COLOR, DARK_COLOR } from '../styles/colors';
import MovieCard from '../components/MovieCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Rating from '../components/Rating';

const Home = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    const responsiveMain = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    const movies = [
        { img: 'https://connectazure.filmhouseng.com/CDN/media/entity/get/FilmPosterGraphic/HO00000599?referenceScheme=HeadOffice&allowPlaceHolder=true', title: 'Prophetess', rating: 4.9, description: 'Ajoke, a local prophetess who makes a bogus prediction about a football match which sets off a chain of events beyond her control', mainGenre: 'Comedy', ageRating: '12A', year: '2021', duration: '1hr 41mins', trailer: 'qG_FVZYqjn8'},
    
        { img: 'https://connectazure.filmhouseng.com/CDN/media/entity/get/FilmPosterGraphic/HO00000590?referenceScheme=HeadOffice&allowPlaceHolder=true', title: 'The Therapist', rating: 4.4, description: 'The therapist is a story bordering around LOVE & WOMEN EMPOWERMENT. After losing everything in a divorce to her abusive ex-husband, a penniless and desperate Eloho', year: '2021', duration: '1hr 18mins', trailer: 'urQDfk7TKvo', mainGenre: 'Drama', ageRating: '18',},
    
        { img: 'https://connectazure.filmhouseng.com/CDN/media/entity/get/FilmPosterGraphic/HO00000589?referenceScheme=HeadOffice&allowPlaceHolder=true', title: 'Coming 2 America', rating: 4.8, description: 'The African monarch Akeem learns he has a long-lost son in the United States and must return to America to meet this unexpected heir and build a relationship with his son', year: '2021', duration: '1hr 10mins', trailer: 'x5lrkdvEZGg', mainGenre: 'Comedy', ageRating: '12A'},
    
        { img: 'https://connectazure.filmhouseng.com/CDN/media/entity/get/FilmPosterGraphic/HO00000576?referenceScheme=HeadOffice&allowPlaceHolder=true', title: 'Sanitation Day', rating: 3.9, description: 'A crime thriller like no other, Sanition Day tells the story of a compound of ‘face-me-I-face-you’ tenants when a dead body is found on their premises', year: '2021', duration: '1hr 05mins',  trailer: 'jqAtIIf5ZtU', mainGenre: 'Crime', ageRating: '15'},
    
        { img: 'https://connectazure.filmhouseng.com/CDN/media/entity/get/FilmPosterGraphic/HO00000588?referenceScheme=HeadOffice&allowPlaceHolder=true', title: 'Raya And The Last Dragon', rating: 3.5, description: 'In a realm known as Kumandra, a re-imagined Earth inhabited by an ancient civilization, a warrior named Raya is determined to find the last dragon.', year: '2021', duration: '1hr 10mins', trailer: 'QhPqez3CwiM', mainGenre: 'Animation', ageRating: 'PG',},
    
        { img: 'https://connectazure.filmhouseng.com/CDN/media/entity/get/FilmPosterGraphic/HO00000602?referenceScheme=HeadOffice&allowPlaceHolder=true', title: 'Breaded Life', rating: 2.3, description: 'An irresponsible young man in conflict with his mother wakes up one day and to his surprise, no-one he knows can recognize him, except for a local bread hawker', year: '2021', duration: '1hr 21mins',  trailer: 'BzD-jxnOf1o', mainGenre: 'Drama', ageRating: '15',},
    
        { img: 'https://connectazure.filmhouseng.com/CDN/media/entity/get/FilmPosterGraphic/HO00000598?referenceScheme=HeadOffice&allowPlaceHolder=true', title: 'John Carter', rating: 3.4, description: "MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe.", year: '2012', duration: '1hr 10mins', trailer: 'SB51-X2fiRs', mainGenre: 'Action', ageRating: '18',},
    ]
    const partners = [
        'https://upload.wikimedia.org/wikipedia/fr/f/f8/Canal%2B_Cin%C3%A9ma_2013.svg',
        'https://www.multichoice.com/images/logo.svg',
        'https://image.roku.com/w/rapid/images/rtv-hero-logo/3c98b820-d52b-473c-92a2-4309fd3b1aec.svg',
        'https://i0.wp.com/www.vanguardngr.com/wp-content/uploads/2019/11/NFVCB-Logo-1024x933.jpg?resize=768%2C700&ssl=1'
    ]
    return (
        <div style={{ backgroundColor: '#000'}}>
            <Carousel responsive={responsiveMain} autoPlaySpeed={5000} infinite={true} autoPlay={true} keyBoardControl={true}>
                {
                    movies.map((movie, key) => {
                        {
                            return (
                                <div key={key} className="item ca-item" style={{ backgroundImage: `url(${movie.img})` }}>
                                    <div className="overlay" style={{ height: '100%', position: 'absolute' }}>    
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                            <div className="slider">
                                                <Typography variant="h4">{movie.title}</Typography>
                                                <Typography variant="h6">{movie.description}</Typography>
                                                <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px' }}>
                                                    <Button variant="contained"
                                                        style={{ 
                                                            backgroundColor: PRIMARY_COLOR,
                                                            color: WHITE_COLOR, width: '48%',
                                                            height: '50px'
                                                        }}
                                                    >
                                                        Buy Ticket
                                                    </Button>
                                                    <Button variant="outlined"
                                                        style={{ 
                                                        borderColor: WHITE_COLOR,
                                                        color: WHITE_COLOR, width: '48%',
                                                        height: '50px'
                                                        }}
                                                    >
                                                        Watch Trailer
                                                    </Button>
                                                </Box>
                                            </div>
                                        </div>  
                                    </div>                  
                                </div>
                            )
                        }
                    })
                }
            </Carousel>
            
            
            <div style={{ backgroundColor: '#000', padding: '50px 0' }}>
                <Container>
                    <Typography variant="h3"
                        style={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            textAlign: 'center',
                            margin: '3rem auto',
                            color: WHITE_COLOR
                        }}
                        >
                        Now showing
                    </Typography>
                    <Row style={{ marginBottom: 0 }}>
                        <Col lg={4}>
                            <Paper elevation={20} variant="outlined" style={{ borderRadius: '20px' }}>
                                <img style={{ borderRadius: '20px' }} width="100%" src={movies[0].img} />
                            </Paper>
                        </Col>
                        <Col lg={8}className="star">
                            <Typography style={styles.weekInfo}>{movies[0].mainGenre}</Typography>
                            <Typography variant="h4" style={styles.weekTitle}>{movies[0].title}</Typography>
                            <Typography style={styles.weekInfo}>{movies[0].description}</Typography>
                            <Typography style={styles.weekInfo}>Rated: {movies[0].ageRating}</Typography>
                            <Typography style={styles.weekInfo}>Year: {movies[0].year}</Typography>
                            <Typography style={styles.weekInfo}>Duration {movies[0].duration}</Typography>
                            <Rating className="star" rate={movies[0].rating} />
                            <Box style={{ display: 'flex', justifyContent: 'space-between', marginTop: '25px' }}>
                                <Button variant="contained"
                                    style={{ 
                                        backgroundColor: PRIMARY_COLOR,
                                        color: WHITE_COLOR, width: '48%',
                                        height: '50px'
                                    }}
                                >
                                    Buy Ticket
                                </Button>
                                <Button variant="outlined"
                                    style={{ 
                                      borderColor: WHITE_COLOR,
                                      color: WHITE_COLOR, width: '48%',
                                      height: '50px'
                                    }}
                                >
                                    Watch Trailer
                                </Button>
                            </Box>
                        </Col>
                    </Row>
                </Container>
            </div>


            <div style={{ backgroundColor: '#000', padding: '50px 0', margin: '3rem 0 3rem' }}>
                <Divider style={{ backgroundColor: '#333' }} />
                <Container style={{ margin: '5rem auto' }}>
                    <Typography variant="h4"
                    className="pay-text"
                        style={{
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            textAlign: 'center',
                            margin: '3rem auto',
                            color: WHITE_COLOR
                        }}
                        >
                        Pay via USSD  - *431*ICU NUMBER*Amount#
                    </Typography>
                </Container>
            <Divider style={{ backgroundColor: '#333' }} />
            </div>

            <Container style={{ margin: 'auto auto 5rem' }}>

                <Typography variant="h3"
                    style={{
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        margin: '5rem auto 3rem',
                        color: "#FFF"
                    }}
                >
                    Showing this Week
                </Typography>
                <Row>
                    {
                        movies.map((movie, key) => {
                            { return (
                                <Col key={key} style={{ marginBottom: 30, cursor: 'pointer' }} xs={6} sm={'auto'} md={'auto'} lg={'auto'}>
                                
                                    <MovieCard movie={movie} /> 
                                </Col>
                                )
                            }
                        })
                    }

                </Row>
                <Divider />
            </Container>
            <Divider style={{ backgroundColor: '#333' }} />

            <Container style={{ margin: 'auto auto 5rem' }}>

                <Typography variant="h3"
                    style={{
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        margin: '5rem auto 3rem',
                        color: "#FFF"
                    }}
                >
                    Showing this Month
                </Typography>
                <Row>
                    {
                        movies.map((movie, key) => {
                            { return (
                                <Col key={key} style={{ marginBottom: 30, cursor: 'pointer' }} xs={6} sm={'auto'} md={'auto'} lg={'auto'}>
                                
                                    <MovieCard movie={movie} /> 
                                </Col>
                                )
                            }
                        })
                    }

                </Row>
                <Divider />
            </Container>
            <Divider style={{ backgroundColor: '#333' }} />


            <Container style={{ padding: '3rem 0 5rem' }}>
            
                <Typography variant="h3"
                    style={{
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        margin: '3rem auto 4rem',
                        color: "#FFF"
                    }}
                >
                    Coming Soon
                </Typography>
                <Carousel
                    responsive={responsive}
                    autoPlaySpeed={5000}
                    infinite={true}
                    autoPlay={true }
                    keyBoardControl={true}
                >
                    {
                        movies.map((movie, key) => {
                            { return (
                                <div key={key} style={{ margin: '0 .5rem', maxWidth: '250px'}}>
                                
                                    <MovieCard movie={movie} /> 
                                </div>
                                )
                            }
                        })
                    }
                </Carousel>


            </Container>

            <Divider style={{ backgroundColor: '#333' }} />
            
            <Container style={{ margin: '5rem auto' }}>
                <Typography variant="h3"
                    style={{
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        margin: '5rem auto 1rem',
                        color: "#FFF"
                    }}
                >
                    Partners
                </Typography>
                
                <Grid style={{ margin: '2rem 0', display: 'flex', justifyContent: 'space-between' }}>
                    {
                        partners.map((img, key) => {
                            return (
                                <img key={key} width={'15%'} style={{ margin: '0 1rem', objectFit: 'contain' }} height={'100px'} src={img} />
                            )
                        })
                    }
                </Grid>
            </Container>
                
            <Divider style={{ backgroundColor: '#333' }} />

            <Container style={{ margin: '5rem auto' }}>
                <Paper elevation={5} variant="outlined">
                    <Card style={{ backgroundColor: '#000' }}>
                        <Typography variant="h3"
                            style={{
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                textAlign: 'center',
                                margin: '3rem auto 1rem',
                                color: '#FFF'
                            }}
                        >
                            Contact Us
                        </Typography>

                        <Form style={{ width: '70%', margin: '0 auto 2rem', padding: '2rem 0' }}>
                            <Box style={styles.inputGrid}>
                                <InputLabel style={styles.inputLabel}>Name</InputLabel>
                                <TextField variant="outlined" style={{ width: '100%', backgroundColor: '#fff' }} />
                            </Box>
                            <Box style={styles.inputGrid}>
                                <InputLabel style={styles.inputLabel}>Email</InputLabel>
                                <TextField variant="outlined" style={{ width: '100%', backgroundColor: '#fff' }} />
                            </Box>
                            <Box style={styles.inputGrid}>
                                <InputLabel style={styles.inputLabel}>Message</InputLabel>
                                <TextareaAutosize rows={4} variant="outlined" style={{ width: '100%' }} />
                            </Box>
                            <Box style={styles.inputGrid}>
                                <Button style={{ height: 50, backgroundColor: 'brown', color: WHITE_COLOR }} fullWidth variant="contained" >Contact Us</Button>
                            </Box>
                        </Form>
                    </Card>     
                </Paper>
            </Container>

            <Divider style={{ backgroundColor: '#333' }} />

        </div>
    )
}

const styles = {
    inputLabel: {
        color: "#FFF",
        borderColor: "#FFF",
        fontSize: '14px',
        marginBottom: 10
    },
    inputGrid: {
        margin: '25px 25px 0',
    },
    weekTitle: {
        fontWeight: 'bold',
        color: '#ccc'
    },
    weekInfo: {
        color: '#ccc',
        fontSize: '16px',
        margin: '.9rem 0'

    }
}
export default Home
