import React, {type ReactNode} from 'react';
import NavbarLayout from '@theme/Navbar/Layout';
import NavbarContent from '@theme/Navbar/Content';
import { useLocation } from '@docusaurus/router';
import OriginalNavbar from '@theme-original/Navbar';

export default function NavbarWrapper(props) {
  const { pathname } = useLocation();
  // скрываем navbar только на главной ("/")
  if (pathname === '/' || pathname === '/ru/' || pathname === '/zh-Hans/') {
    return null;
  }
  return <OriginalNavbar {...props} />;
}
