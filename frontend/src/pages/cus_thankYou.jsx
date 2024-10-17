import React from 'react'
import { useNavigate } from 'react-router-dom';
//css
import { ButtonBack, DivAndBg, LogoImage, Shashabu,Label,ButtonSubmit } from './css/global_css';
import { DivBtn,Button } from './css/select_css';
import { DivBg } from './css/register_css.jsx';
import { P, Input } from './css/index_css';
import {Select} from './css/receive.jsx';
const cus_thankYou = () => {
    return (
        <DivAndBg>
            <LogoImage src="./public/img/logo.png" />
            <Shashabu style={{marginTop : '30px'}}>  🍥Shashabu🍥 </Shashabu>
            <Shashabu style={{marginTop : '-30px'}}>ขอบคุณที่ใช้บริการ</Shashabu>
        </DivAndBg>
    )
}

export default cus_thankYou