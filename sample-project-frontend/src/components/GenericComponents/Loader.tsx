import styled from 'styled-components'

interface LoaderProps {
	color?: string
}
export const StyledLoader = styled.div<{ $color?: string }>`
	display: inline-block;
	position: relative;
	width: 24px;
	height: 24px;
	min-width: 24px;
	div {
		position: absolute;
		top: 50%;
		width: 4px; // 13px
		height: 4px; // 13px
		transform: translateY(-50%);
		border-radius: 50%;
		background: ${({ theme }) => theme.textMain};
		${({ $color, theme }) => {
		switch ($color) {
			case 'primary': {
				return `background: ${theme.button.primaryText};`
			}
			case 'secondary': {
				return `background: ${theme.button.secondaryText};`
			}
			case 'error': {
				return `background: ${theme.button.errorText};`
			}
			default: {
				return `background: ${theme.button.defaultText};`
			}
		}
	}}
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
	}
	div:nth-child(1) {
		left: calc(8px / 3);
		animation: lds-ellipsis1 0.6s infinite;
	}
	div:nth-child(2) {
		left: calc(8px / 3);
		animation: lds-ellipsis2 0.6s infinite;
	}
	div:nth-child(3) {
		left: calc(32px / 3);
		animation: lds-ellipsis2 0.6s infinite;
	}
	div:nth-child(4) {
		left: calc(56px / 3);
		animation: lds-ellipsis3 0.6s infinite;
	}
	@keyframes lds-ellipsis1 {
		0% {
			transform: translateY(-50%) scale(0);
		}
		100% {
			transform: translateY(-50%) scale(1);
		}
	}
	@keyframes lds-ellipsis3 {
		0% {
			transform: translateY(-50%) scale(1);
		}
		100% {
			transform: translateY(-50%) scale(0);
		}
	}
	@keyframes lds-ellipsis2 {
		0% {
			transform: translate(0, -50%);
		}
		100% {
			transform: translate(calc(24px / 3), -50%);
		}
	}
`

export const Loader = ({ color }: LoaderProps) => (
	<StyledLoader $color={color}>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</StyledLoader>
)
