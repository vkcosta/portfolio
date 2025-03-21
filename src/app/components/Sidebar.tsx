import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <div className="profile-image">
        <Image src="/images/minha-foto.jpeg" alt="Foto de Perfil" width={100} height={100}></Image>
      </div>
      <h2>Vitor Knupp</h2>
      <div className='profissao'>Web Developer</div>
      <div className="social-icons">
        <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
        <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      </div>
      <div className='info-icons-container'>
        <div className="info-icons">
          <FontAwesomeIcon icon={faCalendar} /><p>August 21, 1993</p>
        </div>
        <div className="info-icons">
          <FontAwesomeIcon icon={faLocationDot} /><p>Espírito Santo, Brazil</p>
        </div>
        <div className="info-icons">
          <FontAwesomeIcon icon={faEnvelope} /><p>vito.knupp@mail.com</p>
        </div>
      </div>
      <button>Download CV</button>
    </aside>
  );
};

export default Sidebar;