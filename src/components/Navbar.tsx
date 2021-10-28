import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const Navbar: React.FC = () => {
  return (
    <>
      <AppBar
        color='default'
        position='static'
        style={{ alignItems: 'center'}}
      >
        <Toolbar>
          <AnchorLink href='#INFORMATIONS' style={{
            textDecoration: 'none',
            color: 'inherit'
            }}>
            <Button color='inherit'>
              Informations
            </Button>
          </AnchorLink>
          <AnchorLink href='#CONTACT' style={{
            textDecoration: 'none',
            color: 'inherit'
            }}>
            <Button color='inherit'>
              Contact
            </Button>
          </AnchorLink>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;