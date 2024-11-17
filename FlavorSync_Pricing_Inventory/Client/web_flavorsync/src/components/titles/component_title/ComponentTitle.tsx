import "./ComponentTitle.scss";

interface ComponentTitleProps {
  title: string;
}

const ComponentTitle = ({ title }: ComponentTitleProps) => {
  return (
    <>
      <div className="title">
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default ComponentTitle;
