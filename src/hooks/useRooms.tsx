import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Room } from '../../@types/types'

const useRooms = () => {

  const data = useStaticQuery(graphql`
        query {
            allDatoCmsRoom {
            nodes {
              title
              id
              slug
              content
              image {
                fluid(maxWidth:1200){
                    ...GatsbyDatoCmsFluid
                }
              }
            }
          }
        }
    `)

  return data.allDatoCmsRoom.nodes.map((room: Room) => {

    const { title, id, content, image, slug } = room

    return { title, id, content, image, slug }
  })
}

export default useRooms;