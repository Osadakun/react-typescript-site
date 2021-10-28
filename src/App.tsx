import React from 'react'
import "./assets/app.scss";
import Contact from './components/Contact'
import MyAvatar from './components/MyAvatar';
import Informations from './components/Informations';
import ScrollUp from './components/Scrollup';

const Home: React.FC = () => {
  return (
    <>
      <header>
        <p className="greet">Welcome to Mypage!!</p>
      </header>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
      </ul>
      <section>
        <MyAvatar />
      </section>
      <section id='informations'>
        <Informations />
      </section>
      <section id='contact'>
        <Contact />
      </section>
      <ScrollUp />
    </>
  );
}

export default Home;