import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    Svg: React.ComponentType<React.ComponentProps<'image'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'OhCar-APP下载',
        Svg: () => <img  className={styles.featureSvg} width={200} src={require('@site/static/img/ohcar-logo.png').default} alt="OhCar Logo"/>,
        description: (
            <>
                点击下载OhCar-APP到你的手机,我们同时支持了<code>Android</code>和<code>iOS</code>两个平台.开始深度体验OhCar的功能吧!
            </>
        ),
    },
    {
        title: '官方公众号',
        Svg: require('@site/static/img/logo.svg').default,
        description: (
            <>官方微信公众号,关注我们获取最新的动态和资讯.通知为用户提供了微信端的线报消息推送通知能力.不容错过,扫码体验吧~
            </>
        ),
    },
    {
        title: '官方小红书🍠',
        Svg: () => <img width={200} src={require('@site/static/img/xhs.jpg').default} alt="OhCar Logo"/>,

        description: (
            <>
                官方的小红书账号,在这里我们会分享一些关于OhCar的一些小技巧和小知识.欢迎关注我们的小红书账号,一起来学习吧!

            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
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
