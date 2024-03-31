import { FC } from 'react';
import './Hello.css';

type Props = {
  name: string;
}

export const Hello: FC<Props> = ({ name }) => {
  return <div className={'Hello'}>
    <h1>Hello {name}!</h1>
  </div>;
}
