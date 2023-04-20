import { FC } from 'react';
import { Space, Spin } from 'antd';

interface LoaderProps {}

const Loader: FC<LoaderProps> = ({}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Space size='middle'>
        <Spin size='large' />
      </Space>
    </div>
  );
};

export default Loader;
