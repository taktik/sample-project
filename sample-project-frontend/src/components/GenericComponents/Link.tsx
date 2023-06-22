import { Link as LinkMui, LinkProps, Tooltip } from '@mui/material'
import styled from 'styled-components'
import { FontFamily, FontSizeNormal } from './GenericStyles/GenericStyles'
import { Loader } from './Loader'
import { RenderIf } from './RenderIf'

interface GenericLinkProps extends LinkProps {
	tooltipText?: string
	loading?: boolean
	children: string
}

export const StyledLink = styled(LinkMui)`
	${FontFamily};
	${FontSizeNormal};
	letter-spacing: 0.01em;
	text-transform: unset;
	line-height: 1;
	color: ${({ theme }) => theme.primaryMain};
	cursor: pointer;
	position: relative;
	text-decoration: none;
	&::after {
		${FontFamily};
		${FontSizeNormal};
		content: attr(data-text);
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 0;
		text-decoration: underline;
		transition: width 0.18s cubic-bezier(0.24, 0.66, 0.81, 0.55);
		z-index: 1;
		color: ${({ theme }) => theme.primaryDark};
		overflow: hidden;
		white-space: nowrap;
	}
	&:hover {
		color: ${({ theme }) => theme.primaryDark};
		&:after {
			width: 100%;
		}
	}
`

export const Link = ({ tooltipText, loading, children, ...rest }: GenericLinkProps) => {
	const link = (
		<StyledLink data-text={children} {...rest}>
			<RenderIf condition={!loading}>{children}</RenderIf>
			<RenderIf condition={!!loading}>
				<Loader color={'#f20'} />
			</RenderIf>
		</StyledLink>
	)
	return tooltipText ? <Tooltip title={tooltipText}>{link}</Tooltip> : link
}
