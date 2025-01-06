import React, { JSX } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

// Add these utility functions at the top
const isWechat = () => {
    if (typeof window !== 'undefined') {
        return /MicroMessenger/i.test(navigator.userAgent);
    }
    return false;
};

const isMobile = () => {
    if (typeof window !== 'undefined') {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
    return false;
};

const isAndroid = () => {
    if (typeof window !== 'undefined') {
        return /Android/i.test(navigator.userAgent);
    }
    return false;
};

const handleDownload = () => {
    if (isWechat()) {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.85);
            z-index: 10000;
            text-align: center;
            color: white;
            font-size: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        `;
        
        // Add arrow pointing to top right
        const arrow = document.createElement('div');
        arrow.style.cssText = `
            position: absolute;
            top: 20px;
            right: 90px;
            width: 0;
            height: 0;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            border-bottom: 40px solid white;
            transform: rotate(45deg);
        `;
        
        overlay.innerHTML = `
            <div style="margin-bottom: 20px; font-size: 24px;">👆</div>
            <div style="font-weight: bold; font-size: 22px;">请点击右上角</div>
            <div style="margin: 15px 0; font-size: 22px;">选择 <span style="color: #00ff00;">"在浏览器打开"</span></div>
            <div style="color: #ffeb3b;">即可下载APP</div>
        `;
        
        overlay.appendChild(arrow);
        overlay.onclick = () => document.body.removeChild(overlay);
        document.body.appendChild(overlay);
        return;
    }

    if (isMobile()) {
        if (isAndroid()) {
            window.location.href = './OhCar1.17.apk';  // Android下载链接
        } else {
            window.location.href = 'https://apps.apple.com/cn/app/ohcar/id1633575009';  // iOS App Store链接
        }
    }
    // PC端不做处理
};

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'image'>>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'OhCar-APP下载',
        Svg: () => (
            <img 
                className={styles.featureSvg} 
                width={200} 
                src={require('@site/static/img/ohcar-logo.png').default} 
                alt="OhCar Logo"
            />
        ),
        description: (
            <>
                点击下载OhCar-APP到你的手机,我们同时支持了<code>Android</code>和<code>iOS</code>两个平台.开始深度体验OhCar的功能吧!
            </>
        ),
    },
    {
        title: '官方公众号',
        Svg: ()=>(
            <img 
                className={styles.featureSvg} 
                width={200} 
                src='https://cdn-img.wycloud.life/i/2025/01/06/677b94dc88e0a.jpg' 
                alt="OhCar Logo"
            />
        ),
        description: (
            <>官方微信公众号,关注我们获取最新的动态和资讯.通知为用户提供了微信端的线报消息推送通知能力.不容错过,扫码体验吧~
            </>
        ),
    },
    {
        title: '官方小红书🍠',
        Svg: () => (
            <a href="http://xhslink.com/a/ayVc9WSgGS62" 
               target="_blank" 
               rel="noopener noreferrer"
            >
                <img width={200} src={'https://cdn-img.wycloud.life/i/2024/11/19/673c3cc72974c.jpg'} alt="OhCar Logo"/>
            </a>
        ),
        description: (
            <>
                官方的小红书账号,在这里我们会分享一些关于OhCar的一些小技巧和小知识.欢迎关注我们的小红书账号,一起来学习吧!
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    const isDownloadFeature = title === 'OhCar-APP下载';
    
    const containerProps = isDownloadFeature ? {
        onClick: handleDownload,
        style: { cursor: 'pointer' }
    } : {};

    return (
        <div className={clsx('col col--4')} {...containerProps}>
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
