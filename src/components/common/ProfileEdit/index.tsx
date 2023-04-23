import { FC, useContext, useRef, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { editProfile } from '../../../api/FirestoreAPI';
import { UserContext } from '../../../context/UserContext';

interface ProfileEditProps {
  onClose: () => void;
}

type inputValues = {
  username: string;
  headline: string;
  location: string;
  company: string;
  college: string;
};

const ProfileEdit: FC<ProfileEditProps> = ({ onClose }) => {
  const { currentUser } = useContext(UserContext);

  const userID = currentUser?.userID;

  const modalRef = useRef<HTMLDivElement>(null);
  const [inputValues, setInputValues] = useState<inputValues>({
    username: '',
    headline: '',
    location: '',
    company: '',
    college: '',
  });

  function handleCloseModal(event: any) {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      // clicked outside of modal, close modal
      onClose();
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  return (
    <Container>
      <Overlay onClick={handleCloseModal} />
      <ModalBox ref={modalRef}>
        <ModalHeader>
          <EditIntro>Edit intro</EditIntro>
          <Close>
            <AiOutlineClose onClick={onClose} />
          </Close>
        </ModalHeader>
        <ModalContent>
          <Form>
            <Input
              type='text'
              placeholder='Name'
              name='username'
              value={inputValues.username}
              onChange={handleInputChange}
            />
            <Input
              type='text'
              placeholder='Headline'
              name='headline'
              value={inputValues.headline}
              onChange={handleInputChange}
            />
            <Input
              type='text'
              placeholder='Location'
              name='location'
              value={inputValues.location}
              onChange={handleInputChange}
            />
            <Input
              type='text'
              placeholder='Company'
              name='company'
              value={inputValues.company}
              onChange={handleInputChange}
            />
            <Input
              type='text'
              placeholder='College'
              name='college'
              value={inputValues.college}
              onChange={handleInputChange}
            />
          </Form>
          <Button onClick={() => editProfile(inputValues, userID)}>Save</Button>
        </ModalContent>
      </ModalBox>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
`;

const ModalContent = styled.div`
  padding: 20px;
  text-align: center;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const Close = styled.div`
  width: 40px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    cursor: pointer;
    font-size: 24px;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    transform: scale(1.1);
  }
`;

const EditIntro = styled.h3`
  font-family: system-ui;
  color: rgba(0, 0, 0, 0.9);
  font-size: 24px;
  font-weight: 400;
`;

const Form = styled.form`
  display: grid;
  grid-gap: 20px;
  margin-top: 20px;
`;

const Input = styled.input`
  height: 20px;
  padding: 28px;
  background-color: white;
  outline: none;
  border: 1px solid #212121;
  color: #212121;
  border-radius: 4px;
  font-family: system-ui;
  font-size: 16px;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.linkedInBlue1};
  }

  &::placeholder {
    font-family: system-ui;
    font-size: 16px;
  }
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.linkedInBlue1};
  color: white;
  border: none;
  border-radius: 4px;
  font-family: system-ui;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  padding: 10px 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0a66c2;
  }
`;

export default ProfileEdit;
