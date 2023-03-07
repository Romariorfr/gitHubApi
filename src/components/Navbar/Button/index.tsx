import './styles.css';

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <div className="btn-container">
      <button type='submit'>{text}</button>
    </div>
  );
};

export default Button;
