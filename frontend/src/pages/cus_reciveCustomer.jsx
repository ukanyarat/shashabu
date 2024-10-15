import React from 'react'
import { useNavigate } from 'react-router-dom';

//css
import { ButtonBack, DivAndBg, LogoImage, Shashabu } from './css/global_css';
import { DivBtn,Button } from './css/select_css';
import { DivBg } from './css/register_css.jsx';
import { P, Input } from './css/index_css';

const cus_reciveCustomer = () => {

    const navigate = useNavigate();
    const qrCode = () => {
        navigate('/qrCode');
    }

    return (
        <DivAndBg>
            <DivBg style={{height : '800px'}}>
                <LogoImage src="./public/img/logo.png" />
                <Shashabu>shashabu</Shashabu>
                <div style={{ marginTop: '50px', marginBottom: '20px', alignItems: 'center', justifyContent: 'center'     }}>
                    <label>เลือกเลขโต๊ะ <br /></label>
                    <select name="" id="">
                        <option value="">เลือกเลขโต๊ะ</option>
                        <option value="">VVIP 1</option>
                        <option value="">VIP 2</option>
                        <option value="">3</option>
                        <option value="">4</option>
                        <option value="">5</option>
                        <option value="">6</option>
                        <option value="">7</option>
                        <option value="">8</option>
                    </select>
                </div>
                <div>
                    <label>จำนวนลูกค้า <br /></label>
                    <Input type="text" placeholder="จำนวนลูกค้า" />
                </div> 
                <div>
                    
                    <ButtonBack onClick={() => window.history.back()}>ย้อนกลับ</ButtonBack>
                    <Button onClick={qrCode}>ยืนยัน</Button>
                </div>
            </DivBg>
        </DivAndBg>
    )
}

export default cus_reciveCustomer
