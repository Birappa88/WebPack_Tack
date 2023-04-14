import React, { useEffect, useState } from 'react';

function Color() {
    const [time, setTime] = useState('');
    const [width, setWidth] = useState(250);
    const [height, setHeight] = useState(250);
    const [current, setCurrent] = useState(null);
    const [perc, setPerc] = useState(0);

    let intervalId;

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setCurrent(time);
            setPerc(250 / time)
        }
    };

    useEffect(() => {
        intervalId = setInterval(() => {
            setCurrent((prevCurrent) => {
                const updatedCurrent = prevCurrent - 1;
                return updatedCurrent >= 0 ? updatedCurrent : prevCurrent;
            });
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    useEffect(() => {
        // if (current) {
        //     let widthh = (width * current / time)
        //     let widthhh = (width * current / time)
        //     let heightt = (height * current / time)
            // console.log(widthh, current, time)
            setWidth((widthh) => widthh - perc);
            setHeight((heightt) => heightt - perc);
        // }
    }, [current]);


    return (
        <div className='color'>
            <div className='inputbox1'>
                <input
                    type='number'
                    value={time}
                    onChange={(e) => setTime(parseInt(e.target.value))}
                    onKeyDown={handleKeyDown}
                />
            </div>
            <div className='boxs'>
                <div
                    style={{ width: `${width}px`, height: `${height}px` }}
                    className='box'
                >
                </div>
            </div>
            <div className='time'>{current}</div>
        </div>
    );
}

export default Color;

