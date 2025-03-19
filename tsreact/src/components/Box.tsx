interface BoxProps {
  style?: React.CSSProperties; // Optional style prop
}

const Box: React.FC<BoxProps> = ({ style }) => {
  return <div style={style}>Styled Box</div>;
};

export default Box;
