import React,{useContext} from 'react'
import {Card,CardHeader,CardContent,Typography,Grid,Divider} from "@material-ui/core";
import useStyles from "./styles.js";
import Form from './Form/Form.js';
import List from './List/List.js';
import { ExpenseTrackerContext } from '../../context/Context.js';
import InfoCard from '../InfoCard.js';

const Main = () => {
    const classes=useStyles();
    const {balance}=useContext(ExpenseTrackerContext);
  return (
    <Card>
        {/* <CardHeader title="Expense Tracker" subheader="Powered By Speechly"/> */}
        <CardContent>
            <Typography align="center" variant="h5">Total Balance ₹{balance}</Typography>
            <Typography variant="subtitle1" style={{lineHeight:"1.5em",marginTop:"5px"}}>
               <InfoCard/>
            </Typography>
            <Divider />
            {/* Horizontal rule that divides the content at top from content at bottom */}
           <Form/>
        </CardContent>

        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List/>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default Main;