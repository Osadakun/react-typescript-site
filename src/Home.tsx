import React from 'react';
import { Router } from './components/Router';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import './home.css';

function Home() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default Home;