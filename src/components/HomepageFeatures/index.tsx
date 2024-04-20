import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'About',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
      I’ve been working in software since the late nineties, and I’ve been in the platform engineering space for the last 15 years. During that time I’ve also done a bunch of engineering leadership/management and architecture.

      Before that, I did a bunch of different software work, including full-stack and front-end development. I built some of the earliest, large, “rich” web apps (what’s now called a SPA) back before the cool kids liked JavaScript.

      I’m currently working at SimpliSafe as a Distinguished Engineer.
      </>
    ),
  },
  {
    title: 'Contact',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        linkedin: https://www.linkedin.com/in/laban-eilers-38642a/
        github: https://github.com/labaneilers
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
        <Heading as="h3">{title}</Heading>
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
