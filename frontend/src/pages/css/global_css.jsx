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
    width: 100wd;
    height: 100vh;

    font-weight: bold;

    `;

//โลโก้
export const LogoImage = styled.img`
    width: 250px;
    height: 250px;
    margin: 10px 0px -30px 0px; 
`;

//ปุ่มตกลง-บันทึก
export const ButtonSubmit = styled.button`
    color: white;
    background-color: #8CC07F;
    border: none;
    width: 200px;
    border-radius: 35px;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 21px;
    margin: 25px 0px 30px 0px;

    &:hover {
    background-color: #4CAF50; /* Green */
    color: white;
    cursor: pointer;
    font-weight: bold;
    }
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
    
    &:hover {
        color: red;
        cursor: pointer;
    }
`;
//ชื่อร้าน
export const Shashabu = styled.h1`
    color: black;
    font-size: 80px;
    font-weight: bold;
    text-shadow: 
        -2px -2px 0 red,  
        2px -2px 0 red,  
        -2px 2px 0 red,  
        2px 2px 0 red;
    margin: 0px;
`;
//label หัวเรื่อง
export const Label = styled.label`
    color: black;
    font-size: 30px;
    font-weight: bold;
`;

//ButtonInfo
export const ButtonInfo = styled.button`
    background-color: #6BB6FC;
    border: none;
    color: black;
    padding: 15px 32px;
    text-align: center;
    border-radius: 50px;
    text-decoration: none;
    display: inline-block;
    font-size: 22px;
    font-weight: bold;
    
    &:hover {
        background-color: blue;
        color: white;
        cursor: pointer;
    }
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
