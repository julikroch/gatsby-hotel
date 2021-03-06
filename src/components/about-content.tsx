import React, { FunctionComponent } from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const AboutContent: FunctionComponent = () => {

    const Content = styled.main`
    padding-top: 4rem;
    padding-bottom: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    text-align: justify;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 3rem;
    }
    p {
        line-height: 2;
        margin-top: 2rem;
    }
`;

    const result = useStaticQuery(graphql` query {
        allDatoCmsPage(filter: { slug: { eq: "about" }}) {
            nodes {
                title
                content
                image {
                    fluid( maxWidth: 1200) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }`);

    const { title, content, image: { fluid } } = result.allDatoCmsPage.nodes[0];

    return (
        <>
            <h2
                css={css`
                    margin-top: 4rem;
                    text-align: center;
                    font-size: 4rem;
                `}
            >{title}</h2>

            <Content>
                <p>{content}</p>
                <Image fluid={fluid} />
            </Content>
        </>
    );
}

export default AboutContent