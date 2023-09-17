import React from "react"
import Menu from "../component/menu"
import { useNavigate } from "react-router-dom"
import Languageoption from '../component/language-dropdown'
import {useTranslation} from 'react-i18next'
import i18next from "i18next"
const Contactus = () => {
    const history = useNavigate();
    const handleRedirect = () => {
        history('/aboutus')
    }
    const {t} = useTranslation();
    const handleClick=(e)=>{
        i18next.changeLanguage(e.target.value)
    }
    return(
        <div >
            <Menu/>
            <Languageoption  onChange={(e)=> handleClick(e)}/>
            <h1>{t('contact')}</h1>
            <p style={{textAlign:'justify',fontSize:'16',paddingInline:'80px',lineHeight:2}}>{t('contactline')}</p>
           
        </div>
        
    )
}
export default Contactus