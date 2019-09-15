import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import TextField from '@material-ui/core/TextField';

import Slide from '@material-ui/core/Slide';
import Modal from "@material-ui/core/Modal";
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import RecipeImage from '/Users/michaelqin/CookMeApp/src/logo192.png';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Cook Me!
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  toolBar: {
      backgroundColor: '#e64c25',
  },
  textField: {
    width: '100%',
  },
  modal: {
    display: 'flex',
    maxWidth: "60%",
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: "20%"

  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];


//   export default function RecipeInfo() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);
// }

export default function Album() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [tagClicked, click] = React.useState(false);

  //let tagClicked = false;
  //const [open, open2, setOpen, recipeOpen] = React.useState(false);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleButton = () => {
    click(true);
    console.log("clicked");
  }

  // const openRecipe = () => {
  //   //setOpen(false);
  //   recipeOpen(true);
  // };
  //
  // const closeRecipe = () => {
  //   recipeOpen(false);
  // };


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar className={classes.toolBar}>
          <LocalDiningIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Cook Me!
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Cook Me!
            </Typography>
            
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              From picture to plate in seconds.
            </Typography>
            
            <TextField
                id="standard-search"
                label="What are you craving?"
                type="search"
                className={classes.textField}
                margin="normal"
            />
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={handleOpen}>
                      View
                    </Button>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 500,
                        }}
                    >
                      <Fade in={open}>
                        <div className={classes.paper}>
                          <img src={RecipeImage} alt="Lasagna">
                          </img>
                          <h2 id="recipe-title">Recipes:</h2>
                          <p id="transition-modal-description">react-transiton-group animates me.</p>
                          <p>more tags</p>
                          <Button size="small" color="primary" onClick={handleButton}>
                            banana
                          </Button>

                          {tagClicked ? <h1>test</h1> : null}

                        </div>
                      </Fade>
                    </Modal>

                    {/*<Modal*/}
                    {/*    aria-labelledby="recipe-modal"*/}
                    {/*    aria-describedby="recipe-modal-description"*/}
                    {/*    className={classes.modal}*/}
                    {/*    open={false}*/}
                    {/*    onClose={closeRecipe}*/}
                    {/*    closeAfterTransition*/}
                    {/*    BackdropComponent={Backdrop}*/}
                    {/*    BackdropProps={{*/}
                    {/*      timeout: 500,*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*  <Fade in={open2}>*/}
                    {/*    <div className={classes.paper}>*/}
                    {/*      <img src={RecipeImage} alt="Lasagna">*/}
                    {/*      </img>*/}
                    {/*      <h2 id="recipe-title">Recipe</h2>*/}
                    {/*      <p id="recipe-modal-description">react-transiton-group animates me.</p>*/}
                    {/*      <p>more tags</p>*/}
                    {/*    </div>*/}
                    {/*  </Fade>*/}
                    {/*</Modal>*/}

                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}