const TechnologyTag = ({ tech }: { tech: string }) => {
  return (
    <div className="px-2 py-1 border border-solid border-border-primary text-text-secondary bg-bg-header">{tech}</div>
  );
};

export default TechnologyTag;
