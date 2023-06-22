import React from 'react'

interface IProps {
	condition: boolean
	children: React.ReactNode
}

const RenderIf = ({ condition, children }: IProps) => {
	return <>{condition ? children : null}</>
}

export { RenderIf }
