import styles from './Header.module.css'
import rocketLogo from '../assets/rocket.svg'

export function Header() {
	return (
		<header className={styles.header}>
			<img
				className={styles.logoImg}
				src={rocketLogo}
				alt="To-Do List Logo. A rocket taking off towards the sky."
			/>
			<span className={styles.toSpan}>to</span>
			<span className={styles.doSpan}>do</span>
		</header>
	)
}
