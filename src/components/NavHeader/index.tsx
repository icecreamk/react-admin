import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link, Navigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const items: any = [
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    route: '/test',
    name: 'test'
  },
  {
    key: '2',
    label: 'Navigation 2',
    icon: <MailOutlined />,
    route: '/test',
    name: 'test'
  },
];

const NavHeader: React.FC = () => {
  // const onClick: MenuProps['onClick'] = (e) => {
  //   console.log('click ', e);
  //   Navigate()
  // };

  return (
    <Menu
      style={{ height: '100%', overflowY: 'auto' }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    >
      <Link to={items.route}>{items.name}</Link>
    </Menu>
  );
};

export default NavHeader;
