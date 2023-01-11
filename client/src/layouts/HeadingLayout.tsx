import { FC } from 'react';
import Heading from '~/components/Common/Heading';

interface IPropsHeadingLayout {
  children: React.ReactNode;
  content: string;
}
const HeadingLayout: FC<IPropsHeadingLayout> = ({ children, content }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default HeadingLayout;
