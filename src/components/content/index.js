import React, { Component } from 'react'
import './content.scss'
class Content extends Component{
    render(){
        return(
            <section className='content'>
                <div className='wrapper'>
                    <div className='image-container'>
                        <img src='' alt='Profile-image' className='image-container__image' />
                    </div>
                    <div className='container'>
                        <p className='container__text'>
                            Lorem Ipsum is slechts een proeftekst uit het drukkerij- en zetterijwezen. Lorem Ipsum is de standaard proeftekst in deze bedrijfstak sinds de 16e eeuw, toen een onbekende drukker een zethaak met letters nam en ze door elkaar husselde om een font-catalogus te maken. Het heeft niet alleen vijf eeuwen overleefd maar is ook, vrijwel onveranderd, overgenomen in elektronische letterzetting. Het is in de jaren '60 populair geworden met de introductie van Letraset vellen met Lorem Ipsum passages en meer recentelijk door desktop publishing software zoals Aldus PageMaker die versies van Lorem Ipsum bevatten.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Content;