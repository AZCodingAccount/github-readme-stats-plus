import { Button, Card, Col, Form, Input, Row, Space, message } from 'antd';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import './index.css';

const App: React.FC = () => {
  const [form] = Form.useForm();

  const [submitting, setSubmitting] = useState(false); // 显示加载状态

  const initialValues = {
    username: 'AZCodingAccount',
    wakatimeKey: '018e0793-354b-42d4-8c6d-8dba8d71ab4f',
  };

  const [messageApi, contextHolder] = message.useMessage();

  // 集成第三方统计信息 https://github-readme-streak-stats.herokuapp.com
  const [streak_stats, setStreak_stats] = useState(`<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-streak-stats.herokuapp.com/?user=AZCodingAccount&theme=dark&hide_border=true" />
  <source media="(prefers-color-scheme: light)" srcset="https://github-readme-streak-stats.herokuapp.com/?user=AZCodingAccount&theme=light&hide_border=true" />
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=AZCodingAccount&theme=default&hide_border=true" />
</picture>`);

  const [wakatime, setWakaTime] =
    useState(`[![wakatime](https://wakatime.com/badge/user/018e0793-354b-42d4-8c6d-8dba8d71ab4f.svg)](https://wakatime.com/@018e0793-354b-42d4-8c6d-8dba8d71ab4f)
`);

  const [visitors, setVisitors] = useState(
    `![](https://komarev.com/ghpvc/?username=AZCodingAccount&abbreviated=true)`,
  );
  const [trophy, setTrophy] = useState(
    `<div text-align="center"><img src="https://github-profile-trophy.vercel.app/?username=AZCodingAccount&theme=gruvbox&row=1&column=5&no-frame=true&no-bg=true" /><br/></div>`,
  );

  const onReset = () => {
    form.resetFields();
  };

  const onSubmit = (values: any) => {
    console.log(values);
    setSubmitting(true);

    // 修改用户名和wakatime key
    const { username, wakatimeKey } = values;
    // 修改1
    setWakaTime(
      `[![wakatime](https://wakatime.com/badge/user/${wakatimeKey}.svg)](https://wakatime.com/@${wakatimeKey})`,
    );
    // 修改2
    setVisitors(`![](https://komarev.com/ghpvc/?username=${username}&abbreviated=true)`);
    // 修改3
    setStreak_stats(`<picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true" />
    <source media="(prefers-color-scheme: light)" srcset="https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=light&hide_border=true" />
    <img src="https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=default&hide_border=true" />
  </picture>`);
    // 修改4
    setTrophy(
      `<div ><img  src="https://github-profile-trophy.vercel.app/?username=${username}&theme=gruvbox&row=1&column=5&no-frame=true&no-bg=true" /><br/></div>`,
    );
    console.log(visitors);
    console.log(streak_stats);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  return (
    <div>
      {contextHolder}
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        {/* 输入内容 */}
        <Row gutter={24}>
          {/* 表单输入范围 */}
          <Col span={24}>
            <Card title="输入信息点击一键生成即可生成第三方统计信息" className="card">
              <Form
                labelAlign="left"
                // labelCol={{ span: 8 }}
                layout="inline"
                form={form}
                initialValues={initialValues}
                onFinish={onSubmit}
              >
                <Form.Item label="Github用户名" name="username">
                  <Input placeholder="请输入用户名" />
                </Form.Item>
                <Form.Item label="wakatime key" name="wakatimeKey">
                  <Input style={{ width: '600px' }} placeholder="请输入key" />
                </Form.Item>
                <Form.Item>
                  <Space>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={submitting}
                      disabled={submitting}
                    >
                      一键生成
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                      重置
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          {/* 第一个信息: wakatime https://wakatime.com  */}
          <Col span={12}>
            <Card
              title={
                <a href="https://wakatime.com" target="_blank" rel="noreferrer">
                  wakatime
                </a>
              }
              extra={
                <Space>
                  <Button
                    type="primary"
                    onClick={() => {
                      navigator.clipboard.writeText(wakatime);
                      messageApi.open({
                        type: 'success',
                        content: '复制成功',
                        duration: 3,
                      });
                    }}
                  >
                    复制代码
                  </Button>
                </Space>
              }
            >
              <ReactMarkdown rehypePlugins={[rehypeRaw]} className="card">
                {wakatime}
              </ReactMarkdown>
            </Card>
          </Col>
          {/* 第二个信息: visitors https://komarev.com/ghpvc  */}
          <Col span={12}>
            <Card
              title={
                <a href="https://komarev.com/ghpvc" target="_blank" rel="noreferrer">
                  visitors
                </a>
              }
              extra={
                <Space>
                  <Button
                    type="primary"
                    onClick={() => {
                      navigator.clipboard.writeText(visitors);
                      messageApi.open({
                        type: 'success',
                        content: '复制成功',
                        duration: 3,
                      });
                    }}
                  >
                    复制代码
                  </Button>
                </Space>
              }
            >
              <ReactMarkdown rehypePlugins={[rehypeRaw]} className="card">
                {visitors}
              </ReactMarkdown>
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          {/* 第三个信息: streak_stats https://github-readme-streak-stats.herokuapp.com  */}
          <Col span={12}>
            <Card
              title={
                <a
                  href="https://github-readme-streak-stats.herokuapp.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  streak
                </a>
              }
              extra={
                <Space>
                  <Button
                    type="primary"
                    onClick={() => {
                      navigator.clipboard.writeText(streak_stats);
                      messageApi.open({
                        type: 'success',
                        content: '复制成功',
                        duration: 3,
                      });
                    }}
                  >
                    复制代码
                  </Button>
                </Space>
              }
            >
              <ReactMarkdown rehypePlugins={[rehypeRaw]} className="card">
                {streak_stats}
              </ReactMarkdown>
            </Card>
          </Col>
          {/* 第四个信息:  https://github-profile-trophy  */}
          <Col span={12}>
            <Card
              title={
                <a
                  href="https://github-readme-streak-stats.herokuapp.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  trophy
                </a>
              }
              extra={
                <Space>
                  <Button
                    type="primary"
                    onClick={() => {
                      navigator.clipboard.writeText(trophy);
                      messageApi.open({
                        type: 'success',
                        content: '复制成功',
                        duration: 3,
                      });
                    }}
                  >
                    复制代码
                  </Button>
                </Space>
              }
            >
              <ReactMarkdown rehypePlugins={[rehypeRaw]} className="card">
                {trophy}
              </ReactMarkdown>
            </Card>
          </Col>
        </Row>
      </Space>
    </div>
  );
};

export default App;
