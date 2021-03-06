import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

import {Link} from 'react-router-dom';
import img from '../../../img/test2.jpg';
import UserThumbnail from '../UserThumbnail';

const Envelope = styled.div`
  font-size: 2rem;
  background-color: white;
  margin: 1rem;
  max-height: 35rem;
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (min-width: 1920px) {
    width: calc(20% - 2rem);
  }
  @media screen and (max-width: 1920px) {
    width: calc(25% - 2rem);
  }

  @media screen and (max-width: 1500px) {
    width: calc(33.333% - 2rem);
  }

  @media screen and (max-width: 1200px) {
    width: calc(50% - 2rem);
  }
  @media screen and (max-width: 900px) {
    width: calc(100% - 2rem);
    max-height: 43rem;
  }
`;
const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  @media screen and (max-width: 900px) {
    max-height: 140%;
  }
`;
const PostBrief = styled.div`
  flex: 1;
  padding: 2rem 1.3rem;
  z-index: 3;
  position: relative;
`;
const PostInfo = styled.div`
  height: 9rem;
  display: block;
  padding-bottom: 1rem;
  border-bottom: 1px #d8d8d8 solid;
`;
const UserLink = styled(Link)`
  color: #5478e4;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 500;
  font-family: 'Acme';
`;
const Title = styled.div`
  overflow-wrap: break-word;
  font-size: 1.7rem;
  font-family: 'Acme';
  font-weight: 500;
`;
const CommentCount = styled.div`
  margin-left: 0.5rem;
  font-size: 1.1rem;
  color: #6b7485;
  font-family: 'Acme';
`;
const BodyContainer = styled.div`
  height: 4.5rem;
  margin-top: 1.5rem;
  display: block;
  display: -webkit-box;
  font-size: 1.5rem;
  word-break: break-all;
  line-height: 1.5rem;
  overflow-y: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #505050;
  font-family: 'Open Sans', sans-serif;
`;

const TimeContainer = styled.div`
  font-size: 1.1rem;
  color: #6b7485;
  font-family: 'Acme', 'Fjalla One', 'Oswald', 'Open Sans', sans-serif;
`;

const Post = ({
  post: {id, author, body, category, comments, createdAt, title, voteScore},
}) => {
  const dateFormat = new Date(createdAt);
  return (
    <Envelope>
      <div style={{display: 'flex', flex: 1, zIndex: 3, position: 'relative'}}>
        <Img src={img} alt="" />
      </div>
      <UserThumbnail />
      <PostBrief>
        <PostInfo>
          <UserLink to={`/${id}`}>{author}</UserLink>
          <Title>{title}</Title>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              overflowWrap: 'break-word',
            }}
          >
            <TimeContainer>{`${dateFormat.getFullYear()}-${dateFormat.getMonth()}-${dateFormat.getDay()}`}</TimeContainer>
            <CommentCount>{`${comments.length} Comments`}</CommentCount>
          </div>
        </PostInfo>
        <BodyContainer>{body}</BodyContainer>
      </PostBrief>
    </Envelope>
  );
};

export default Post;
