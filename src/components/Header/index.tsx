import React, { useEffect } from 'react';
import { devDependencies } from '../../../package.json';
import styles from './index.module.scss';
// 导入图片
import logoStr from '@assets/imgs/picture.jpeg';
import { ReactComponent as ReactLogo } from '@assets/icons/logo.svg';

export function Header() {
  useEffect(() => {
    const img = document.getElementById('logo') as HTMLImageElement;
    img.src = logoStr;
  });
  return (
    <div className={`p-20px text-center ${styles.header}`}>
      <h1 className="font-bold text-2xl mb-2">
        vite version: {devDependencies.vite}
      </h1>
      <img id="logo" className="m-auto mb-4 w-200px" alt="" />
      <ReactLogo />
    </div>
  );
}
