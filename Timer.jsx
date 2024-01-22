import React, { useEffect, useState } from 'react'

const Timer = () => {


    const [seconds, setSeconds] = useState(50);
    const [minute, setMinute] = useState(59);
    const [hour, setHour] = useState(0);
   

    var timer;

    useEffect(() => {

        timer = setInterval(() => {

            setSeconds(seconds + 1);

            if (seconds === 59) {
                setMinute(minute + 1);
                setSeconds(0);
            }
            if (minute == 59 && seconds == 59) {
                setHour(hour + 1)
                setMinute(0);
            }

        }, 1000);

        return () => clearInterval(timer);
    })


    const start = () => {
		
	}

    const restart = () => {
        setSeconds(0);
        setMinute(0);
        setHour(0);
    };
    const stop = () => {
        clearInterval(timer);
    };


    return (

        <div className="main-back bg-primary vh-100 ">
            <div className='container '>
                <div className="d-flex justify-content-center align-content-center align-items-center text-center">

                    {/* <div className="col-3"></div> */}
                    <div className="col-6 justify-content-center  ">
                        <div className="card mt-5 p-3">
                            <h2 className='mb-3'>Timer</h2>

                            <h1>{ hour < 10 ? "0" + hour : hour}:{minute < 10 ? "0" + minute : minute}:{seconds < 10 ? "0" + seconds : seconds}</h1>

                            <div className='d-flex justify-content-evenly mt-3 mb-3'>
                                <div className="col-4">
                                    <button className='btn  btn-dark ps-3 pe-3 border-primary ' onClick={start}>Start</button>
                                </div>
                                <div className="col-4">

                                    <button className='btn  btn-dark ps-3 pe-3 border-primary ' onClick={restart}>Restart</button>
                                </div>
                                <div className="col-4">

                                    <button className='btn  btn-dark ps-3 pe-3 border-primary ' onClick={stop}>Stop</button>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <div className="col-3"></div> */}

                </div>
            </div>
        </div>

    )
}

export default Timer