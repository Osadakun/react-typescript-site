import React from 'react'
import Box from '@material-ui/core/Box'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    width: 730,
    maxWidth: '100%',
  },
});

const Informations: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Box p={2}>
        <Box display='flex' justifyContent='center' p={1} >
            Informations
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">
                About
              </Typography>
              <Typography color="textSecondary">
                学部3年 / バドミントンコーチ / 石川県
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">
                Hobby
              </Typography>
              <Typography color="textSecondary">
                スニーカー収集 / バドミントン / ドライブ
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">
                Skills
              </Typography>
              <Typography color="textSecondary">
                Python / React / Ruby / TypeScript / Docker / C* / Java* / JavaScript* / Go* / MySQL / PostgreSQL  (*は授業程度)
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">
                Interest
              </Typography>
              <Typography color="textSecondary">
                Heroku / LineBot / Arduino / RaspberryPI / AOJ / 自動化・可視化 / 組み込み
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display='flex' justifyContent='center' p={1} >
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h6">
                Qualifications
              </Typography>
              <Typography color="textSecondary">
                基本情報技術者(FE)
              </Typography>
            </CardContent>
          </Card>
        </Box>

      </Box>
    </>
  );
}

export default Informations;