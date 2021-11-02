import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import "../assets/myavatar.scss";
import icon from '../static/images/icon.jpg'
import myphoto from '../static/images/me.jpg'
import sneakers from '../static/images/sneakers.jpg'

const useStyles = makeStyles((theme) => ({
  // 表示サイズを指定
  large: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  small: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

const MyAvatar: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <div className='icons'>
        <Box p={6} >
          <Avatar
            alt='Toshiki Ono'
            src={sneakers}
            className={classes.small}
          />
        </Box>
        <Box display='flex' justifyContent='center' p={2} >
          <Avatar
            alt='Toshiki Ono'
            src={myphoto}
            className={classes.large}
          />
        </Box>
        <Box p={6} >
          <Avatar
            alt='Toshiki Ono'
            src={icon}
            className={classes.small}
          />
        </Box>
      </div>
        <Box display='flex' justifyContent='center' p={1} >
          <Typography variant='h4' >
            小野 紀輝(Ono Toshiki)
          </Typography>
        </Box>
    </div>
  );
}

export default MyAvatar;