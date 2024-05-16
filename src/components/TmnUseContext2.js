import React, { useContext } from 'react'
import { ThemeContext } from './TmnUseContext'

export default function TmnUseContext2() {
    const theme = useContext(ThemeContext);
  return (
    <div className={theme + 'mm -3'}>
        <h2>TmnUseContext2</h2>
        <p>
            <b>2210900049</b>
            <b>Tran Minh Nam</b>
            <i>K22CNT3</i>
        </p>
    </div>
  )
}