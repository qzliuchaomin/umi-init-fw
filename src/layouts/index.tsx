import React, { useState } from 'react';
import type { ProSettings } from '@ant-design/pro-layout';
import ProLayout, { PageContainer, MenuDataItem } from '@ant-design/pro-layout';
import { Link } from 'umi';
import './index.less';

const BasicLayout: React.FC<{}> = (props) => {
  const { route } = props;
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    title: '网站名称',
  });
  // 菜单 loop
  const loopMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
    menus.map(({ icon, children, ...item }) => ({
      ...item,
      children: children && loopMenuItem(children),
    }));

  return (
    <ProLayout
      layout={'top'}
      contentStyle={{ height: 'calc(100vh - 100px)' }}
      menuDataRender={() => loopMenuItem(route.routes)}
      menuItemRender={(item, dom) => <Link to={item.path ?? '/'}>{dom}</Link>}
      {...settings}
    >
      <PageContainer>{props.children}</PageContainer>
    </ProLayout>
  );
};

export default BasicLayout;
