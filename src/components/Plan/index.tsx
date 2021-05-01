import { FaCheck } from 'react-icons/fa';

import { useThemeContext } from '../../contexts/ThemeContext';
import { ButtonRadius } from '../Layout/ButtonRadius';

import { PlanContainer } from './styles';

type PlanList = {
  title: string,
  items: string[],
  value: string,
}

type PlanProps = {
  plan: PlanList
}

export function Plan({ plan }: PlanProps) {
  const { theme } = useThemeContext();

  return (
    <PlanContainer>
      <div className="top">
        <img src="/static/plan.png" alt="Plan Free" />
        <strong>{plan.title}</strong>
        <ul>
          {plan.items.map((item) => (
            <li key={`${plan.title}${item}`}>
              <FaCheck
                color={theme.colors.colorSecondary}
                size={13}
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bottom">
        <div className="plan">
          <strong>{plan.value}</strong>
          <span> / mo</span>
        </div>

        <ButtonRadius>Select</ButtonRadius>

      </div>
    </PlanContainer>
  );
}