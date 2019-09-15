import React, { useState, useEffect } from 'react';
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
import axios from 'axios';
import Modal from "@material-ui/core/Modal";
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import RecipeImage from './logo192.png';
// import vision from '';

import { Input } from '@material-ui/core'

import get_images from './facebook';
import get_recipe from './recipes';
import { withStyles } from '@material-ui/styles';
// let quickstart = require('./cloud');


async function quickstart(gcsUri) {
  const vision = require('@google-cloud/vision');
  console.log(vision);
  const client = new vision.ImageAnnotatorClient();
  const [result] = await client.labelDetection(gcsUri);
  // const objects = result.localizedObjectAnnotations;
  const labels = result.labelAnnotations;
  console.log('Labels:');
  labels.forEach(label => console.log(label));
  return labels
}

class InstagramPost {
  constructor(Caption, ImageURL, id) {
    this.caption = Caption;
    this.imageURL = ImageURL;
    this.id = id;

  }
}

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

const styles = {
  icon: { 
    marginRight: '16px',
  },
  heroContent: {
    backgroundColor: '#fff',
    padding: '64px 0px 48px',
  },
  heroWrapper: {
    margin: 0,
    padding: 0,
  },
  heroButtons: {
    marginTop:  '32px',
  },
  cardGrid: {
    paddingTop:  '64px',
    paddingBottom:  '64px',
  },
  card: {
    //display: 'flex',
    //flexDirection: 'column',
    overflow: 'auto',
    overflowX: 'hidden',
    height: '400px',
    width: '300px',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: '#fff',
    padding: '48px',
  },
  toolBar: {
    backgroundColor: '#e64c25',
  },
  textField: {
    width: '100%',
  },
  modal: {
    display: 'flex',
    maxWidth: "50%",
    alignItems: 'center',
    justifyContent: 'center',
    overflow:'auto',
    marginLeft: "25%",
    // maxWidth: '60%'

  },
  paper: {
    backgroundColor: '#fff',
    border: '2px solid #000',
    boxShadow: "1",
    padding: "16px 32px 24px",
  },
};
class Label extends React.Component {
  constructor(){
    super();
    this.state = {
      recipeString: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      text: null
    }
    this.handleButtonOpen = this.handleButtonOpen.bind(this);

  }

