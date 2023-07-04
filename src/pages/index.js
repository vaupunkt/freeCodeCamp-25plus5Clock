import Head from "next/head";
import { useState } from "react";
import Break from "../../components/Break";
import Session from "../../components/Session";
import Timer from "../../components/Timer";
import { styled } from "styled-components";

const StyledModifier = styled.div`
	display: flex;
`;

export default function Home() {
	const [breakLength, setBreakLength] = useState(5);
	const [sessionLength, setSessionLength] = useState(25);
	const [timeLeft, setTimeLeft] = useState(25 * 60);

	return (
		<>
			<Head>
				<title>25 plus 5 Clock</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main>
				<StyledModifier>
					<Break
						breakLength={breakLength}
						setBreakLength={setBreakLength}
						setTimeLeft={setTimeLeft}></Break>
					<Session
						sessionLength={sessionLength}
						setSessionLength={setSessionLength}
						setTimeLeft={setTimeLeft}></Session>
				</StyledModifier>
				<Timer
					timeLeft={timeLeft}
					setTimeLeft={setTimeLeft}
					sessionLength={sessionLength}
					breakLength={breakLength}
					setBreakLength={setBreakLength}
					setSessionLength={setSessionLength}></Timer>
			</main>
		</>
	);
}
