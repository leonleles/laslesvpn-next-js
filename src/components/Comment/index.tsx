import { FaStar } from 'react-icons/fa';
import { useThemeContext } from '../../contexts/ThemeContext';

import { CommentContainer } from './styles';

type Rate = {
  image: string,
  name: string,
  location: string,
  starts: string,
  comment: string
}

type CommentProps = {
  rate: Rate
}

export function Comment({ rate }: CommentProps) {
  const { theme } = useThemeContext();

  return (
    <CommentContainer>
      <div className="header">
        <div className="wrapper">
          <img src={rate.image} alt="People 1" />
          <div className="origin">
            <strong>{rate.name}</strong>
            <span>{rate.location}</span>
          </div>
        </div>

        <div className="rating">
          <span>{rate.starts}</span>
          <FaStar
            color={theme.colors.colorYellow}
            size={16}
          />
        </div>
      </div>

      <p>“{rate.comment}”.</p>
    </CommentContainer>
  );
}