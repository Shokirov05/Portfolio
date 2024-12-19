import React from "react";
import { FaTelegram, FaInstagram, FaGithub, FaLinkedin, FaEnvelope, FaDesktop, FaEdge, FaMobileAlt, FaRobot } from 'react-icons/fa'; 
import { useNavigate } from "react-router-dom";
import Photo from '../assets/images.png';
import "../scss/Home.scss";
import Skills from "./Skills";

const Home = ({ scrolled }) => {
  
  const navigate = useNavigate();
  return (
    <>
    <div className={`asosiy ${scrolled ? 'scrolled' : ''}`}>

       <div className="bola">
         <div className="home">
          <h1>I'm <br /><span>Muhammaddiyor Shokirov</span></h1>
          <p className="param">I'm Full Stact developer</p>
          <button onClick={() => navigate("/contact")}>Contact Me</button>
       </div>

        <div >
          <img src={Photo} alt="me Photo" className="rasm"/>
        </div>

      </div>


      <div className="contact">
        <a href="https://t.me/Const_p" target="_blank" rel="noopener noreferrer" className="linc">
          <FaTelegram />
        </a>
        <a href="https://www.instagram.com/shok.irov29" target="_blank" rel="noopener noreferrer" className="linc">
          <FaInstagram />
        </a>
        <a href="https://github.com/Shokirov05" target="_blank" rel="noopener noreferrer" className="linc">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/muhammaddiyor-shokirov-1b74992b2" target="_blank" rel="noopener noreferrer" className="linc">
          <FaLinkedin />
        </a>
        <a href="mailto:muhammaddiyorshokirov92@gmail.com" className="linc">
          <FaEnvelope />
        </a>
      </div>
    </div>


    <div className={`services ${scrolled ? 'scrolled' : ''}`}>
      <h2 style={{fontSize: "40px", margin: "30px 0" }}>Services</h2>

      <div className="content">

        <div className="flex">

      <section className="secti">
      <FaEdge />
        <h2>Web development</h2>
        <p>Web – bu ma'lumotlarni tez va oson ulashish, biznes va xizmatlarni targ'ib qilish, o'qitish va o'rganish, va global miqyosda muloqot qilish uchun kerak. Bu dunyo bilan bog'lanishning samarali va qulay usuli.</p>
      </section>

      <section className="secti">
      <FaDesktop />
        <h2>Web App development</h2>
        <p>Web ilova (Web App) – bu internet orqali ishlaydigan dasturiy ta'minot. U foydalanuvchilarga turli vazifalarni bajarishga yordam beradi, masalan, onlayn xarid qilish, bank xizmatlari yoki ijtimoiy tarmoqlarda muloqot qilish. Web ilovalar brauzer orqali ishlaydi va har qanday qurilmada foydalanish mumkin</p>
      </section>

      </div>

      <div className="flex">

      <section className="secti">
      <FaMobileAlt />
        <h2>App development</h2>
        <p>Ilova (App) – bu mobil yoki kompyuter qurilmalarida ishlaydigan dasturiy ta'minot. Ular turli vazifalarni bajarish uchun yaratilgan, masalan, o'yinlar, ijtimoiy tarmoqlar, sog'liqni saqlash, ta'lim va boshqalar. Ilovalar foydalanuvchilarga qulaylik va samaradorlikni oshirishga yordam beradi.</p>
      </section>

      <section className="secti">
      <FaRobot />
        <h2>Telegram Bot development</h2>
        <p>Telegram bot – bu Telegram messenjerida avtomatik ravishda ishlaydigan dastur. U turli vazifalarni bajaradi, masalan, xabar yuborish, ma'lumot qidirish yoki xizmat ko'rsatish. Botlar foydalanuvchilarga tezkor va oson muloqot qilish imkonini beradi.</p>
      </section>

      </div>

    </div>
    </div>


    <div className="recent_works">
    <section className="recent-works">
      <h2>The last job and the job or part that made me</h2>
      <div className="works-container">
        <div className="work-item">
          <img src="fonPhoto.jpg" alt="Work 1" />
          <h4 style={{fontSize: "20px"}}>JavaScript Work</h4>
          <p>Work 1 Description</p>
        </div>
        <div className="work-item">
          <img src="fonPhoto.jpg" alt="Work 2" />
          <h4 style={{fontSize: "20px"}}>React js</h4>
          <p>Work 2 Description</p>
        </div>
        <div className="work-item">
          <img src="fonPhoto.jpg" alt="Work 2" />
          <h4 style={{fontSize: "20px"}}>TypeScript Work</h4>
          <p>Work 3 Description</p>
        </div>
      </div>

    <div className="works-container">
        <div className="work-item">
          <img src="fonPhoto.jpg" alt="Work 1" />
          <h4 style={{fontSize: "20px"}}>Html Css</h4>
          <p>Work 4 Description</p>
        </div>
        <div className="work-item">
          <img src="fonPhoto.jpg" alt="Work 2" />
          <h4 style={{fontSize: "20px"}}>Graphql Work</h4>
          <p>Work 5 Description</p>
        </div>
        <div className="work-item">
          <img src="fonPhoto.jpg" alt="Work 2" />
          <h4 style={{fontSize: "20px"}}>Node js work</h4>
          <p>Work 6 Description</p>
        </div>
      </div>
    </section>
    </div>
    <div className="Skills">
    <Skills />
    </div>
    </>
  );
};

export default Home;
