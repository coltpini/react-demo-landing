import {Component as ReactComponent} from 'react';
import styles from './Component.css';
import classes from 'classnames';
import Tile from 'colt-demo-tile';

const MainTile = ({img,title,teaser}) => (
    <div className={styles.mainTile}>
        <img src={img} />
        <div className={styles.info}>
            <span className={styles.title}>{title}</span>
            <p className={styles.teaser}>{teaser}</p>
        </div>
    </div>
);

const SocialTile = ({handle, avatar, message}) => (
    <div className={styles.socialTile}>
        <img className={styles.avatar} src={avatar} />
        <div className={styles.tweet}>
            <span className={styles.handle}>{handle}</span>
            <p className={styles.message}>{message}</p>
        </div>
    </div>
);

class Component extends ReactComponent {
    render() {
        const {className, title, tiles, mainTile, socialItems} = this.props;

        return (
            <div className={classes(className, styles.landing)}>
                <h1 className={styles.title}>{title}</h1>
                <MainTile {...mainTile} />
                <ul className={styles.socialList}>
                    {socialItems.map( (item, i) => (
                        <li key={i}><SocialTile {...item} /></li>
                    ))}
                </ul>
                <ul className={styles.tileList}>
                    {tiles.map( (tile,i) => (
                        <li key={i}>
                            <Tile {...tile} />
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Component;
