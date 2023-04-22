import React, { FC, useMemo, useState, useContext } from 'react';
import styled from 'styled-components';
import PostModal from '../Modal';
import { AddStatus, getStatus } from '../../../api/FirestoreAPI';
import { toast } from 'react-toastify';
import { StatusType } from '../../../types';
import PostsCard from '../PostsCard';

interface PostStatusProps {}

const PostStatus: FC<PostStatusProps> = ({}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState('' as string | null);
  const [allStatuses, setAllStatuses] = useState([] as StatusType[]);

  const handleAddPost = async () => {
    if (status) {
      await AddStatus(status);
      toast.success('Post added successfully');
      setStatus('');
      setIsModalOpen(false);
    } else {
      toast.error('Post cannot be empty');
    }
  };

  useMemo(() => {
    getStatus(setAllStatuses);
  }, []);

  return (
    <Container>
      <PostStatusBar>
        <PostButton
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Start a post
        </PostButton>
      </PostStatusBar>
      <PostModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onClose={() => setIsModalOpen(false)}
        setStatus={setStatus}
        status={status}
        addPost={handleAddPost}
      />

      <AllPosts>
        {allStatuses.length === 0 && <p>No posts yet</p>}
        {allStatuses.map((posts, index) => (
          <PostsCard key={posts.id} posts={posts} />
        ))}
      </AllPosts>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostStatusBar = styled.div`
  width: 80%;
  height: 100px;
  background-color: #fff;
  border: 1px solid #b7b7b7;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostButton = styled.button`
  width: 80%;
  height: 40px;
  cursor: pointer;
  text-align: left;
  background-color: #fff;
  border: 1px solid #b7b7b7;
  border-radius: 30px;
  padding: 0 18px;
  outline: none;
  font-family: 'system-ui', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #5e5e5e;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const AllPosts = styled.div`
  margin-top: 32px;
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export default PostStatus;
