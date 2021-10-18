import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Flexible',
    Svg: require('../../static//img/brand/nodejs.svg').default,
    description: (
      <>
        Launch any nodejs backed http server.
      </>
    ),
  },
  {
    title: 'Powerful',
    Svg: require('../../static/img/brand/express.svg').default,
    description: (
      <>
        Or use middleware based extensions with vanilla express.
      </>
    ),
  },
  {
    title: 'Fast',
    Svg: require('../../static/img/brand/nextjs.svg').default,
    description: (
      <>
        Use the front-end framework that is right for you.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        {/* <h3>{title}</h3> */}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
