import { FC, useState } from 'react';
import { Button, Modal } from 'antd';
import styled from 'styled-components';
interface PostModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onClose: () => void;
  setStatus: (status: string | null) => void;
  status: string | null;
  addPost: () => void;
}

const PostModal: FC<PostModalProps> = ({
  isOpen,
  setIsOpen,
  onClose,
  setStatus,
  status,
  addPost,
}) => {
  if (!isOpen) return null;
  return (
    <>
      <Modal
        title='Create a post'
        centered
        open={isOpen}
        onOk={() => setIsOpen(false)}
        onCancel={() => setIsOpen(false)}
        footer={[
          <Button
            key='submit'
            type='primary'
            onClick={addPost}
            disabled={status === ''}
          >
            Post
          </Button>,
        ]}
      >
        <Input
          placeholder='What do you want to talk about?'
          value={status || ''}
          onChange={e => setStatus(e.target.value)}
        />
      </Modal>
    </>
  );
};

const Input = styled.input`
  border: none;
  background-color: #fff;
  outline: none;
  color: #020202;
  font-size: 16px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  width: 100%;
`;

export default PostModal;
