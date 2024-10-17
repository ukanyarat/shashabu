import React from 'react';
import { useNavigate } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react'; // แก้ไขให้เป็น QRCodeSVG

//css
import { ButtonBack, DivAndBg, LogoImage, Shashabu } from './css/global_css';
import './css/qrcode.css';

const CusQRCode = () => {
    const qrValue = '@ร้านชาชาบู'; // กำหนดค่าที่จะสร้างในคิวอาร์โค้ด

    return (
        <DivAndBg>
            <div className="header"> 
                <img src="./public/img/logo.png" alt="Logo" />
                <Shashabu style={{ fontSize: '35px' }}>ยินดีต้อนรับสู่ร้านชาชาบู</Shashabu>
            </div>
            <div style={{ textAlign: 'center' }}>
                <Shashabu style={{ textAlign: 'center', fontSize: '40px' ,marginTop : '100px' }}>qr code @ร้านชาชาบู</Shashabu>
            </div>

            <div style={{ textAlign: 'center', }}>
                <QRCodeSVG 
                    value={qrValue} 
                    size={400} 
                    style={{ margin: '20px auto' }} 
                />
                <p>คิวอาร์โค้ดสำหรับ: {qrValue}</p>
            </div>
            <ButtonBack onClick={() => window.history.back()}>ย้อนกลับ</ButtonBack>

        </DivAndBg>
    );
};

export default CusQRCode;
