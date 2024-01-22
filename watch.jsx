import React, { useState, useEffect } from "react"

const Watch = () => {
	const [time, setTime] = useState(55)
	const [isRunning, setIsRunning] = useState(false)

	useEffect(() => {
		let interval

		if (isRunning) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 1)
			}, 1000)
		} else {
			clearInterval(interval)
		}

		return () => {
			clearInterval(interval)
		}
	}, [isRunning])

	const Start = () => {
		setIsRunning(true)
	}

	const Stop = () => {
		setIsRunning(false)
	}

	const Restart = () => {
		setIsRunning(false)
		setTime(0)
	}

	const formatTime = (timeInSeconds) => {
		const hours = Math.floor(timeInSeconds / 3600)
		const minutes = Math.floor((timeInSeconds % 3600) / 60)
		const seconds = timeInSeconds % 60

		return ` ${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`

	};

	return (



		<div className="main-back bg-primary vh-100 ">
			<div className='container '>
				<div className="d-flex justify-content-center align-content-center align-items-center text-center">

					{/* <div className="col-3"></div> */}
					<div className="col-6 justify-content-center  ">
						<div className="card mt-5 p-4">
							<h3 className='mb-3'>Time Is Everything</h3>
							<div className="p-3 border border-info rounded-3 mb-2 ">
								<h1 className="display-2">{formatTime(time)}</h1>
							</div>

							<div className='d-flex justify-content-evenly mt-3 mb-1'>
								<div className="col-4">
									<button className='btn  btn-dark ps-3 pe-3 border-primary ' onClick={Start}>Start</button>
								</div>
								<div className="col-4">

									<button className='btn  btn-dark ps-3 pe-3 border-primary ' onClick={Restart}>Restart</button>
								</div>
								<div className="col-4">

									<button className='btn  btn-dark ps-3 pe-3 border-primary ' onClick={Stop}>Stop</button>
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

export default Watch
