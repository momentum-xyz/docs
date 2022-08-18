import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'The best thing since sliced bread!',
    Svg: require('@site/static/img/flamingo_white.svg').default,
    description: (
      <>
        Cat ipsum dolor sit amet, jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed cereal boxes make for five star accommodation.
      </>
    ),
  },
  {
    title: 'Inconceivable!',
    Svg: require('@site/static/img/flamingo_white.svg').default,
    description: (
      <>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae imperdiet tortor. Aliquam egestas ipsum non dolor suscipit, in suscipit urna tempus.
      </>
    ),
  },
  {
    title: '42',
    Svg: require('@site/static/img/flamingo_white.svg').default,
    description: (
      <>
         Prejudice philosophy truth superiority disgust snare will.
         Moral enlightenment law dead right hatred insofar superiority ultimate value mountains law.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
