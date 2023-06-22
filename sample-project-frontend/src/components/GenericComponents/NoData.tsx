import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const NoData: FC<{ message?: string }> = ({ message }) => {
	const { t } = useTranslation()
	return <Container>{message ?? t('app.noData')}</Container>
}
