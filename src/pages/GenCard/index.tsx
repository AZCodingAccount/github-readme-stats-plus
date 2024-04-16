import {
  Button,
  Card,
  Checkbox,
  Col,
  Empty,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Space,
  Switch,
  message,
} from 'antd';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import './index.css';

const CheckboxGroup = Checkbox.Group;

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [isShow, setIsShow] = useState(false); // 是否显示卡片
  const [isIcon, setIsIcon] = useState(true); // 是否启用图标
  const [submitting, setSubmitting] = useState(false); // 提交状态
  const initialValues = {
    info: [],
    username: 'AZCodingAccount',
    custom_title: '',
    language: 'cn',
    theme: '',
    icon: true,
    rank_icon: 'default',
    align: 'center',
  };

  let originUsername = null; // 上一个用户名
  let originLanguage = null; // 上一个语言
  let originTheme = null; // 上一个主题

  // 热门语言卡
  const initialValues2 = {
    username: originUsername ?? 'AZCodingAccount', // 用户名
    custom_title: '',
    language: originLanguage ?? 'cn', // 语言
    langs_count: 5, // 显示语言个数
    layout: '', // 布局
    theme: originTheme ?? '', // 主题
    align: 'center',
  };

  const [markdown, setMarkdown] = useState(
    `<img  height="250px"  align="center" src="https://github-readme-stats.vercel.app/api?username=AZCodingAccount&locale=cn&line_height=33" />`,
  );
  const [markdown2, setMarkdown2] = useState(
    `<img  height="250px"  align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=AZCodingAccount&locale=cn&line_height=33" />`,
  );
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
    setCheckedValues([]);
  };

  // Github热门信息统计卡
  const onSubmit = (value: any) => {
    setSubmitting(true);
    // 记录信息
    originUsername = value?.username;
    originLanguage = value?.language;
    originTheme = value?.theme;
    let res = `<img   align="${
      value?.align
    }" src="https://github-readme-stats.vercel.app/api?username=${value?.username}&locale=${
      value?.language
    }&line_height=33&show_icons=${value?.icon}&hide=${checkedValues.join(',')}&theme=${
      value?.theme
    }&rank_icon=${value?.rank_icon}"/>`;

    // 拼接自定义标题
    if (value?.custom_title !== '') {
      res =
        res.substring(0, res.length - 3) +
        `&custom_title=${value?.custom_title}` +
        res.substring(res.length - 3);
    }

    // 处理表单数据，拼接
    setMarkdown(res);
    // 等待时间渲染
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
    setIsShow(true);
  };

  // 热门语言卡
  const onLanguageSubmit = (value: any) => {
    setSubmitting(true);
    // 处理表单数据，拼接
    let res = `<img   align="${value?.align}" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${value?.username}&locale=${value?.language}&line_height=33&theme=${value?.theme}&langs_count=${value?.langs_count}"/>`;
    // 拼接布局
    if (value?.layout !== '') {
      res =
        res.substring(0, res.length - 3) +
        `&layout=${value?.layout}` +
        res.substring(res.length - 3);
    }
    // 拼接自定义标题
    if (value?.custom_title !== '') {
      res =
        res.substring(0, res.length - 3) +
        `&custom_title=${value?.custom_title}` +
        res.substring(res.length - 3);
    }
    setMarkdown2(res);
    // 等待时间渲染
    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
    setIsShow(true);
  };

  const [cardType, setCardType] = useState('githubInfo');
  // 更换卡片显示
  const handleSelectChange = (value: string) => {
    setIsShow(false);
    setCardType(value);
  };

  const [messageApi, contextHolder] = message.useMessage();

  return (
    <div>
      {contextHolder}
      <Row gutter={24}>
        {/* 表单输入范围 */}
        <Col span={12}>
          <Card
            title="输入配置"
            extra={
              <Select
                defaultValue="githubInfo"
                style={{ width: 200 }}
                onChange={handleSelectChange}
                options={[
                  { value: 'githubInfo', label: 'Github信息统计卡' },
                  { value: 'hotLanguage', label: '热门语言卡' },
                ]}
              />
            }
          >
            {/* Github统计卡 */}
            {cardType === 'githubInfo' && (
              <Form
                labelAlign="left"
                labelCol={{ span: 6 }}
                form={form}
                initialValues={initialValues}
                onFinish={onSubmit}
              >
                {/* 1: 用户名 */}
                <Form.Item label="Github用户名" name="username">
                  <Input placeholder="请输入用户名" />
                </Form.Item>
                {/* 自定义标题 */}
                <Form.Item label="卡片标题(非必填)" name="custom_title">
                  <Input placeholder="请输入卡片标题" />
                </Form.Item>
                {/* 2: 隐藏部分信息 */}
                <Form.Item label="隐藏信息(非必选)" name="info" valuePropName="checked">
                  <Space>
                    <CheckboxGroup onChange={onChange} value={checkedValues}>
                      <Checkbox value="stars">Star</Checkbox>
                      <Checkbox value="commits">Commit</Checkbox>
                      <Checkbox value="prs">prs</Checkbox>
                      <Checkbox value="issues">issues</Checkbox>
                      <Checkbox value="contribs">contribs</Checkbox>
                    </CheckboxGroup>
                  </Space>
                </Form.Item>
                {/* 3: 更换语言 */}
                <Form.Item label="选择语言" name="language">
                  <Radio.Group buttonStyle="solid">
                    <Radio.Button value="cn">中文</Radio.Button>
                    <Radio.Button value="zh-tw">中文(台湾)</Radio.Button>
                    <Radio.Button value="en">英语</Radio.Button>
                    <Radio.Button value="ja">日语</Radio.Button>
                    <Radio.Button value="ru">俄语</Radio.Button>
                  </Radio.Group>
                </Form.Item>
                {/* 4: 是否启用图标 */}
                <Form.Item label="是否启用图标" name="icon">
                  <Switch defaultChecked={isIcon} onChange={onSwitchChange} />
                </Form.Item>
                {/* 5: 更换主题 */}
                <Form.Item label="选择主题" name="theme">
                  <Radio.Group name="themeGroup">
                    <Radio value={''}>plain</Radio>
                    <Radio value={'dark'}>dark</Radio>
                    <Radio value={'dracula'}>dracula</Radio>
                    <Radio value={'radical'}>radical</Radio>
                  </Radio.Group>
                </Form.Item>
                {/* 6: 排名图标 */}
                <Form.Item label="选择右边图标" name="rank_icon">
                  <Radio.Group name="iconGroup">
                    <Radio value={'default'}>default</Radio>
                    <Radio value={'percentile'}>percentile</Radio>
                    <Radio value={'github'}>github</Radio>
                  </Radio.Group>
                </Form.Item>
                {/* 7：对齐方式 */}
                <Form.Item label="对齐方式" name="align">
                  <Radio.Group buttonStyle="solid">
                    <Radio.Button value="left">左对齐</Radio.Button>
                    <Radio.Button value="center">居中</Radio.Button>
                    <Radio.Button value="right">右对齐</Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item>
                  <Space>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={submitting}
                      disabled={submitting}
                    >
                      预览
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                      重置
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
            )}
            {/* 热门语言卡 */}
            {cardType === 'hotLanguage' && (
              <Form
                labelAlign="left"
                labelCol={{ span: 6 }}
                form={form}
                initialValues={initialValues2}
                onFinish={onLanguageSubmit}
              >
                {/* 1: 用户名 */}
                <Form.Item label="Github用户名" name="username">
                  <Input placeholder="请输入用户名" />
                </Form.Item>
                {/* 自定义标题 */}
                <Form.Item label="卡片标题(非必填)" name="custom_title">
                  <Input placeholder="请输入卡片标题" />
                </Form.Item>
                {/* 2: 更换语言 */}
                <Form.Item label="选择语言" name="language">
                  <Radio.Group buttonStyle="solid">
                    <Radio.Button value="cn">中文</Radio.Button>
                    <Radio.Button value="zh-tw">中文(台湾)</Radio.Button>
                    <Radio.Button value="en">英语</Radio.Button>
                    <Radio.Button value="ja">日语</Radio.Button>
                    <Radio.Button value="ru">俄语</Radio.Button>
                  </Radio.Group>
                </Form.Item>
                {/* 3: 选择个数 */}
                <Form.Item label="显示的语言个数" name="langs_count">
                  <InputNumber min={1} max={20} />
                </Form.Item>
                {/* 4：选择布局 */}
                <Form.Item label="选择布局" name="layout">
                  <Radio.Group name="themeGroup">
                    <Radio value={''}>普通布局</Radio>
                    <Radio value={'compact'}>紧凑式</Radio>
                    <Radio value={'pie'}>饼图</Radio>
                    <Radio value={'donut'}>甜甜圈</Radio>
                    <Radio value={'donut-vertical'}>垂直甜甜圈</Radio>
                  </Radio.Group>
                </Form.Item>
                {/* 5: 更换主题 */}
                <Form.Item label="选择主题" name="theme">
                  <Radio.Group name="themeGroup">
                    <Radio value={''}>plain</Radio>
                    <Radio value={'dark'}>dark</Radio>
                    <Radio value={'dracula'}>dracula</Radio>
                    <Radio value={'radical'}>radical</Radio>
                  </Radio.Group>
                </Form.Item>
                {/* 6：对齐方式 */}
                <Form.Item label="对齐方式" name="align">
                  <Radio.Group buttonStyle="solid">
                    <Radio.Button value="left">左对齐</Radio.Button>
                    <Radio.Button value="center">居中</Radio.Button>
                    <Radio.Button value="right">右对齐</Radio.Button>
                  </Radio.Group>
                </Form.Item>
                <Form.Item>
                  <Space>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={submitting}
                      disabled={submitting}
                    >
                      预览
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                      重置
                    </Button>
                  </Space>
                </Form.Item>
              </Form>
            )}
          </Card>
        </Col>
        {/*  卡片渲染范围 */}
        <Col span={12}>
          <Card
            title="预览结果"
            extra={
              <Space>
                <Button
                  type="primary"
                  disabled={!isShow}
                  onClick={() => {
                    navigator.clipboard.writeText(cardType === 'githubInfo' ? markdown : markdown2);
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
            {isShow ? (
              <ReactMarkdown rehypePlugins={[rehypeRaw]} className="card">
                {cardType === 'githubInfo' ? markdown : markdown2}
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
      <br />
      <Row gutter={24}>
        <Col span={24}>
          <Card className="card">
            本页面基于 开源项目github-readme-stats ，如需更多配置信息，请访问
            <a
              href="https://github.com/anuraghazra/github-readme-stats"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github README{' '}
            </a>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default App;
