import styles from './index.scss';

import LeftBar from '../components/LeftBar';

export default function Index() {
  return (
    <div className={styles.container}>
      <LeftBar />
    </div>
  )
}