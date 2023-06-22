import styled from 'styled-components'

interface ListViewProps {
	children?: JSX.Element
}

const Container = styled.div`
	flex-grow: 1;
	overflow-y: auto;
	width: 100%;
`

export const ListView = ({ children }: ListViewProps) => {
	return <Container>{children}</Container>
}
