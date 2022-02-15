import * as React from "react"
import { jsx, css } from "@emotion/react"
import HomeContent from "../components/home-content"
import ImageHotel from "../components/image-hotel"
import Layout from "../components/layout"
import useRooms from "../hooks/useRooms"
import RoomPreview from "../components/room-preview"
import { Room } from '../../@types/types'
import styled from '@emotion/styled';

const RoomList = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;
  text-align: justify;
  
  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;

const IndexPage = () => {

  const rooms = useRooms()
  return (
    <Layout>
      <ImageHotel />
      <HomeContent />

      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >Our rooms</h2>

      <RoomList>
        {rooms.map((room: Room) => (
          <RoomPreview
            key={room.id}
            title={room.title}
            content={room.content}
            image={room.image}
            slug={room.slug}
          />
        ))}
      </RoomList>
    </Layout>
  )
}

export default IndexPage
