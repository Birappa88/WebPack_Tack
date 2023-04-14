import React, { useState } from 'react'
import { SketchPicker } from 'react-color';

function Color() {

    const [time, setTime] = useState("")
    const [isVisible, setIsVisible] = useState(true)
    const [opencolor1, setOpencolor1] = useState(false)
    const [opencolor2, setOpencolor2] = useState(false)
    const [color1, setTopLeftColor1] = useState('rgb(255,0,0)'); // State for top left color
    const [color2, setTopLeftColor2] = useState('#00FF1C'); // State for top left color


    const setTimer = () => {

        setIsVisible(false)

        let newt = Number(time)*1000

        setTimeout(() => {
            setIsVisible(true)
        }, newt);
        setOpencolor2(false)
        setOpencolor1(false)
        setTime("")
    }

    const handleTopLeftColorChange1 = (color) => {
        setTopLeftColor1(color.hex);
    }

    const handleTopLeftColorChange2 = (color) => {
        setTopLeftColor2(color.hex);
    }

    const colorchange1 = () => {
        setOpencolor1(true)
        setOpencolor2(false)
    }
    
    const colorchange2 = () => {
        setOpencolor2(true)
        setOpencolor1(false)
    }



    return (
        <div className='color'>
            <div style={{ backgroundColor: color1 }} className={`topleft ${isVisible ? "show" : "hide"}`} onClick={colorchange1}>
                Top Left
            </div>
            <div style={{ backgroundColor: color2 }}  className={`topright ${isVisible ? "show" : "hide"}`} onClick={colorchange2}>
                Top Right
            </div>
            <div className='inputbox'>
                <input type='number' value={time} onChange={(e) => setTime(e.target.value)} />

                <button onClick={setTimer}>Set Timer</button>
                {
                    opencolor1 &&
                    <SketchPicker color={color1} onChange={handleTopLeftColorChange1} />
                }
                {
                    opencolor2 &&
                    <SketchPicker color={color2} onChange={handleTopLeftColorChange2} />
                }
            </div>
            <div style={{ backgroundColor: color2 }} className={`bottomleft ${isVisible ? "show" : "hide"}`} onClick={colorchange2}>
                Bottom Left
            </div>
            <div style={{ backgroundColor: color1 }}  className={`bottomright ${isVisible ? "show" : "hide"}`} onClick={colorchange1} >
                Bottom Right
            </div>
        </div>
    )
}

export default Color