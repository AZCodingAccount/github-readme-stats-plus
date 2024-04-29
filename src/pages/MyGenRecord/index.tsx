import { Button, Card, Col, Empty, Row, message } from 'antd';
import React from 'react';

import { useBadgeStore, useCardStore } from '@/stores';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const App: React.FC = () => {
  // 获取信息
  const { infoStatus, topLanguage, delInfoStatus, delTopLanguage } = useCardStore();
  const { staticBadge, delStaticBadge, dynamicBadge, delDynamicBadge } = useBadgeStore();

  // 合并数组
  const badgeList = [...staticBadge, ...dynamicBadge];
  const cardList = [...infoStatus, ...topLanguage];
  cardList.sort((a, b) => {
    const dateA = new Date(a.genTime as string).getTime();
    const dateB = new Date(b.genTime as string).getTime();
    return dateB - dateA;
  });
  badgeList.sort((a, b) => {
    const dateA = new Date(a.genTime as string).getTime();
    const dateB = new Date(b.genTime as string).getTime();
    return dateB - dateA;
  });
  const [messageApi, contextHolder] = message.useMessage();

  const getDate = (dateTimeString: string) => {
    // 将字符串转换为 Date 对象
    const date = new Date(dateTimeString);

    // 使用 Intl.DateTimeFormat 来格式化日期
    const formatter = new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    // 获取格式化的日期时间字符串
    const formattedDateString = formatter.format(date);
    return formattedDateString;
  };

  return (
    <div>
      {contextHolder}
      {/* 徽章 */}
      <Row gutter={[16, 24]}>
        {/* gutter 属性可以设置列与列之间的间距 */}
        {badgeList.map((item) => (
          <Col key={item.id} span={12}>
            {/* span 设置为 8 确保一行三列 */}
            <Card
              title={getDate(item.genTime as string)}
              extra={
                <Button
                  type="primary"
                  onClick={() => {
                    navigator.clipboard.writeText(item.code);
                    messageApi.open({
                      type: 'success',
                      content: '复制成功',
                      duration: 3,
                    });
                  }}
                >
                  复制代码
                </Button>
              }
              actions={[
                <EditOutlined
                  key="edit"
                  onClick={() => {
                    messageApi.error('功能尚未推出，请等待');
                  }}
                />,
                <DeleteOutlined
                  key="delete"
                  onClick={() => {
                    try {
                      if (item.type === 'staticBadge') {
                        delStaticBadge(item.id);
                      } else if (item.type === 'dynamicBadge') {
                        delDynamicBadge(item.id);
                      } else if (item.type === 'githubInfo') {
                        delInfoStatus(item.id);
                      } else if (item.type === 'topLang') {
                        delTopLanguage(item.id);
                      }
                      messageApi.success('删除成功');
                    } catch (error) {
                      messageApi.error('删除失败');
                    }
                  }}
                />,
              ]}
            >
              <ReactMarkdown rehypePlugins={[rehypeRaw]} className="card">
                {item.code}
              </ReactMarkdown>
            </Card>
          </Col>
        ))}
      </Row>
      {/* 卡片 */}
      <br />
      <br />
      <Row gutter={[16, 24]}>
        {/* gutter 属性可以设置列与列之间的间距 */}
        {cardList.map((item) => (
          <Col key={item.id} span={12}>
            {/* span 设置为 8 确保一行三列 */}
            <Card
              title={getDate(item.genTime as string)}
              extra={
                <Button
                  type="primary"
                  onClick={() => {
                    navigator.clipboard.writeText(item.code);
                    messageApi.open({
                      type: 'success',
                      content: '复制成功',
                      duration: 3,
                    });
                  }}
                >
                  复制代码
                </Button>
              }
              actions={[
                <EditOutlined
                  key="edit"
                  onClick={() => {
                    messageApi.error('功能尚未推出，请期待');
                  }}
                />,
                <DeleteOutlined
                  key="delete"
                  onClick={() => {
                    try {
                      if (item.type === 'staticBadge') {
                        delStaticBadge(item.id);
                      } else if (item.type === 'dynamicBadge') {
                        delDynamicBadge(item.id);
                      } else if (item.type === 'githubInfo') {
                        delInfoStatus(item.id);
                      } else if (item.type === 'topLang') {
                        delTopLanguage(item.id);
                      }
                      messageApi.success('删除成功');
                    } catch (error) {
                      messageApi.error('删除失败');
                    }
                  }}
                />,
              ]}
            >
              <ReactMarkdown rehypePlugins={[rehypeRaw]} className="card">
                {item.code}
              </ReactMarkdown>
            </Card>
          </Col>
        ))}
      </Row>
      {badgeList.length === 0 && cardList.length === 0 && (
        <Empty
          description={
            <div>
              <span>你还没有生成的历史记录！</span>
            </div>
          }
        />
      )}
    </div>
  );
};

export default App;
