import React from 'react';
import { useNavigate } from 'react-router-dom';
//css
import { ButtonBack, DivAndBg,LogoImage,Shashabu } from './css/global_css'; 
import { DivBtn,Button } from './css/select_css';
export default function SelectItem() {
    const navigate = useNavigate();
    
    const login = () => {
        navigate('/');  
    };
    const reciveCustomers = () => {
        navigate('/receiveCustomers');  
    };
    const orders = () => {
        navigate('/viewOrder');  
    };
    const menuItem = () => {
        navigate('/manageFoodItems');  
    };
    const payment = () => {
        navigate('/payment');  
    };
    const historyOrders = () => {
        navigate('/historyOrders');  
    };
    const register = () => {
        navigate('/registerEmployee');  
    };

    return (
        <>
            <DivAndBg>
                <LogoImage src='img/logo.png'/>
            <Shashabu style={{marginTop : '-20px',marginBottom : '-10px'}}>shashabu</Shashabu>
            <DivBtn>
            <Button onClick={reciveCustomers}>รับลูกค้า</Button>
            <Button onClick={orders}>ดูรายการสั่งอาหาร</Button>
            <Button onClick={menuItem}>จัดการรายการอาหาร</Button>
            <Button onClick={payment}>ชำระเงินลูกค้า</Button>
            <Button onClick={historyOrders}>ดูประวัติรายการสั่งอาหาร</Button>
            <Button onClick={register}>สมัครพนักงานใหม่</Button >
            <ButtonBack onClick={login}>ย้อนกลับ</ButtonBack>
            </DivBtn>
            </DivAndBg>
        </>
    );
}
