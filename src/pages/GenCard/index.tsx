import { Button, Card, Checkbox, Col, Empty, Form, Input, Radio, Row, Space, Switch } from 'antd';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import './index.css';

const CheckboxGroup = Checkbox.Group;

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [isShow, setIsShow] = useState(false); // 是否显示卡片
  // 是否启用图标
  const [isIcon, setIsIcon] = useState(true);

  const initialValues = {
    info: [],
    username: 'AlbertZhang',
  };

  const [checkedValues, setCheckedValues] = useState([]); // 隐藏的信息

  const onChange = (checkedValues: any) => {
    setCheckedValues(checkedValues);
  };
  // 是否启用图标
  const onSwitchChange = (checked: boolean) => {
    setIsIcon(checked);
  };

  const onReset = () => {
    form.resetFields();
  };
  // 用户点击提交显示卡片
  const onSubmit = (value: any) => {
    console.log(checkedValues);
    console.log(value);

    setIsShow(true);
  };

  const markdown = `
  <img  height="250px"  align="center" src="https://github-readme-stats.vercel.app/api?username=AZCodingAccount&locale=cn&line_height=33" />
    `;
  return (
    <div>
      <Row gutter={24}>
        {/* 表单输入范围 */}
        <Col span={12}>
          <Card title="输入配置" extra={<a href="#">More</a>}>
            <Form form={form} initialValues={initialValues} onFinish={onSubmit}>
              {/* 1: 用户名 */}
              <Form.Item label="Github用户名" name="username">
                <Input placeholder="请输入用户名" />
              </Form.Item>
              {/* 2: 隐藏部分信息 */}
              <Form.Item label="隐藏信息" name="info" valuePropName="checked">
                <Space>
                  <CheckboxGroup onChange={onChange} value={checkedValues}>
                    <Checkbox value="Star">Star</Checkbox>
                    <Checkbox value="Commit">Commit</Checkbox>
                    <Checkbox value="prs">prs</Checkbox>
                    <Checkbox value="issues">issues</Checkbox>
                    <Checkbox value="contribs">contribs</Checkbox>
                  </CheckboxGroup>
                </Space>
              </Form.Item>
              {/* 3: 更换语言 */}
              <Form.Item label="选择语言" name="language">
                <Radio.Group defaultValue="cn" buttonStyle="solid">
                  <Radio.Button value="cn">中文</Radio.Button>
                  <Radio.Button value="zh-tw">中文(台湾)</Radio.Button>
                  <Radio.Button value="en">英语</Radio.Button>
                  <Radio.Button value="ja">日语</Radio.Button>
                  <Radio.Button value="ru">俄语</Radio.Button>
                </Radio.Group>{' '}
              </Form.Item>
              {/* 4: 是否启用图标 */}
              <Form.Item label="是否启用图标" name="icon">
                <Switch defaultChecked={isIcon} onChange={onSwitchChange} />
              </Form.Item>
              {/* 5: 更换主题 */}
              <Form.Item label="选择主题" name="theme">
                <Radio.Group name="themeGroup" defaultValue={'plain'}>
                  <Radio value={'plain'}>plain</Radio>
                  <Radio value={'dark'}>dark</Radio>
                  <Radio value={'dracula'}>dracula</Radio>
                  <Radio value={'radical'}>radical</Radio>
                </Radio.Group>
              </Form.Item>
              {/* 6：对齐方式 */}

              <Form.Item>
                <Space>
                  <Button type="primary" htmlType="submit">
                    预览
                  </Button>
                  <Button htmlType="button" onClick={onReset}>
                    重置
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        {/*  卡片渲染范围 */}
        <Col span={12} className="card">
          <Card title="预览结果">
            {isShow ? (
              <ReactMarkdown skipHtml={false} rehypePlugins={[rehypeRaw]}>
                {markdown}
              </ReactMarkdown>
            ) : (
              <Empty
                description={
                  <div>
                    <span>请先设置您的配置并点击【预览】</span>
                  </div>
                }
              />
            )}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default App;
