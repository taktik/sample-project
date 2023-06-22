import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		primaryMain: string
		primaryLight: string
		primaryDark: string
		primarySuperLight: string
		primaryContrastText: string
		textMain: string
		textLight: string
		textLighter: string
		textDark: string
		backgroundLight: string
		backgroundMedium: string
		backgroundDark: string
		backgroundDarker: string
		borderColor: string
		logoColor: string
		selectedItem: {
			color: string
			colorHover: string
			background: string
			backgroundHover: string
		}
		dangerMain: string
		dangerLight: string
		dangerDark: string
		dangerSuperLight: string
		navItem: {
			background: string
			color: string
			inheritedInfoColor: string
			inheritedBorderColor: string
			inheritedBackground: string
			inheritedColor: string
			selectedBackground: string
			selectedColor: string
			selectedInheritedBorderColor: string
			highlightColor: string
			highlightBackground: string
		}
		type: {
			audioBackground: string
			audioColor: string
			channelBackground: string
			channelColor: string
			documentBackground: string
			documentColor: string
			imageBackground: string
			imageColor: string
			slideBackground: string
			slideColor: string
			videoBackground: string
			videoColor: string
			errorColor: string
			errorBackground: string
		}
		snackbar: {
			successBackground: string
			successTextColor: string
			errorTextColor: string
			errorBackground: string
			infoTextColor: string
			infoBackground: string
			warningTextColor: string
			warningBackground: string
			defaultTextColor: string
			defaultBackground: string
		}
		tooltipBackground: string
		tooltipColor: string
		greenMain: string
		greenLight: string
		greenDark: string
		greenSuperLight: string
		yellowMain: string
		yellowLight: string
		yellowDark: string
		yellowSuperLight: string
		redMain: string
		redLight: string
		redDark: string
		redSuperLight: string
		button: {
			primaryBackground: string
			primaryText: string
			primaryTextHover: string
			primaryBackgroundHover: string
			secondaryBorder: string
			secondaryText: string
			secondaryBackgroundHover: string
			secondaryBorderHover: string
			secondaryTextHover: string
			errorBackground: string
			errorText: string
			errorBackgroundHover: string
			errorTextHover: string
			defaultText: string
			defaultTextHover: string
			defaultBackgroundHover: string
		}
		input: {
			background: string
			color: string
			backgroundHover: string
			colorHover: string
			colorIcon: string
			borderColor: string
			secondBorderColor: string
			errorBorderColor: string
			secondBorderErrorColor: string
		}
		iconButton: {
			defaultBackground: string
			defaultIcon: string
			defaultBackgroundHover: string
			defaultIconHover: string
			selectedBackground: string
			selectedIcon: string
			selectedBackgroundHover: string
			selectedIconHover: string
			secondaryBackground: string
			secondaryIcon: string
			secondaryBorder: string
			secondaryBackgroundHover: string
			secondaryIconHover: string
			secondaryBorderHover: string
			errorBackground: string
			errorIcon: string
			errorBackgroundHover: string
			errorIconHover: string
			background: string
			icon: string
			backgroundHover: string
			iconHover: string
		}
		dialog: {
			background: string
			buttonsBackground: string
		}
		contextMenu: {
			background: string
			color: string
			colorHover: string
			backgroundHover: string
			backgroundDanger: string
			colorDanger: string
			backgroundDangerHover: string
			colorDangerHover: string
			icon: string
			iconHover: string
			backgroundSelected: string
			backgroundSelectedHover: string
			colorSelected: string
			colorSelectedHover: string
		}
		mainLabel: {
			color: string
		}
		table: {
			headerColor: string
			rowColor: string
			rowBackground: string
			borderColor: string
			priorityColor: string
			priorityBackground: string
			selectedColor: string
			selectedBackground: string
			dragIndicator: string
			selectedDragIndicator: string
		}
		schedulerColor: {
			blue: string
			yellow: string
			teal: string
			pink: string
			purple: string
			red: string
		}
		assetCard: {
			background: string
			backgroundSelected: string
			textMain: string
			textMainSelected: string
			textLight: string
			textLightSelected: string
			borderColor: string
			borderColorSelected: string
			previewBackgroundSelected: string
		}
		cardType: {
			playlistBackground: string
			playlistColor: string
			deviceBackground: string
			deviceColor: string
			packageBackground: string
			packageColor: string
		}
		list: {
			rowBackground: string
			rowBackgroundSelected: string
			rowBackgroundHover: string
			rowBackgroundSelectedHover: string
			headerBackground: string
			headerBackgroundSelected: string
			headerBackgroundHover: string
			headerBackgroundSelectedHover: string
		}
		message: {
			errorBackground: string
			errorColor: string
			warningBackground: string
			warningColor: string
			infoBackground: string
			infoColor: string
		}

		grantTypePill: {
			BrowserBackground: string
			BrowserNumberBackground: string
			BrowserColor: string
			STBBackground: string
			STBNumberBackground: string
			STBColor: string
			SignageBackground: string
			SignageNumberBackground: string
			SignageColor: string
			TabletBackground: string
			TabletNumberBackground: string
			TabletColor: string
			BedsideBackground: string
			BedsideNumberBackground: string
			BedsideColor: string
		}
		licenseStatus: {
			invalid: string
			expired: string
			expireSoon: string
			notStartedYet: string
			startSoon: string
			valid: string
		}
		switch: {
			track: string
			trackChecked: string
			thumb: string
			thumbChecked: string
		}
	}
}
