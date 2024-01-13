import { Fragment } from 'react';
import { HeroList } from '../components';

export const MarvelPage = () => {
    return (
      <Fragment>
        <h1>Marvel Comics</h1>
        <hr />
        <HeroList publisher='Marvel Comics' />
      </Fragment>
    )
  }