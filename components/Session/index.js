import { styled } from "styled-components";

const StyledDiv = styled.div`
	display: flex;
	padding: 10px;
	flex-direction: column;
	margin: auto;
	width: 200px;
	text-align: center;
`;

const StyledButtonSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const StyledButton = styled.button`
	background-color: transparent;
	border: none;
	font-size: 2em;
	width: 2em;
	height: 2em;
`;

export default function Session({
	sessionLength,
	setSessionLength,
	setTimeLeft,
}) {
	function onIncrement() {
		if (sessionLength < 60) {
			setSessionLength(sessionLength + 1);
			setTimeLeft((sessionLength + 1) * 60);
		}
	}

	function onDecrement() {
		if (sessionLength > 1) {
			setSessionLength(sessionLength - 1);
			setTimeLeft((sessionLength - 1) * 60);
		}
	}
	return (
		<StyledDiv>
			<h2 id="session-label">Session Length</h2>
			<StyledButtonSection>
				<StyledButton id="session-increment" onClick={onIncrement}>
					☝️
				</StyledButton>
				<div id="session-length">{sessionLength}</div>
				<StyledButton id="session-decrement" onClick={onDecrement}>
					👇
				</StyledButton>
			</StyledButtonSection>
		</StyledDiv>
	);
}
