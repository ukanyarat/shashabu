import React from 'react'
import { useNavigate } from 'react-router-dom';

//css
import { ButtonBack, DivAndBg, LogoImage, Shashabu } from './css/global_css';
import { DivBg } from './css/register_css.jsx';
import { P, Input } from './css/index_css';
const registerEmployee = () => {
    const navigate = useNavigate();

    const back = () => {
        navigate('/item');
    }
    return (
        <div>
            <DivAndBg>
                <DivBg>
                    <span style={{ marginTop: '20px', display: 'inline-flex', alignItems: 'center' }}> <img src="./public/img/logo.png" width={100} height={100} />
                        <Shashabu>shashabu</Shashabu></span>
                    <P>สมัครพนักงานใหม่</P>
                    <div>
                        <div>
                            <label>ชื่อ-สกุล</label>
                            <Input type="text" placeholder="ชื่อ-สกุล" />
                        </div>
                        <div>
                            <label>เบอร์โทรศัพท์</label>
                            <Input type="text" placeholder="เบอร์โทรศัพท์" />
                        </div>
                        <div>
                            <label>ชื่อผู้ใช้</label>
                            <Input type="text" placeholder="ชื่อผู้ใช้" />
                        </div>
                        <div>
                            <label>รหัสผ่าน</label>
                            <Input type="password" placeholder="รหัสผ่าน" />
                        </div>
                        <div>
                        <label>ยืนยันรหัสผ่าน</label>
                            <Input type="password" placeholder="ยืนยันรหัสผ่าน" />
                        </div>
                        <div>
                        <label>ประเภทผู้ใช้งาน</label>
                            <select>
                                <option value="0">เลือกประเภทพนักงาน</option>
                                <option value="1">พนักงาน</option>
                                <option value="2">ผู้ดูแลระบบ</option>
                            </select>
                        </div>
                        <div><ButtonBack onClick={back}>ย้อนกลับ</ButtonBack><button>ลงทะเบียน</button></div>
                    </div>
                </DivBg>
            </DivAndBg>

        </div>
    )
}

export default registerEmployee
