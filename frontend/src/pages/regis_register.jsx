import React from 'react';
import { useNavigate } from 'react-router-dom';

// CSS
import { ButtonBack, DivAndBg, LogoImage, Shashabu,ButtonSubmit } from './css/global_css';
import { DivBg } from './css/register_css.jsx';
import { P, Input } from './css/index_css';
import {Select} from './css/receive.jsx';

const RegisterEmployee = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/item');
    }

    return (
        <div>
            <DivAndBg>
                <DivBg>
                    <span style={{ margin: '20px', display: 'inline-flex', alignItems: 'center' }}>
                        <img src="./public/img/logo.png" width={100} height={100} alt="logo" />
                        <Shashabu>shashabu</Shashabu>
                    </span>
                    <P style={{ marginTop: '-40px' ,marginBottom : '-10px'}}>สมัครพนักงานใหม่</P>

                    <table style={{ width: '100%', margin: '20px 0', textAlign: 'left' ,paddingLeft : '150px',paddingRight : '150px',color : 'black', fontSize : '20px'}}>
                        <tbody>
                            <tr>
                                <td><label>ชื่อ-สกุล</label></td>
                                <td><Input type="text" placeholder="ชื่อ-สกุล" /></td>
                            </tr>
                            <tr>
                                <td><label>เบอร์โทรศัพท์</label></td>
                                <td><Input type="text" placeholder="เบอร์โทรศัพท์" /></td>
                            </tr>
                            <tr>
                                <td><label>ชื่อผู้ใช้</label></td>
                                <td><Input type="text" placeholder="ชื่อผู้ใช้" /></td>
                            </tr>
                            <tr>
                                <td><label>รหัสผ่าน</label></td>
                                <td><Input type="password" placeholder="รหัสผ่าน" /></td>
                            </tr>
                            <tr>
                                <td><label>ยืนยันรหัสผ่าน</label></td>
                                <td><Input type="password" placeholder="ยืนยันรหัสผ่าน" /></td>
                            </tr>
                            <tr>
                                <td><label>ประเภทผู้ใช้งาน</label></td>
                                <td>
                                    <Select style={{ width: '200px' }}>
                                        <option value="0">เลือกประเภท</option>
                                        <option value="1">พนักงาน</option>
                                        <option value="2">ผู้ดูแลระบบ</option>
                                    </Select>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div style={{ marginTop: '-20px', marginBottom: '0px', alignItems: 'center', justifyContent: 'center' }}>
                        <ButtonBack onClick={handleBack}>ย้อนกลับ</ButtonBack>
                        <ButtonSubmit>ลงทะเบียน</ButtonSubmit>
                    </div>
                </DivBg>
            </DivAndBg>
        </div>
    );
}

export default RegisterEmployee;
