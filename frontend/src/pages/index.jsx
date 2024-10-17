import React from 'react';
import { useNavigate } from 'react-router-dom';

//css
import { Shashabu, DivAndBg, LogoImage,ButtonSubmit } from './css/global_css';
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
                <Shashabu style={{marginTop : '-30px'}}>shashabu</Shashabu>
                <div >
                    <P style={{margin : '-20px 0px 10px 0px'}}>ลงชื่อเข้าใช้งาน</P>
                </div>
                <div>
                    <i className="fa-solid fa-user" style={{ margin: '10px',fontSize : '30px'}}></i>
                    <Input type="text" placeholder="ชื่อผู้ใช้" />
                </div>
                <div>
                    <i className="fa-solid fa-lock" style={{ margin: '10px',fontSize : '30px'}}></i>
                    <Input type="password" placeholder="รหัสผ่าน" />
                </div>
                <div>
                    <ButtonSubmit onClick={login}>เข้าสู่ระบบ</ButtonSubmit>
                </div>
            </DivBg>
        </DivAndBg>
    );
}
