import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme =>({
    root: {
        padding: theme.spacing(3, 2),
        width:'30%',
        overflowY:'auto',
    },
    card: {
        maxWidth: 345,
        width: '100%',
    },
    media: {
        height: 140,
    },
}));
function Cards({
   values={}
}) {
    const classes = useStyles();
    const image = values.image;
    const title = values.title;
    const description = values.description;
    const link = values.link;
    return (
        <Paper className={classes.root}>
            <Card className={classes.card} >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                        <a href={link}>{link}</a>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Paper>
    );
}

export default Cards;


