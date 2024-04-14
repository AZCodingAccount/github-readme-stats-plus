import { GithubOutlined } from '@ant-design/icons';
import '@umijs/max';
export type SiderTheme = 'light' | 'dark';
export const Question = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: 42,
        height: 42,
        color: '#000000',
      }}
      onClick={() => {
        window.open('https://github.com/AZCodingAccount/github-readme-stats-plus');
      }}
    >
      <GithubOutlined style={{ fontSize: '32px', backgroundColor: 'white' }} />
    </div>
  );
};
