import React from 'react';
import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem ()
{
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/22552410?s=460&u=2736adf27864ea51edc03640cf045a964a4732dd&v=4" alt="fabricio" />
                <div>
                    <strong>Fabricio Henrique</strong>
                    <span> Químico</span>
                </div>
            </header>
            <p>
                Entusiasta das melhores tecnologias de química avançada
                            <br /><br />
                            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experimentos. Mais de 200.000 pessoas ja passaram por uma das minhas explosões
                        </p>
            <footer>
                <p>
                    preço/hora
                                <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsAppIcon} alt="WhatsApp" />
                                Entrar em contato
                            </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
