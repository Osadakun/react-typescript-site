import React from 'react'
import "./assets/app.scss";
import Contact from './components/Contact'
import MyAvatar from './components/MyAvatar';
import Navbar from './components/Navbar'
import Informations from './components/Informations';

const Home: React.FC = () => {
  return (
    <>
      <header>
        <p className="greet">Welcome to Mypage</p>
        <section>
          <Navbar />
        </section>
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
      </ul>
      <section>
        <MyAvatar />
      </section>
      <section id='INFORMATIONS'>
        <Informations />
      </section>
      <section id='CONTACT'>
        <Contact />
      </section>
    </>
  );
}

export default Home;