import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { BsFillMapFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function getItem(label, key, children, type) {
  return {
    key,
    children,
    label,
    type
  };
}
const items = [
  getItem('Pants', 'sub1', [
    getItem(<Link to={'/Shop/pants'}>Black Pant</Link>, '1'),
    getItem(<Link to={'/Shop/pants'}>Jeans</Link>, '2'),
    getItem(<Link to={'/Shop/pants'}>Athleisure Pants & Joggers</Link>, '3'),
    getItem(<Link to={'/Shop/pants'} >Dress Pants</Link>, '4'),
  ]),
  getItem(<Link to={'/Shop/suits'}>Suits</Link>, 'sub2', [
    getItem('Short Sleeves Shirt', '5'),
    getItem('Casual Shirts', '6'),
    getItem('Business Casual Shirts', '7'),
    getItem('Dress & Tuxedo shirts', '8'),
  ],""),
  getItem(<Link to={'/Shop/shorts'} >Shorts</Link>, 'sub4', [
    getItem('Chino Shorts', '13'),
    getItem('Casual Shorts', '14'),
    getItem('Golf Shorts', '15'),
    getItem('Swim Trunks', '16'),
  ],""),
  getItem(<Link to={'/Shop/counsel'}>Counsel</Link>, 'sub5', [
    getItem('Sweater Polos', '17'),
    getItem('Crew & V-necks Sweaters', '18'),
    getItem('Half & Full zip Sweaters', '19'),
    getItem('henleys & Cardigan', '20'),
    getItem('Sweatershirts 5 Fleece', '21'),
  ],""),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4', 'sub5', 'sub6'];
const SiderBar = (children) => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const getUrl =  window.location.pathname

  return (
    <div className='hidden md:block sticky top-0'>
      <div>
        <h1 className='text-lg text-gray-800'> {getUrl}</h1>
      </div>
      <main className=''>
        <Menu
          className=''
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{
            width: 256,
          }}
          items={items}
        />
      </main>
    </div>
  );
};
export default SiderBar;