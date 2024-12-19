import React from "react";
import photo from "../assets/images.png"
import { useNavigate } from "react-router-dom";
import '../scss/About.scss';


const About = () => {
  const navigate = useNavigate();

  return (
    <div className="aboutAsos">
      <div className="about-container">
      <div className="context">
        <h1>Hello Welcome</h1>
        <section>
          <h2>I'm <span>Muhammmaddiyor Shokirov</span></h2>
          <p>
            Men Muhammaddiyor Shokirov, O'zbekiston Respublikasi, Farg'ona viloyatidanman. 2005-yil 16-iyunda Farg'ona viloyatining Bog'dod tumanida tug'ilganman, va texnologiya olamiga bo'lgan qiziqishim shu yerda boshlandi.

            Dasturlashga bo'lgan qiziqishim 2020-yilda boshlandi, va 2022-yilda rasmiy ravishda dasturlash sohasiga kirdim. O'shandan beri turli texnologiyalarni o'rganishga va o'z bilimlarimni rivojlantirishga harakat qilaman.

            Yangi texnologiyalarni o'rganishga doimo intilishdaman. Mana, men biladigan ba'zi texnologiyalar:

            Frontend: JavaScript, TypeScript, React.js, HTML, CSS, SCSS, Sass, EJS, HBS
            Backend: Node.js, Express, Nest.js, Python, C++
            Ma'lumotlar bazalari: MongoDB, PostgreSQL, MySQL
            Dasturchi sifatida men har doim yangi chaqiriqlarga tayyorman va innovatsion yechimlar yaratishga intilaman. Texnologiya sohasida o'z mahoratimni oshirish va yangiliklarga hissa qo'shish niyatidaman!


          </p>
          <button onClick={() => navigate("/contact")}>Contact Me</button>
        </section>
      </div>
      <div className="image">
        <img src={photo} alt="Me Photo" />
      </div>
      </div>
    </div>
  );
};

export default About;
