import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Learn',
    Svg: require('@site/static/img/flamingo_white.svg').default,
    description: (
      <>
        What is Odyssey, who is building Momentum, and how we manage our processes.
      </>
    ),
    link: "/wat-is"
  },
  {
    title: 'Build',
    Svg: require('@site/static/img/flamingo_white.svg').default,
    description: (
      <>
          With us the Momentum open-source web3 metaverse stack for digital societies.
      </>
    ),
    link: "/wat-is"
  },
  {
    title: 'Create',
    Svg: require('@site/static/img/flamingo_white.svg').default,
    description: (
      <>
         Your own unique metaverse experience with the Momentum World Builder (coming soon).
      </>
    ),
    link: "/wat-is"
  },
];

function Feature({title, Svg, description, link}: FeatureItem) {
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
