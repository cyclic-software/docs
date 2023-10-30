import React from 'react';
import {useThemeConfig} from '@docusaurus/theme-common';
import FooterLinks from '@theme/Footer/Links';
import FooterLogo from '@theme/Footer/Logo';
import FooterCopyright from '@theme/Footer/Copyright';
import FooterLayout from '@theme/Footer/Layout';
import CustomFooter from '../../components/CustomFooter'

function Footer() {
  // const {footer} = useThemeConfig();
  // if (!footer) {
  //   return null;
  // }
  // const {copyright, links, logo, style} = footer;
  return (
    <CustomFooter />
  )
}
export default React.memo(Footer);
