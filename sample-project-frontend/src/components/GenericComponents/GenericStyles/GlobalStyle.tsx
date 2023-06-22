
import { createGlobalStyle } from 'styled-components'
import { ThemeType } from '../../../App'
import { FontFamily, FontSizeNormal, FontSizeSmall } from './GenericStyles'

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
	* {
		letter-spacing: 0.01em;
	}

	#ghostDraggedElement {
		width: fit-content;
		opacity: 1 !important;

		* {
			box-shadow: none;
		}
	}

	.SnackbarItem-wrappedRoot .SnackbarItem {
		&-variantSuccess {
			background-color: ${({ theme }) => theme.snackbar.successBackground};
			color: ${({ theme }) => theme.snackbar.successTextColor};
		}

		&-variantError {
			background-color: ${({ theme }) => theme.snackbar.errorBackground};
			color: ${({ theme }) => theme.snackbar.errorTextColor};
		}

		&-variantInfo {
			background-color: ${({ theme }) => theme.snackbar.infoBackground};
			color: ${({ theme }) => theme.snackbar.infoTextColor};
		}

		&-variantWarning {
			background-color: ${({ theme }) => theme.snackbar.warningBackground};
			color: ${({ theme }) => theme.snackbar.warningTextColor};
		}

		&-variantDefault {
			background-color: ${({ theme }) => theme.snackbar.defaultBackground};
		  	color: ${({ theme }) => theme.snackbar.defaultTextColor};
      }
    }
	.MuiPaper-root {
		background-color: ${({ theme }) => theme.backgroundLight};
		color: ${({ theme }) => theme.textMain};
		${FontFamily};
		& > .PrivatePickersFadeTransitionGroup-root > div {
			${FontFamily};
		}
		.MuiCalendarPicker-root  {
			.MuiPickersDay-root {
				${FontFamily};
				${FontSizeNormal};
				font-weight: 500;
				color: ${({ theme }) => theme.textMain};
				background-color: ${({ theme }) => theme.backgroundMedium};
				&:hover {
					background-color: ${({ theme }) => theme.backgroundDark};
				}
				&.Mui-selected {
					background-color: ${({ theme }) => theme.primaryMain};
					color: ${({ theme }) => theme.primaryContrastText};
					&:hover {
						background-color: ${({ theme }) => theme.primaryDark};
					}
				}
				&.MuiPickersDay-today:not(.Mui-selected) {
					border-color: ${({ theme }) => theme.borderColor};
				}
			}
			.MuiCalendarPicker-root {
				.MuiTypography-caption {
					color: ${({ theme }) => theme.textLight};
					${FontFamily};
					${FontSizeSmall};
					font-weight: 400;
				}
			}
			.PrivatePickersYear-yearButton {
				${FontFamily};
				${FontSizeNormal};
				font-weight: 500;
				color: ${({ theme }) => theme.textMain};
				&:hover:not(.Mui-selected) {
					background-color: ${({ theme }) => theme.backgroundMedium};
				}
				&.Mui-selected {
					background-color: ${({ theme }) => theme.primaryMain};
					color: ${({ theme }) => theme.primaryContrastText};
					&:hover {
						background-color: ${({ theme }) => theme.primaryDark};
					}
				}
			}
			.MuiPickersArrowSwitcher-button, .MuiIconButton-root {
				color: ${({ theme }) => theme.textLight};
				&:hover {
					background ${({ theme }) => theme.backgroundDark};
					color: ${({ theme }) => theme.textMain};
				}
			}
			.MuiTypography-root {
				${FontFamily};
				${FontSizeSmall};
				font-weight: 600;
				color: ${({ theme }) => theme.textLighter};
			}
			.PrivatePickersFadeTransitionGroup-root div {
				${FontFamily};
				${FontSizeNormal};
				color: ${({ theme }) => theme.textMain};
			}
		}
		.MuiClockPicker-root {
			div:not(:first-child) > div {
				& > div:first-child {
					background ${({ theme }) => theme.backgroundDark};
				}
				& > div:nth-child(2), & > div:nth-child(3) {
					background ${({ theme }) => theme.primaryMain};
				}
				& > div:last-child > span{
					${FontFamily};
					${FontSizeNormal};
					color: ${({ theme }) => theme.textMain};
				}
			}
		}
	}
	.MuiTooltip-tooltip {
		${FontFamily};
		${FontSizeSmall};
		color: ${({ theme }) => theme.tooltipColor};
		background: ${({ theme }) => theme.tooltipBackground};
	}
`
