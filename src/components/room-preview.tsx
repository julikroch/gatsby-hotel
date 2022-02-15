import React from 'react'
import { Room } from '../../@types/types'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Button = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62,80, .85);
    width: 100%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    font-weight: 700;
    border: 1px solid rgba(44,62,80, .85);

    &:hover {
        border: 1px solid rgba(44,62,80, .85);
        color: rgba(44,62,80, .85);
        background-color: #fff;
        transition: ease .3s;
    }
`

const RoomPreview = ({ title, content, slug, image }: Room) => {
    return (
        <div
            css={css`
                border: 1px solid #e1e1e1;
                margin-bottom:2rem;
            `}
        >
            <Image fluid={image.fluid} />
            <div
                css={css`
                    padding: 3rem;
                `}
            >
                <h3
                    css={css`
                        font-size: 3rem;
                    `}
                >{title}</h3>
                <p>{content}</p>

                <Button to={slug}>Go to room</Button>
            </div>
        </div>
    )
}

export default RoomPreview