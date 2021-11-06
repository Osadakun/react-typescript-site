import { Button, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";

export const Card = () => {
    const classes = useStyles();

    return (
      <div className={classes.main}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="イメージパス"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                タイトル
            </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                説明
            </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
          </Button>
            <Button size="small" color="primary">
              Learn More
          </Button>
          </CardActions>
        </Card>
      </div>
    );
  }

function useStyles() {
    throw new Error("Function not implemented.");
}
