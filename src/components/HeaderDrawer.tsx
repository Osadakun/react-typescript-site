import React, { VFC } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
} from '@chakra-ui/react';
import EmailIcon from '@material-ui/icons/Email';
import InstagramIcon from '@material-ui/icons/Instagram'
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Button } from '@chakra-ui/button';

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickInformations: () => void;
  onClickWorks: () => void;
  onClickContact: () => void;
};

export const HeaderDrawer: VFC<Props> = (props) => {
  const { onClose, isOpen, onClickInformations, onClickHome, onClickWorks } = props;

  return (
    <Drawer placement='right' size='xs' onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody p={0} bg=''>
            <Button w='100%' onClick={onClickHome}>
              HOME
            </Button>
            <Button w='100%' onClick={onClickInformations}>
              INFORMATIONS
            </Button>
            <Button w='100%' onClick={onClickWorks}>
              WORKS
            </Button>
            <Button w='100%'>
                <EmailIcon
                    onClick={() => window.open('mailto:b1915053@planet.kanazawa-it.ac.jp', '_blank')}
                />
            </Button>
            <Button w='100%'>
                <GitHubIcon
                    onClick={() => window.open('https://github.com/Osadakun', '_blank')}
                />
            </Button>
            <Button w='100%'>
                <InstagramIcon
                    onClick={() => window.open('https://www.instagram.com/pstone_79/','_blank')}
                />
            </Button>
            <Button w='100%'>
                <TwitterIcon
                    onClick={() => window.open('https://twitter.com/pstone_000', '_blank')}
                />
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
