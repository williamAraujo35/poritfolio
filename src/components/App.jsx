import './App.css';
import React from 'react';
import Perfil from '../imgs/perfil.jpeg';
import Html  from '../imgs/html.png';
import Css from '../imgs/css.png';
import Js from '../imgs/js.png';
import Node from '../imgs/nodejs.png';
import ReactIcon from '../imgs/react.png';
import Mysql from '../imgs/mysql.png';
import PostGree from '../imgs/postgresql.png';
import MilkManager from '../imgs/milkManagerLarge.png';
import Calculadora from '../imgs/calculadora.png';
import CadastroRapido from '../imgs/cadastroRapido.png';
import Receitas from '../imgs/receitas.png';
import Linkedin from '../imgs/linkedin.png';
import whatsapp from '../imgs/whatsapp.png';
import localizacao from '../imgs/localizacao.png';
import Bootstrap from '../imgs/bootstrap.png';
import Curriculo from '../docs/curriculo.pdf';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faBullseye } from '@fortawesome/free-solid-svg-icons';
import { faSitemap } from '@fortawesome/free-solid-svg-icons';
import { faArrowsToEye } from '@fortawesome/free-solid-svg-icons';
import { faForward } from '@fortawesome/free-solid-svg-icons';


const anoNascimento = 1988;
const anoAtual = new Date().getFullYear();
const idade = anoAtual - anoNascimento;


