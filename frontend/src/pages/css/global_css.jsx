import styled from "styled-components";

// พื้นหลังและสไตล์ทั่วไป
export const DivAndBg = styled.section`
    background-image: url('/img/bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin : auto;
    width: 100%;
    height: 100%;

    font-weight: bold;

    `;

//โลโก้
export const LogoImage = styled.img`
    width: 250px;
    height: 250px;
    margin: 10px 0px -30px 0px; 
`;

//ปุ่มตกลง-บันทึก
export const ButtonOK = styled.button`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`;
//ปุ่มยกเลิก
export const ButtonCancel = styled.button`
    background-color: #f44336; /* Red */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
`;
//ปุ่มย้อนกลับ
export const ButtonBack = styled.button`
    background-color: transparent;
    border: none;
    color: gray;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 22px;
    font-weight: bold;
`;
//ชื่อร้าน
export const Shashabu = styled.h1`
    color: black;
    font-size: 60px;
    font-weight: bold;
    text-shadow: 
        -2px -2px 0 red,  
        2px -2px 0 red,  
        -2px 2px 0 red,  
        2px 2px 0 red;
    margin: 0px;
`;
// //ปุ่มเมนู
// export const ButtonMenu = styled.button`
//     background-color: #blue; /* Red */
//     border: none;
//     color: white;
//     padding: 15px 32px;
//     text-align: center;
//     text-decoration: none;
//     display: inline-block;
//     font-size: 16px;
// `;
