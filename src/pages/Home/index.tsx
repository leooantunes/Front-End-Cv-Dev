import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {Navbar,Main,ContainerSkills,ContainerUser,InfoSkills,InfoUser,ExperienciaUser} from './style';
import {ButtonNavbar} from '../../components/common/Styled/PaginaPadrao';
import { faCode, faHome, faEdit } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin, faNpm, faCss3, faHtml5, faJs, faReact, faMedium} from '@fortawesome/free-brands-svg-icons';
import Avatar from '../../content/images/png/pinkfloyd.png';
import Modal from "../../components/Modal";

const Home: React.FC = () => {
  return (<>
    <Navbar>
      <div className="container-navbar">
        <h3><FontAwesomeIcon icon={faCode}/>Olá, Leonardo =)</h3>
        <div className="btn-navbar">
          <ButtonNavbar>Export</ButtonNavbar>
          <ButtonNavbar>Logout</ButtonNavbar>
        </div>
      </div>
    </Navbar>
    <Main>
    <Modal/>
      <ContainerUser>
        <img src={Avatar} alt="avatar-user"/>
        <ul className="info-user">
          <li>Nome: Leonardo Antunes <FontAwesomeIcon icon={faEdit} className="icon-edit"/></li>
          <li>Idade: 25 Anos</li>
          <li>Cargo: Desenvolvedor Front-End</li>
        </ul>
        <ul className="link-redes">
          <li><FontAwesomeIcon icon={faGithub}/></li>
          <li><FontAwesomeIcon icon={faLinkedin}/></li>
          <li><FontAwesomeIcon icon={faNpm}/></li>
          <li><FontAwesomeIcon icon={faMedium}/></li>
        </ul>
      </ContainerUser>
      <ContainerSkills>
        <InfoUser>
          <h1>Sobre Mim <FontAwesomeIcon icon={faEdit} className="icon-edit"/></h1>
          <p>Lorem Ipsum is simply dummy 
            text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into electronic 
            typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
            of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
            like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </InfoUser>
        <InfoSkills>
          <h1>Minhas Skills <FontAwesomeIcon icon={faEdit} className="icon-edit"/></h1>
          <div className="skill">
            <h3><FontAwesomeIcon icon={faCss3}/>CSS3</h3>
            <div className="skill-progress">
              <div className="css">90%</div>
            </div>
          </div>
          <div className="skill">
            <h3><FontAwesomeIcon icon={faHtml5}/>HTML5</h3>
            <div className="skill-progress">
              <div className="html">85%</div>
            </div>
          </div>
          <div className="skill">
            <h3><FontAwesomeIcon icon={faJs}/>JS</h3>
            <div className="skill-progress">
              <div className="js">80%</div>
            </div>
          </div>
          <div className="skill">
            <h3><FontAwesomeIcon icon={faReact}/>ReactJS</h3>
            <div className="skill-progress">
              <div className="js">85%</div>
            </div>
          </div>
        </InfoSkills>
        <ExperienciaUser>
          <h1>Minhas Experiêcias <FontAwesomeIcon icon={faEdit} className="icon-edit"/></h1>
          <div className="work-local">
            <h3><FontAwesomeIcon icon={faHome}/> Protech Solution</h3>
            <h3>Fevereiro 2020 - Atualmente</h3>
          </div>
          <div className="work-local">
            <h3><FontAwesomeIcon icon={faHome}/>Softeam Empresa Junior</h3>
            <h3>Março 2016 - Junho 2018</h3>
          </div>
        </ExperienciaUser>
      </ContainerSkills>
    </Main>
  </>)
};

export default Home;
