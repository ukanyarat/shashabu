import React from 'react';
import { useNavigate } from 'react-router-dom';

//css
import { Shashabu, DivAndBg, LogoImage } from './css/global_css';
import { DivBg,P,Input,Button } from './css/index_css';    
export default function IndexLogin() {
    const navigate = useNavigate();

    const login = () => {
        // Add any login logic here (if needed)
        navigate('/item');  // This will navigate to the menu page
    };

    return (
        <DivAndBg>
            <DivBg>
            <LogoImage src="./public/img/logo.png" />
                <Shashabu>shashabu</Shashabu>
                <div >
                    <P>ลงชื่อเข้าใช้งาน</P>
                </div>
                <div>
                    <i className="fa-solid fa-user"></i>
                    <Input type="text" placeholder="ชื่อผู้ใช้" />
                </div>
                <div>
                    <i className="fa-solid fa-lock"></i>
                    <Input type="password" placeholder="รหัสผ่าน" />
                </div>
                <div>
                    <Button onClick={login}>เข้าสู่ระบบ</Button>
                </div>
            </DivBg>
        </DivAndBg>
    );
}
