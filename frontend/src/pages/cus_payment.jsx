import React from 'react'
import { useNavigate } from 'react-router-dom';
import './css/payment.css';
//css
import { ButtonBack, DivAndBg, LogoImage, Shashabu, Label, ButtonSubmit,ButtonInfo } from './css/global_css';
import { DivBtn, Button } from './css/select_css';
import { DivBg } from './css/register_css.jsx';
import { P, Input } from './css/index_css';
import { Select } from './css/receive.jsx';

const cus_payment = () => {
    return (
        <DivAndBg>
            <div className='headmain' >
                <Shashabu style={{ textAlign: 'center' ,fontSize : '50px'}}>ชําระเงิน</Shashabu>
                <div className='headsecond'></div>
            </div>
            <LogoImage style={{width : '200px',height : '200px',marginTop : '50px',zIndex : '10000'}} src="./public/img/logo.png" /><br />
            <div style={{textAlign : 'center',marginTop : '-20px'}}><br/>
                <Label style={{ fontSize: '35px'}}>โต๊ะที่ ........</Label><br />
                <Label style={{ fontSize: '25px'}}>จำนวนลูกค้า ........</Label><br />
                <Label style={{ fontSize: '30px',color : 'red'}}>ราคารวม ........</Label><br />
                <ButtonInfo style={{marginTop : '20px'}}>กดเรียกพนักงานเพื่อชําระเงิน</ButtonInfo> <br />
                <ButtonBack  onClick={() => window.history.back()}>ย้อนกลับ</ButtonBack>

            </div>
        </DivAndBg >
    )
}

export default cus_payment
