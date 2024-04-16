import type { ColorPickerProps, GetProp } from 'antd';
import {
  Button,
  Card,
  Col,
  ColorPicker,
  Empty,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Space,
  message,
} from 'antd';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import './index.css';

const App: React.FC = () => {
  const [form] = Form.useForm();

  const [isShow, setIsShow] = useState(false); // 是否显示卡片

  const [submitting, setSubmitting] = useState(false); // 显示加载状态

  const initialValues = {
    firstContent: 'github',
    lastContent: 'AZCodingAccount',
    staticColor: '#1677ff',
    style: 'flat',
    align: 'center',
    link: 'https://github.com/AZCodingAccount',
  };

  const initialDynamicValues = {
    type: 'userAll',
    username: 'AZCodingAccount',
    repoName: 'iTime',
    style: 'flat',
    logoColor: '#1677ff',
    labelColor: 'rgb(89, 89, 89)',
    color: 'rgb(3, 126, 187)',
    align: 'center',
  };

  const [staticBadgeUrl, setStaticBadgeUrl] = useState(
    `<a href="https://github.com/AZCodingAccount" target="_blank><img   align="center" src="https://img.shields.io/badge/github-AZCodingAccount-#1677ff"/></a>`,
  );
  const [dynamicBadgeUrl, setDynamicBadgeUrl] = useState(
    `<div style="display: flex; align-items: center; justify-content: center; margin: 10px">
    <img
      align="center"
      src="https://img.shields.io/github/stars/AZCodingAccount?style=flat"
      style="margin: 0 5px"
    /><img
      align="center"
      src="https://img.shields.io/github/followers/AZCodingAccount?style=flat"
      style="margin: 0 5px"
    />
  </div>`,
  );

  const [cardType, setCardType] = useState('staticBadge');
  // 更换卡片显示
  const handleSelectChange = (value: string) => {
    setIsShow(false);
    setCardType(value);
  };

  const [messageApi, contextHolder] = message.useMessage();

  type Color = GetProp<ColorPickerProps, 'value'>;

  const [colorHex, setColorHex] = useState<Color>('#1677ff');

  // 静态徽章的颜色
  let hexString = React.useMemo<string>(
    () => (typeof colorHex === 'string' ? colorHex : colorHex?.toHexString()),
    [colorHex],
  );

  //   生成静态徽章
  const onSubmit = (value: any) => {
    setSubmitting(true);
    let { firstContent, lastContent, align, link, style } = value;

    // 预处理

    hexString = hexString.replace('#', '%23');
    firstContent = firstContent.replace(' ', '_');
    lastContent = lastContent.replace(' ', '_');

    setStaticBadgeUrl(
      `<a href="${link}" target="_blank"><img  align=${align} src="https://img.shields.io/badge/${firstContent}-${lastContent}-${hexString}?style=${style}"/></a>`,
    );
    if (lastContent === '') {
      setStaticBadgeUrl(
        `<img  align=${align} src="https://img.shields.io/badge/${firstContent}-${hexString}"/>`,
      );
    }

    setTimeout(() => {
      setSubmitting(false);
    }, 2000);
    setIsShow(true);
  };

  const onReset = () => {
    form.resetFields();
    setColorHex('#1677ff');
  };
  // 生成动态徽章
  const onDynamicSubmit = (value: any) => {
    console.log(dynamicBadgeUrl);

    setSubmitting(true);
    setIsShow(false);

    value.logoColor =
      typeof value?.logoColor === 'string'
        ? value?.logoColor?.replace('#', '%23')
        : value?.logoColor.toHexString()?.replace('#', '%23');
    value.labelColor =
      typeof value?.labelColor === 'string'
        ? value?.labelColor?.replace('#', '%23')
        : value?.labelColor.toHexString()?.replace('#', '%23');
    value.color =
      typeof value?.color === 'string'
        ? value?.color?.replace('#', '%23')
        : value?.color.toHexString()?.replace('#', '%23');

    // 处理url

    if (value?.type === 'repoAll') {
      // 生成仓库全部
      setDynamicBadgeUrl(`<div style="display: flex; align-items: center; justify-content: center; margin: 10px">
        <img
          align=${value?.align}
          src="https://img.shields.io/github/stars/${value?.username}/${value?.repoName}?style=${value?.style}&logoColor=${value?.logoColor}&labelColor=${value?.labelColor}&color=${value?.color}"
          style="margin: 0 5px"
        /><img
          align=${value?.align}
          src="https://img.shields.io/github/watchers/${value?.username}/${value?.repoName}?style=${value?.style}&logoColor=${value?.logoColor}&labelColor=${value?.labelColor}&color=${value?.color}""
          style="margin: 0 5px"
        />
        <img
          align=${value?.align}
          src="https://img.shields.io/github/forks/${value?.username}/${value?.repoName}?style=${value?.style}&logoColor=${value?.logoColor}&labelColor=${value?.labelColor}&color=${value?.color}"
          style="margin: 0 5px"
        />
      </div>`);
    } else if (value?.type !== 'userAll') {
      console.log(value.align);

      // 普通的生成url
      if (value?.type === 'stars' || value?.type === 'followers') {
        // 有关用户的
        setDynamicBadgeUrl(` <img
            align=${value?.align}
            src="https://img.shields.io/github/${value?.type}/${value?.username}?style=${value?.style}&logoColor=${value?.logoColor}&labelColor=${value?.labelColor}&color=${value?.color}"
            style="margin: 0 5px"
          />`);
      } else {
        // 生成仓库的
        // 处理type
        const type = value?.type.replace('repo', '').toLowerCase();
        setDynamicBadgeUrl(` <img
          align=${value?.align}
          src="https://img.shields.io/github/${type}/${value?.username}/${value?.repoName}?style=${value?.style}&logoColor=${value?.logoColor}&labelColor=${value?.labelColor}&color=${value?.color}"
          style="margin: 0 5px"
        />`);
      }
    } else {
      setDynamicBadgeUrl(`<div style="display: flex; align-items: center; justify-content: center; margin: 10px">
        <img
          align=${value?.align}
          src="https://img.shields.io/github/stars/${value?.username}?style=${value?.style}&logoColor=${value?.logoColor}&labelColor=${value?.labelColor}&color=${value?.color}"
          style="margin: 0 5px"
        /><img
          align=${value?.align}
          src="https://img.shields.io/github/followers/${value?.username}?style=${value?.style}&logoColor=${value?.logoColor}&labelColor=${value?.labelColor}&color=${value?.color}""
          style="margin: 0 5px"
        />
      </div>`);
    }
    setTimeout(() => {
      setSubmitting(false);
      setIsShow(true);
    }, 2000);
  };

  const handleColorChange = (field: string, color: Color) => {
    form.setFieldsValue({
      [field]: color,
    });
  };

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
                defaultValue="staticBadge"
                style={{ width: 200 }}
                onChange={handleSelectChange}
                options={[
                  { value: 'staticBadge', label: '静态徽章' },
                  { value: 'dynamicBadge', label: '动态徽章' },
                ]}
              />
            }
          >
            {cardType === 'staticBadge' && (
              <Form
                labelAlign="left"
                labelCol={{ span: 4 }}
                form={form}
                initialValues={initialValues}
                onFinish={onSubmit}
              >
                <Form.Item label="标签" name="firstContent">
                  <Input placeholder="标签" />
                </Form.Item>
                <Form.Item label="消息(非必填)" name="lastContent">
                  <Input placeholder="消息" />
                </Form.Item>
                <Form.Item label="link(非必填)" name="link">
                  <Input placeholder="link" />
                </Form.Item>
                <Form.Item label="选择主题" name="style">
                  <Radio.Group name="themeGroup">
                    <Radio value={'flat'}>flat</Radio>
                    <Radio value={'flat-square'}>flat-square</Radio>
                    <Radio value={'plastic'}>plastic</Radio>
                    <Radio value={'for-the-badge'}>for-the-badge</Radio>
                    <Radio value={'social'}>social</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="选择颜色" name="staticColor">
                  <ColorPicker showText onChange={setColorHex} value={colorHex} />
                </Form.Item>
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
            {cardType === 'dynamicBadge' && (
              <Form
                labelAlign="left"
                labelCol={{ span: 6 }}
                form={form}
                initialValues={initialDynamicValues}
                onFinish={onDynamicSubmit}
              >
                <Form.Item label="选择Github徽章类型" name="type">
                  <Select
                    style={{ width: 200 }}
                    options={[
                      { value: 'userAll', label: '用户全部' },
                      { value: 'repoAll', label: '仓库全部' },
                      { value: 'stars', label: 'Stars' },
                      { value: 'followers', label: 'Followers' },
                      { value: 'repoForks', label: '仓库Forks' },
                      { value: 'repoStars', label: '仓库Stars' },
                      { value: 'repoWatchers', label: '仓库Watchers' },
                    ]}
                  />
                </Form.Item>
                <Form.Item label="输入用户名" name="username">
                  <Input />
                </Form.Item>
                <Form.Item label="输入仓库名" name="repoName">
                  <Input />
                </Form.Item>
                <Form.Item label="选择主题" name="style">
                  <Radio.Group name="themeGroup">
                    <Radio value={'flat'}>flat</Radio>
                    <Radio value={'flat-square'}>flat-square</Radio>
                    <Radio value={'plastic'}>plastic</Radio>
                    <Radio value={'for-the-badge'}>for-the-badge</Radio>
                    <Radio value={'social'}>social</Radio>
                  </Radio.Group>
                </Form.Item>
                <Form.Item label="选择徽标颜色" name="logoColor">
                  <ColorPicker
                    showText
                    onChange={(color) => handleColorChange('logoColor', color)}
                  />
                </Form.Item>
                <Form.Item label="选择左侧部分颜色" name="labelColor">
                  <ColorPicker
                    showText
                    onChange={(color) => handleColorChange('labelColor', color)}
                  />
                </Form.Item>
                <Form.Item label="选择右侧部分颜色" name="color">
                  <ColorPicker showText onChange={(color) => handleColorChange('color', color)} />
                </Form.Item>
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
                    navigator.clipboard.writeText(
                      cardType === 'staticBadge' ? staticBadgeUrl : dynamicBadgeUrl,
                    );
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
                {cardType === 'staticBadge' ? staticBadgeUrl : dynamicBadgeUrl}
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
            本页面基于开源项目shields，如需更多配置信息，请访问
            <a href="https://shields.io/" target="_blank" rel="noopener noreferrer">
              shields官网
            </a>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default App;
