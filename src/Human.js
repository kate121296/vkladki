import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    head:{
    border: '2px solid black',
    borderRadius: '50%',
    height: 50,
    width: 50,
    margin: '0 auto',
},
    bodyWrapper:{
    display: 'flex',
    justifyContent:' center',
},
leftArm:{
    border: '2px solid black',
    marginRight: 10,
    borderRadius: 10,
    width: 100,
    height: 2,
},
bodyman:{
    border: '2px solid black',
    width: 100,
    height: 200,
    borderRadius: 10,
},
bodyfemale:{
    border: '2px solid black',
    width: 100,
    height: 200,
    borderRadius: '50% 50%',
},
rightArm:{
    border: '2px solid black',
    marginLeft: 10,
    borderRadius: 10,
    width: 100,
    height: 2,
},
leftLeg:{
    border: '2px solid black',
    borderRadius: 10,
    width: 2,
    height: 100,
    marginRight: 20,
},
rightLeg:{
    border: '2px solid black',
    borderRadius: 10,
    width: 2,
    height: 100,
    marginLeft:20,
},
people: {
    display: 'flex',
    justifyContent: 'center',
}
}));
function Human({
    values={},
    isHumanVisible=false
}) {
    const classes = useStyles();
    return (
        <div className={classes.people}>
            {isHumanVisible && (
                <div className={classes.man}>
                    <div className={classes.head}/>
                    <div className={classes.bodyWrapper}>
                        <div className={classes.leftArm}/>
                        <div
                            className={values.sex === "Male" ? classes.bodyman : classes.bodyfemale}
                            style={{backgroundColor: values.color}}
                        />
                        <div className={classes.rightArm}/>
                    </div>
                    {values.isArmVisible && (
                        <div className={classes.bodyWrapper}>
                            <div className={classes.leftLeg}/>
                            <div className={classes.rightLeg}/>
                        </div>
                    )}
                </div>
            )}
        </div>

    );
}

export default Human;


