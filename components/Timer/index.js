import { styled } from "styled-components";
import { useState, useEffect } from "react";

const StyledButton = styled.button`
	font-size: 2em;
	background-color: transparent;
	border: none;
	margin: 20px;
`;

const StyledTimer = styled.div`
	display: flex;
	flex-direction: column;
	border: solid;
	border-radius: 20px;
	padding: 15px;
	width: 200px;
	margin: auto;
	text-align: center;
`;

export default function Timer({
	sessionLength,
	breakLength,
	setBreakLength,
	setSessionLength,
	timeLeft,
	setTimeLeft,
}) {
	const [isSession, setIsSession] = useState(true);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		const beep = document.getElementById("beep");
		if (isRunning && timeLeft > 0) {
			const intervalId = setInterval(() => {
				setTimeLeft(timeLeft - 1);
			}, 1000);
			return () => clearInterval(intervalId);
		} else if (isRunning && timeLeft === 0) {
			beep.play();
			setTimeout(() => {
				beep.pause();
				beep.currentTime = 0;
				setIsSession(!isSession);
				setTimeLeft(isSession ? breakLength * 60 : sessionLength * 60);
			}, 1500);
		}
	}, [isRunning, setTimeLeft, timeLeft, isSession, breakLength, sessionLength]);

	function onStartStop() {
		setIsRunning(!isRunning);
	}

	function onReset() {
		setIsRunning(false);
		setIsSession(true);
		setTimeLeft(25 * 60);
		setBreakLength(5);
		setSessionLength(25);
		const beep = document.getElementById("beep");
		beep.pause();
		beep.currentTime = 0;
	}

	return (
		<StyledTimer>
			<audio id="beep" src="/beep.mp3" />
			<h2 id="timer-label">{isSession ? "Session" : "Break"}</h2>
			<div id="time-left">
				{Math.floor(timeLeft / 60)
					.toString()
					.padStart(2, "0")}
				:{(timeLeft % 60).toString().padStart(2, "0")}
			</div>

			<section>
				<StyledButton id="start_stop" onClick={onStartStop}>
					{isRunning ? "⏹️" : "▶️"}
				</StyledButton>
				<StyledButton id="reset" onClick={onReset}>
					🔄
				</StyledButton>
			</section>
		</StyledTimer>
	);
}
