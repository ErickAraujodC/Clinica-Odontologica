import './home.css'
import React from 'react'
import PageStructure from '../../components/PageStructure'
import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <PageStructure>

            <div className="home-presentation">
                <div className="limit-container">
                    <h1>Os melhores <span>aparelhos dentários</span>!</h1>

                    <p>
                        Confira abaixo todas as especialidades odontológicas que temos à sua disposição! 
                    </p>

                    <ul className="list-services">
                        <li>
                            <img src="../../../src/assets/image/dente.png" alt="logo" title="logo"/>
                            <p>Pré-avaliação</p>
                        </li>

                        <li>
                            <img src="../../../src/assets/image/dente.png" alt="logo" title="logo"/>
                            <p>Aparelhos Dentários</p>
                        </li>

                        <li>
                            <img src="../../../src/assets/image/dente.png" alt="logo" title="logo"/>
                            <p>Raio-X digital</p>
                        </li>

                        <li>
                            <img src="../../../src/assets/image/dente.png" alt="logo" title="logo"/>
                            <p>Clareamento dental</p>
                        </li>
                    </ul>
                </div>
            </div>

            <h2 className="title-section">Por que usar <b>aparelho</b>?</h2>

            <img className="img-bracket" src="../../../src/assets/image/aparelho.png" alt="Imagem do uso de um aparelho" title="Imagem do uso de um aparelho"/>

            <ul className="list-about-bracket limit-container">
                <li>
                    <h3>Alinhar os dentes</h3>
                    <p>Dentes desalinhados causam problemas nos dentes e podem afetar a digestão dos alimentos e a respiração.</p>
                </li>
                <li>
                    <h3>Melhorar a dicção e a higiene dentária</h3>
                    <p>Muitas pessoas não conseguem nem usar fio dental devido à posição da sua dentição. Contudo, a correção possibilita o cuidado com a saúde bucal de forma bem mais ampla.</p>
                </li>
                <li>
                    <h3>Corrigir espaço entre os dentes</h3>
                    <p>Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos.</p>
                </li>
            </ul>      
            
            <div className="home-client-comments">
                <h2 className="title-section">Veja o que nossos <b>clientes</b> estão falando...</h2>

                <ul className="list-img">
                    <li>
                        <img className="img-clients-doctors" src="../../../src/assets/image/cliente01.png" alt="Cliente Alberto" title="Cliente Alberto"/>
                        <p>Alberto</p>
                        <p>Usei aparelho por 2 anos e agora posso sorrir novamente.</p>
                    </li>

                    <li>
                        <img className="img-clients-doctors" src="../../../src/assets/image/cliente02.png" alt="Cliente Eliana" title="Cliente Eliana"/>
                        <p>Eliana</p>
                        <p>Meus dentes eram espaçados e depois de 1 ano estão no lugar certo.</p>
                    </li>

                    <li>
                        <img className="img-clients-doctors" src="../../../src/assets/image/cliente03.png" alt="Cliente Carla" title="Cliente Carla"/>
                        <p>Carla</p>
                        <p>Começei a usar ano passado e já estou notando a diferença.</p>
                    </li>
                </ul>
            </div>

            <div className='btn-contact-container'>
                {<Link to="/contact" className="btn-contact">Entrar em contato</Link>}

            </div>
            

        </PageStructure>        
    )
}