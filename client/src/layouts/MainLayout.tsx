import { FC } from 'react';
import NavbarMobile from '~/components/Common/NavbarMobile';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
      <NavbarMobile></NavbarMobile>
    </div>
  );
};

export default MainLayout;
