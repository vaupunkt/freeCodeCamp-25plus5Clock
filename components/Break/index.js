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

export default function Break({ breakLength, setBreakLength }) {
	function onIncrement() {
		if (breakLength < 60) {
			setBreakLength(breakLength + 1);
		}
	}

	function onDecrement() {
		if (breakLength > 1) {
			setBreakLength(breakLength - 1);
		}
	}
	return (
		<StyledDiv id="break">
			<h2 id="break-label">Break Length</h2>
			<StyledButtonSection>
				<StyledButton id="break-increment" onClick={onIncrement}>
					☝️
				</StyledButton>
				<div id="break-length">{breakLength}</div>
				<StyledButton id="break-decrement" onClick={onDecrement}>
					👇
				</StyledButton>
			</StyledButtonSection>
		</StyledDiv>
	);
}