  handleButtonOpen() {
    //click(true);
    console.log(this.props.recipe)
    this.setState({tagClicked: true,text: <p>{this.props.recipe}</p>});
    // console.log(recipeString);
  }


  
  render(){
    return(
    <div>
      <Button size="small" color="primary" onClick={this.handleButtonOpen}>
        {this.props.label}
      </Button>
      {this.state.text}
    </div>
    )
  }
  
}


  class Item extends React.Component {
    constructor(){
      super();
      this.state = {
        open: false,
        labels: [],
        recipes: []

      }
      this.handleOpen = this.handleOpen.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
      //setOpen(true);
      this.setState({open: true})
    };
  
    handleClose() {
      //setOpen(false);
      this.setState({open: false})
      //click(false);
      this.setState({tagClicked: false});
    };

    async getLabels() {
      var labelbois = await axios.get('http://localhost:4000/json?img=' + encodeURIComponent(this.props.post.imageURL))
      var recipes = []
      labelbois.data.map(async function(data) {
        let fuck = await get_recipe(data.description)
        recipes.push(fuck)
      })
      this.setState({labels: labelbois.data, recipes: recipes})
      
    }


    componentDidMount() {
      this.getLabels()
    }

    render() {
      return(
        <Grid item key={this.props.post.id} xs={12} sm={6} md={4}>
                    {/* {console.log("fuckkkk ")} */}
                    <Card className={styles.card} style={styles.card}>
                      <CardMedia
                        style={{height:0,paddingTop:'56.25%'}}
                        image={this.props.post.imageURL}
                        title="Image title"
                      />
                      <CardContent className={styles.cardContent} style={styles.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                        </Typography>
                        <Typography>
                          {this.props.post.caption}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary" onClick={this.handleOpen}>
                          View
                        </Button>
                        <Modal
                          aria-labelledby="transition-modal-title"
                          aria-describedby="transition-modal-description"
                          className={styles.modal}
                          style={styles.modal}
                          open={this.state.open}
                          onClose={this.handleClose}
                          closeAfterTransition
                          BackdropComponent={Backdrop}
                          BackdropProps={{
                            timeout: 500,
                            classes: {root: {'$backgroundColor': "rgba 0 0 0 0.05"}},
                          }}
                        >
                          <Fade in={this.state.open}>
                            <div className={styles.paper} style={styles.paper}>
                            <CardMedia
                            style={{height:0,paddingTop:'56.25%'}}
                            image={this.props.post.imageURL}
                            title="Image title"
                            />
                
                              <h2 id="recipe-title">Top Hits:</h2>
                              {this.state.labels.map((labelboi,i) => (
                                <Label label={labelboi.description} recipe={this.state.recipes[i]}/>
                              
                              ))
                              }
                            </div>
                          </Fade>
                        </Modal>
                      </CardActions>
                    </Card>
                  </Grid>
      )
    }

  }


 class Album extends React.Component{

  constructor() {
    super();
    this.state = {
      // classes: null,
      instagramPosts: [],
      hashtag: "chinesefood",
      currentInput: null,
      
    }

    this.handlePress = this.handlePress.bind(this);
    this.handleChange = this.handleChange.bind(this);


  }

  
 

  componentDidMount() {
    // const styles = useStyles();
    this.getImages(this.state.hashtag);

  }

  //const [open, setOpen] = React.useState(false);
  //const [tagClicked, click] = React.useState(false);


  //let tagClicked = false;
  //const [open, open2, setOpen, recipeOpen] = React.useState(false);


  

  

  async getImages(hashTag) {
    let r = await get_images(hashTag)
    let int = 1;
    var array = []
    r.data.forEach(jsonObject => {
      if(jsonObject.media_type === 'IMAGE') {
        array.push(new InstagramPost(jsonObject.caption, jsonObject.media_url, int))
        int++;
      }
    });
    this.setState({instagramPosts: array});
    console.log(this.state.instagramPosts);
  }
  /*
  useEffect(() => {
    function handleStatusChange(status) {
      updatePosts(posts);
    }

    // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  });
  */

  handleChange(e) {
    this.setState({ currentInput: e.target.value });
  }

  handlePress(event) {
    if (event.which === 13) {
      event.preventDefault();
      //render again
      this.setState({ hashtag: this.state.currentInput }, () => {
        this.getImages(this.state.hashtag);
      });
    }
  }

  render(){
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar className={styles.toolBar} style={styles.toolBar}>
            <LocalDiningIcon className={styles.icon} style={styles.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              Cook Me!
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={styles.heroWrapper} style={styles.heroWrapper}>
            <div className={styles.heroContent} style={styles.heroContent}>
              <Container maxWidth="sm">
                
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                  Cook Me!
                </Typography>
                
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  From picture to plate in seconds.
                </Typography>
                
                <Input
                    id="standard-search"
                    label="What are you craving?"
                    type="search"
                    className={styles.textField}
                    style={styles.textField}
                    margin="normal"
                    onKeyPress={this.handlePress}
                    onChange={this.handleChange}
                />
              </Container>
            </div>
          </div>
          <Container className={styles.cardGrid} maxWidth="md" style={styles.cardGrid}>
            {/* End hero unit */}
            <Grid container spacing={4}>

                {this.state.instagramPosts.map(instagramPost => (

                <Item post={instagramPost} />
                  
                ))}

            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <footer className={styles.footer} style={styles.footer}>
          <Copyright />
        </footer>
        {/* End footer */}
      </React.Fragment>
    )}
           
}

export default withStyles(styles)(Album);