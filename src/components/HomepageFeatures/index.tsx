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
        We're Odyssey, we're building Momentum - an open source, decentralized 3D social action medium for digital societies.
      </>
    ),
    link: "/wat-is"
  },
  {
    title: 'Developers',
    Svg: require('@site/static/img/flamingo_white.svg').default,
    description: (
      <>
          Build the Momentum open-source web3 metaverse stack for digital societies with us.
      </>
    ),
    link: "/wat-is"
  },
  {
    title: 'Community',
    Svg: require('@site/static/img/flamingo_white.svg').default,
    description: (
      <>
         Create your own unique metaverse experience with the Momentum stack (coming soon).
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
