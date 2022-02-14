import React, { FunctionComponent } from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Text = styled.div`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    text-align: justify;

    @media(min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 100px;
    }
    
    p {
        line-height: 2;
    }
`;


const HomeContent: FunctionComponent = () => {
    const info = useStaticQuery(graphql`
        query {
            allDatoCmsPage(filter: { slug: { eq: "home" }}) {
                nodes {
                    title
                    content
                    image {
                        fluid {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `);

    const { title, content, image: { fluid } } = info.allDatoCmsPage.nodes[0];
    return (
        <>
            <h2
                css={css`
                    text-align: center;
                    font-size: 4rem;
                    margin-top: 4rem;
               `}
            >{title}</h2>
            <Text>
                <p>{content}</p>
                <Image fluid={fluid} alt={title} />
            </Text>
        </>
    );
}

export default HomeContent