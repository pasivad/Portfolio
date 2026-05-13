import ContainerHeader from './ContainerHeader';
import { ContainerProps } from './types';

const Container = ({ id, containerHeader, children }: ContainerProps) => {
  return (
    <div id={id} className="mt-20 scroll-mt-26">
      {containerHeader && <ContainerHeader {...containerHeader} />}
      <div>{children}</div>
    </div>
  );
};

export default Container;
