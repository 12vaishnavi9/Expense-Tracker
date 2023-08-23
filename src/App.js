import React, { useEffect,useRef } from 'react';
import { Grid } from '@material-ui/core';
import Details from './components/Details/Details';
import Main from './components/Main/Main';
import useStyles from './styles';
// import { SpeechState, useSpeechContext } from "@speechly/react-client";
import "./index.css";

//get button for speechly
import { PushToTalkButton, PushToTalkButtonContainer} from '@speechly/react-ui';

const App = () => {
  const classes = useStyles();
  // const { speechState } = useSpeechContext();
  const main = useRef(null)

  // const executeScroll = () => main.current.scrollIntoView()    

  // useEffect(() => {
  //   if (speechState === SpeechState.Recording) {
  //     executeScroll();
  //   }
  // }, [speechState]);
  return (
    <>
  <div>
  <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh'}}>
        <Grid item xs={12} sm={4} className={classes.mobile}>
        {/* means on mobile it will be hidden */}
          <Details title="Income" />
        </Grid>
        <Grid 
        // ref={main}
         item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.last}>
          <Details title="Expense" />
        </Grid>
        <div style={{border:'1px solid black',height:'60px',marginTop:'40px'}}>

        </div>
        <PushToTalkButtonContainer>
        {/* Add a class to the PushToTalkButton to style it */}
        <PushToTalkButton />
      </PushToTalkButtonContainer>
        </Grid>
    </div>
    </>
  );
};

export default App;

