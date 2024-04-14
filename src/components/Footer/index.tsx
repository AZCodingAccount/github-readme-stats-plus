import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/AZCodingAccount/github-readme-stats-plus',
          blankTarget: true,
        },
      ]}
      copyright="AlbertZhang 2024"
    />
  );
};

export default Footer;
