import classNames from 'classnames';
import { createElement } from 'react';
import type { FC } from 'react';
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaPlay, FaShoppingCart, FaUser } from 'react-icons/fa';

import * as styles from './Icon.styles';

const Icons = { FaArrowLeft, FaArrowRight, FaCheckCircle, FaPlay, FaShoppingCart, FaUser };

type Props = {
  type: keyof typeof Icons;
  width: number;
  height: number;
  color: string;
};

export const ReactIcon: FC<Props> = ({ color, height, type, width }) => {
  const Icon = createElement(Icons[type]);
  return (
    <span className={classNames(styles.container({ color, height, width }))}>
      <div>{Icon}</div>
    </span>
  );
};
