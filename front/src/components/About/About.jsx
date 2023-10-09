import miImagen from '../../img/img1.png';
import styles from './About.module.css';

function About() {
  return (
    <div className={styles.container}>
        <div className={styles.bg5h}>
            <h2 className={styles.animatedShadow}>Villalba Lucas Antonio</h2>
        </div>
      <div className={styles.content}>
        <img className={styles.miImagen} src={miImagen} alt="" />
        <p className={styles.textoDerecha}>
        Soy Lucas Antonio Villalba, un apasionado desarrollador de software argentino de 35 años. Mi viaje en el mundo del desarrollo de software comenzó después de completar mi título como Técnico Desarrollador de Software. Desde entonces, he trabajado incansablemente para perfeccionar mis habilidades en áreas como HTML, CSS, JavaScript, React, Redux y Node.js.
        </p>
        <p>
        Mi carrera como desarrollador de software comenzó después de completar mi formación educativa. A lo largo de los años, he trabajado arduamente para mantenerme actualizado con las últimas tendencias tecnológicas y mejorar mis habilidades. Mi pasión por la programación me llevó a emprender una carrera como desarrollador de software de forma independiente y freelance.
        </p>
        <p>
        Mi misión es seguir creciendo como profesional en el campo del desarrollo de software. Busco constantemente adquirir nuevos conocimientos y experiencia para abordar desafíos tecnológicos más emocionantes. Además, mi objetivo es contribuir de manera significativa al éxito de proyectos tecnológicos y brindar soluciones innovadoras basadas en mi experiencia en desarrollo.
        </p>
        <p>
        Mi visión es convertirme en un destacado profesional en el campo del desarrollo de software. Aspiro a trabajar con equipos talentosos y contribuir a proyectos de gran envergadura. Busco oportunidades para colaborar con empresas líderes en tecnología y desempeñar un papel clave en el desarrollo de soluciones innovadoras que tengan un impacto positivo en la sociedad.
        </p>
        <h3>Mis valores profesionales incluyen:</h3>
        <ul>
            <li>Compromiso con la excelencia.</li>
            <li>Aprendizaje continuo y adaptación.</li>
            <li>Integridad y ética en el trabajo.</li>
            <li>Colaboración y trabajo en equipo.</li>
            <li>Responsabilidad y entrega de resultados.</li>
        </ul>
        <h3>Información de Contacto:</h3>
        <ul>
            <li>Correo Electrónico: villalbalucas25@rocketmail.com</li>
            <li>WhatsApp: +543704722496</li>
            <li>LinkedIn: <a href='https://www.linkedin.com/in/lucas-antonio-villalba-185a891a4' target='_blank'>Mi LinkedIn</a></li>
        </ul>
        <p>
        Soy un profesional dedicado y apasionado que busca crecer y aportar mi experiencia en el desarrollo de software a proyectos desafiantes y significativos. Mi compromiso con la calidad y la mejora continua me convierte en un valioso activo en el campo tecnológico.
        </p>
      </div>
    </div>
  );
}

export default About;
