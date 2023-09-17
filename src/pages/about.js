import React from "react"
import Menu from "../component/menu"
import Languageoption from '../component/language-dropdown'
import {useTranslation} from 'react-i18next'
import i18next from "i18next"

const Aboutus = () => {
    const {t} = useTranslation();
    const handleClick=(e)=>{
        i18next.changeLanguage(e.target.value)
    }
    return(
        <div >
            <Menu/>
            <Languageoption onChange={(e)=> handleClick(e)}/>
            <h1>{t('about')}</h1>
            <p style={{textAlign:'justify',fontSize:'16',paddingInline:'80px',lineHeight:2}}>{t('aboutline')}</p>
        </div>
       
    )
}
export default Aboutus