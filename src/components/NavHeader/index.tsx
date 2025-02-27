import React from 'react';
import { AppstoreOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { routeConfig } from '@/router';
import { RouteConfig } from '@/router/utils';


console.log('1', routeConfig)


const createMenuItems = (list: RouteConfig[]): any[] => {
  return list.map((item) => {
    if (item.children) {
      return {
        key: item.path,
        label: item.path,
        icon: <AppstoreOutlined />,
        children: createMenuItems(item.children),
      };
    } else {
      return {
        key: item.path,
        label: item.path,
        icon: <AppstoreOutlined />,
      }
    }
  })
}

const items: any = createMenuItems(routeConfig)

const NavHeader = () => {
  const navigate = useNavigate()

  // const onClick: MenuProps['onClick'] = (e) => {
  //   console.log('click ', e);
  //   Navigate()
  // };

  return (
    <Menu
      style={{ height: '100%', overflowY: 'auto' }}
      mode="inline"
      items={items}
      onClick={(e) => {
        console.log('click ', e);
        navigate(e.key)
      }}
    >
    </Menu>
  );
};

export default NavHeader;
