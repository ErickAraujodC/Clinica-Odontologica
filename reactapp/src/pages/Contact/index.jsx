import React from "react";
import PageStructure from "../../components/PageStructure";
import MapAdress from "../../components/Map";

import './contact.css'

export default function Contact(){
    return(
        <PageStructure>
            <div className="contact-container">
                <div className="contact-map">
                <h2 className="title-section">Horários de <b>atendimento</b></h2>

                <p>Agende uma consulta pelo telefone: (21) 3699 - 9999</p>

                <ul className="list-img">
                    <li>
                    <img className="img-clients-doctors" src="../../../src/assets/image/medico01.png" alt="Dr. Hélio" title="Dr. Hélio"/>
                    <p>Dr. Hélio</p>
                    <p>Segundas, quartas e sextas das 09:00 às 16:00</p>
                    </li>

                    <li>
                    <img className="img-clients-doctors" src="../../../src/assets/image/medico02.png" alt="Dr. Carlos" title="Dr. Carlos"/>
                    <p>Dr. Carlos</p>
                    <p>Terças e quintas das 13:00 às 18:00</p>
                    </li>

                    <li>
                    <img className="img-clients-doctors" src="../../../src/assets/image/medico03.png" alt="Dra. Suzana" title="Dra. Suzana"/>
                    <p>Dra. Suzana</p>
                    <p>Terças, quintas e sábados das 08:00 às 12:00</p>
                    </li>
                </ul>

                </div>
                
                <div className="contact-map">
                <h2 className="title-section">Onde estamos <b>localizados</b>?</h2>

                <p>Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ. CEP: 22775-904
                </p>

                <MapAdress />
                </div>
            </div>
        </PageStructure>
    )
}
