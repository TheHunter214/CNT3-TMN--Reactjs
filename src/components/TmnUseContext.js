import React, { createContext, useContext, useState } from 'react'
import TmnUseContext1 from './TmnUseContext1';
export const ThemeContext = createContext(); //tạo ngữ cảnh để chia sẻ
export default function TmnUseContext() {
    //state
    const [theme, settheme] = useState('Green');
    // const toggleTheme = () => {
    //     settheme(theme === 'red' ? 'dark' : 'light')
    // }

    //hàm thay đổi theme
    const tmnHandleChange = (toggle) =>{
        settheme(theme === 'Green' ? 'Pink' : 'Green')
    }
  return (
    <ThemeContext.Provider value = {theme}>
    <div className='alert'>
        <h2>Demo UseContext</h2>
        <TmnUseContext1/>
        <button onClick={tmnHandleChange}>Đổi Màu Cho đặc sắc</button>
    </div>
    </ThemeContext.Provider>
  )
}