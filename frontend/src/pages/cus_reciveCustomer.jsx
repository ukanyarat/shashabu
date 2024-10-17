import React from 'react'
import { useNavigate } from 'react-router-dom';

//css
import { ButtonBack, DivAndBg, LogoImage, Shashabu,Label,ButtonSubmit } from './css/global_css';
import { DivBtn,Button } from './css/select_css';
import { DivBg } from './css/register_css.jsx';
import { P, Input } from './css/index_css';
import {Select} from './css/receive.jsx';

const cus_reciveCustomer = () => {
    const navigate = useNavigate();
    const qrCode = () => {
        navigate('/qrCode');
    }
    return (
        <DivAndBg>
            <DivBg style={{width : '600px'}}>
                <LogoImage style={{width : '200px',height : '200px'}} src="./public/img/logo.png" />
                <Shashabu style={{backgroundColor : '#FFCCCC',fontSize : '50px'}}>รับลูกค้า</Shashabu>
                <h3 style={{ color: 'white', marginTop: '-25px', marginBottom: '10px', marginLeft: '200px'}}>@Shashabu</h3>
                <div style={{ marginTop: '20px', marginBottom: '20px', alignItems: 'center', justifyContent: 'center'}}>
                    <Label>เลือกเลขโต๊ะ <br /></Label>
                    <Select name="" id="">
                        <option value="">เลขโต๊ะ</option>
                        <option value="">VVIP 1</option>
                        <option value="">VIP 2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                    </Select>
                </div>
                <div>
                    <Label>จำนวนลูกค้า <br /></Label>
                    <Input style={{ width: '150px' ,textAlign: 'center',fontSize : '20px'}} type="text" placeholder="จำนวนลูกค้า" />
                </div> 
                <div style={{ marginTop: '20px', alignItems: 'center', justifyContent: 'center'     }}>
                    <ButtonBack onClick={() => window.history.back()}>ย้อนกลับ</ButtonBack>
                    <ButtonSubmit onClick={qrCode}>ยืนยัน</ButtonSubmit>
                </div>
            </DivBg>
        </DivAndBg>
    )
}

export default cus_reciveCustomer
