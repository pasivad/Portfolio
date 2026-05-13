import { ContainerHeaderProps } from './types';

const ContainerHeader = ({ title, comment, description }: ContainerHeaderProps) => {
  return (
    <div className="flex justify-between items-baseline border-solid border-b border-border-primary pb-4 mb-5">
      <div className="flex items-baseline gap-4">
        <h2 className="text-3xl text-text-primary font-semibold uppercase">{title}</h2>
        <div className="text-xs text-brand-primary">{`// ${comment}`}</div>
      </div>
      <div className="text-xs text-text-muted">{description}</div>
    </div>
  );
};

export default ContainerHeader;
