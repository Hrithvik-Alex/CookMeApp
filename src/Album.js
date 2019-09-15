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

import TextField from '@material-ui/core/TextField';

import { Input } from '@material-ui/core'

import get_images from './facebook';
import { withStyles } from '@material-ui/styles';

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
};

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let instagramPosts = [];
let dataObject;
let r;

// getImages(hashtag);

 class Album extends React.Component{
  constructor() {
    super();
    this.state = {
      // classes: null,
      instagramPosts: [],
      hashtag: "food",
      currentInput: null,
    }

    this.handlePress = this.handlePress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // const styles = useStyles();
    this.getImages(this.state.hashtag);

  }

  componentDidUpdate() {

  }

  async getImages(hashTag) {
    r = await get_images(hashTag)
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


                  <Grid item key={instagramPost.id} xs={12} sm={6} md={4}>
                    {/* {console.log("fuckkkk ")} */}
                    <Card className={styles.card} style={styles.card}>
                      <CardMedia
                        style={{height:0,paddingTop:'56.25%'}}
                        image={instagramPost.imageURL}
                        title="Image title"
                      />
                      <CardContent className={styles.cardContent} style={styles.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                        </Typography>
                        <Typography>
                          {instagramPost.caption}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
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