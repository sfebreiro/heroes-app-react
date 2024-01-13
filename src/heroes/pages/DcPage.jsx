import { Fragment } from 'react';
import { HeroList } from '../components';

export const DcPage = () => {
    return (
      <Fragment>
        <h1>DC Comics</h1>
        <hr />
        <HeroList publisher='DC Comics'/>
      </Fragment>
    )
  }