export default function App() {
  return (
    
    <div className="containers">
        <div className="header">
            <img className="perfil" src={Perfil} alt="perfil"/>
            <div className="apresentation">
                William Henrique de Araújo<br/>
                <div className="apresentationTwo" id="idade">
                    {idade} anos de idade<br/>
                    Prestador de Serviços em Gestão de Projetos e Processos<br/>
                    Certificações: PMP | CBPP | SMPC | BLACK BELT LEAN SIX SIGMA<br/>
                    Estudante de Desenvolvimento de Software<br/>
                    <div className="whoAmI text-light">
                        <span className="corText">C:\Documents</span> Sou apaixonado por tecnologia, inovação e desenvolvimento de softwares.<br/><br/>
                        <span className="corText">C:\Documents</span> Entrego soluções em software personalizadas com interfaces ricas para atender a sua demanda específica.<br /><br />
                        <span className="corText">C:\Documents</span> Se interessou? Entre em contato comigo para conversarmos melhor.
                    </div>

                </div>
                <div className='marginLeftButton'>
                    <a href="#habilidades" className="btn btn-light me-3 mt-5 text-dark">My Skills and Technologies</a>
                    <a href="#projetos" className="btn btn-light me-3 mt-5 text-dark">My Projects</a>
                    <a href="#contatos" className="btn btn-light me-3 mt-5 text-dark">My Contacts</a>
                </div>
            </div>
        </div>
        <div className="tecnologias bg-body-secondary" id="habilidades">
            <div className="fs-1 title d-flex justify-content-center mt-5">My Skills and Technologies:</div>
            <div className="hardSkills">
                <div className="cardHabilidades d-flex flex-column">
                    <div className='d-flex justify-content-center align-items-center '>
                        <FontAwesomeIcon icon={faComment} className='mt-3 ms-2 me-2 iconFontAwesome' size="2x" />
                        <span className="mt-3 fw-bold hablityComportamental">Comunicação</span>
                    </div>
                    <div className="ms-2 hablityComportamentalText">
                        Capacidade de me comunicar de forma clara e objetiva.
                    </div>
                </div>
                <div className="cardHabilidades d-flex flex-column">
                    <div className='d-flex justify-content-center align-items-center '>
                        <FontAwesomeIcon icon={faPeopleGroup} className='mt-3 ms-2 me-2 iconFontAwesome' size="2x" />
                        <span className="mt-3 fw-bold hablityComportamental">Trabalho em equipe</span>
                    </div>
                    <div className="ms-2 hablityComportamentalText">
                        Habilidade de trabalhar em equipe para alcance das metas definidas.
                    </div>
                </div>
                <div className="cardHabilidades d-flex flex-column">
                    <div className='d-flex justify-content-center align-items-center '>
                        <FontAwesomeIcon icon={faBullseye} className='mt-3 ms-2 me-2 iconFontAwesome' size="2x" />
                        <span className="mt-3 fw-bold hablityComportamental">Visão Estratégica</span>
                    </div>
                    <div className="ms-2 hablityComportamentalText">
                        Visão estratégica para entender quais projetos possuem maior potêncial de impacto.
                    </div>
                </div>
                <div className="cardHabilidades d-flex flex-column">
                    <div className='d-flex justify-content-center align-items-center '>
                        <FontAwesomeIcon icon={faSitemap} className='mt-3 ms-2 me-2 iconFontAwesome' size="2x" />
                        <span className="mt-3 fw-bold hablityComportamental">Organização</span>
                    </div>
                    <div className="ms-2 hablityComportamentalText">
                        Capacidade de organização das demandas e projetos bem como do tempo.
                    </div>
                </div>
                <div className="cardHabilidades d-flex flex-column">
                    <div className='d-flex justify-content-center align-items-center '>
                        <FontAwesomeIcon icon={faArrowsToEye} className='mt-3 ms-2 me-2 iconFontAwesome' size="2x" />
                        <span className="mt-3 fw-bold hablityComportamental">Foco</span>
                    </div>
                    <div className="ms-2 hablityComportamentalText">
                        Habilidade de manter o foco até a conclusão de projetos e desafios.
                    </div>
                </div>
                <div className="cardHabilidades d-flex flex-column">
                    <div className='d-flex justify-content-center align-items-center '>
                        <FontAwesomeIcon icon={faForward} className='mt-3 ms-2 me-2 iconFontAwesome' size="2x" />
                        <span className="mt-3 fw-bold hablityComportamental">Flexibilidade</span>
                    </div>
                    <div className="ms-2 hablityComportamentalText">
                        Flexibilidade para se adaptar rapidamente a mudanças de direção.
                    </div>
                </div>
            </div>
            <div>
                <hr className="widthLine mt-5" />
            </div>
            <div className="subTitleTec d-flex justify-content-center fs-3">
                Tecnologias
                
            </div>
            <div className="tecnology d-flex justify-content-center">
                <div>
                    <img className="escudos" src={Html} alt="Html" />
                </div>
                <div>
                    <img className="escudos" src={Css} alt="Css" />
                </div>
                <div>
                    <img className="escudos" src={Js} alt="Javascript" />
                </div>
                <div>
                    <img className="escudos" src={Node} alt="NodeJs" />
                </div>
                <div>
                    <img className="escudos" src={ReactIcon} alt="React" />
                </div>
                <div>
                    <img className="escudos" src={Bootstrap} alt="Bootstrap" />
                </div>
                <div>
                    <img className="escudos" src={Mysql} alt="MySql" />
                </div>
                <div>
                    <img className="escudos" src={PostGree} alt="PostGreSql" />
                </div>
                
            </div>
            <div>
                <hr className="widthLine mt-5" />
            </div>
        </div>
 <div className="projetos bg-body-secondary" id="projetos">

           
            <div className="fs-1 tituloProjetos">My Projects:</div>
        
            
            <div className="alinhamentoProjetos">
                
               
                    <div className="cardy rounded-bottom">
                      <div className="d-flex justify-content-center align-items-center border-bottom">
                          <img src={MilkManager} className="card-img-top imgs" alt="milkManager" />
                      </div>
                      <div className="card-body rounded-bottom">
                        <h5 className="card-title">MilkManager</h5>
                        <p className="card-text text-light ms-2 mt-2">Sistema para apoiar a gestão do gado de uma fazenda. Atualmente possibilita o Cadastro de animais, aplicação de filtros de busca e geração de relatório de animais. O sistema ainda encontra-se em evolução.</p>
                        <button type="button" className="btn btn-success me-3 ms-2"><a href='https://williamaraujo35.github.io/milkManager/#/' target="_blank" rel='noopener noreferrer' className="text-light">Rodar projeto</a></button>
                        <button type="button" className="btn btn-light"><a href='https://github.com/williamAraujo35/milkManager/tree/master' target="_blank" rel='noopener noreferrer' className="text-dark">Github</a></button>
                      </div>
                    </div>
                
        
        
                
                    <div className="cardy rounded-bottom">
                      <div className="d-flex justify-content-center align-items-center border-bottom">
                          <img src={Calculadora} className="card-img-top imgs" alt="calculadora" />
                      </div>
                      <div className="card-body rounded-bottom">
                        <h5 className="card-title">Calculadora</h5>
                        <p className="card-text text-light ms-2 mt-2">Um aplicativo clássico. Uma calculadora capaz de fazer operações matemáticas de adição, subtração, multiplicação e divisão.</p>
                        <button type="button" className="btn btn-success me-3 ms-2"><a href='https://williamaraujo35.github.io/calculadora/' target="_blank" rel='noopener noreferrer' className="text-light">Rodar projeto</a></button>
                        <button type="button" className="btn btn-light"><a href='https://github.com/williamAraujo35/calculadora/tree/master' target="_blank" rel='noopener noreferrer' className="text-dark">Github</a></button>
                      </div>
                    </div>
                
        
                
        
                    <div className="cardy rounded-bottom">
                      <div className="d-flex justify-content-center align-items-center border-bottom">
                          <img src={CadastroRapido} className="card-img-top imgs" alt="cadastro rápido" />
                      </div>
                      <div className="card-body rounded-bottom">
                        <h5 className="card-title">Cadastro Rápido - CRUD</h5>
                        <p className="card-text text-light ms-2 mt-2">Sistema para cadastro de usuários de forma rápida. Possui duas telas, a primeira é o formulário para cadastro e a segunda trás os usuários cadastrados e a possibilidade de edição e exclusão.</p>
                        <button type="button" className="btn btn-success me-3 ms-2"><a href='https://williamaraujo35.github.io/cadastroRapido/#/' target="_blank" rel='noopener noreferrer' className="text-light">Rodar projeto</a></button>
                        <button type="button" className="btn btn-light"><a href='https://github.com/williamAraujo35/cadastroRapido.git' target="_blank" rel='noopener noreferrer' className="text-dark">Github</a></button>
                      </div>
                    </div>
                  
        
        
                  
                      <div className="cardy rounded-bottom">
                        <div className="d-flex justify-content-center align-items-center border-bottom">
                            <img src={Receitas} className="card-img-top imgs" alt="Receitas e comidas" />
                        </div>
                        <div className="card-body rounded-bottom">
                          <h5 className="card-title">Blog de Receitas deliciosas</h5>
                          <p className="card-text text-light ms-2 mt-2">Blog que contém diversas receitas de comidas típicas brasileiras ou de comidas que vieram de outros países mas que são muito conhecidas por aqui.</p>
                          <button type="button" className="btn btn-success me-3 ms-2"><a href='https://williamaraujo35.github.io/receitasDeliciosas/' target="_blank" rel='noopener noreferrer' className="text-light">Rodar projeto</a></button>
                          <button type="button" className="btn btn-light"><a href='https://github.com/williamAraujo35/receitasDeliciosas.git' target="_blank" rel='noopener noreferrer' className="text-dark">Github</a></button>
                        </div>
                      </div>
                  
            </div>       
        </div>  
        <div className="contacts" id="contatos">
            <div className="m-5 mt-4 titleContacts">/* My Contacts: */</div>
            <div className="whatsapp"><a href='https://wa.me/5562999275782?text=Ol%C3%A1,%20meu%20nome%20%C3%A9%20William.%20Se%20interessou%20pelo%20meu%20conte%C3%BAdo?%20Vamos%20conversar?' target="_blank" rel='noopener noreferrer'><img className="iconsContacts" src={whatsapp} alt="whatsapp" /></a></div>
            <div className="linkedin"><a href="https://www.linkedin.com/in/william-henrique-de-ara%C3%BAjo-pmp-cbpp-081890136/" target="_blank" rel='noopener noreferrer'><img className="iconsContacts" src={Linkedin} alt="whatsapp" /></a></div>
            <div className="curriculoEmail d-flex flex-column justify-content-center align-items-center">
                <div><span className="text-light textFooter">Curriculo profissional:</span> <a href={Curriculo} target="_blank" rel='noopener noreferrer' className="textFooter">Clique aqui para baixar</a></div>
                <div><span className="text-light textFooter">Email:</span> <span className="textFooter"> william.tigoias@gmail.com</span></div>
                <div><span className="text-light textFooter">Telefone:</span> <span className="textFooter"> +55 (62) 99927-5782</span></div>
                
            </div>
            <div className="localizacao"><a href="https://maps.app.goo.gl/iLLdm2UuAwHJ9XdM7" target="_blank" rel='noopener noreferrer'><img className="iconsContacts" src={localizacao} alt="whatsapp" /></a></div>
            <div className="localizacao d-flex flex-column justify-content-center align-items-center mt-3">
                <span className="text-light mb-2 textFooter myLocation">Minha Localização</span>
                <iframe className="rounded maps" src="https://www.google.com/maps/embed?pb=!1m22!1m12!1m3!1d3823.665888346359!2d-49.271720158170716!3d-16.59331709706918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m7!3e6!4m4!1s0x935e8cb102855ccb%3A0xd3a1a48c562107b8!3m2!1d-16.5937087!2d-49.2709592!4m0!5e0!3m2!1spt-BR!2sbr!4v1736722994049!5m2!1spt-BR!2sbr" width="250" height="150" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div className="footer d-flex justify-content-center align-items-end fs-5">
                    <p className="textFooter rodape">&copy; COPYRIGHT 2025, William Araújo</p>
            </div>
        </div>
        

    </div>
  );
}

