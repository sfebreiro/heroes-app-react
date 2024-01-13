import { Fragment, useMemo } from 'react';
import { HeroItem } from './';
import { getHeroesById } from '../helpers';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesById(publisher), [publisher]); 

    return (
        <Fragment>
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                    {
                        heroes.map((hero) => (
                            <HeroItem key={hero.id} 
                            {...hero} />
                        ))
                    }
            </div>
        </ Fragment>
    )
}
