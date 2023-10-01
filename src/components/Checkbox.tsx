import styles from './Checkbox.module.css'
import { Check } from '@phosphor-icons/react'

type CheckboxProps = {
	isChecked: boolean
	onChange: () => void
}

export function Checkbox({ isChecked, onChange }: CheckboxProps) {
	return (
		<div className={styles.container}>
			<label
				className={`${styles.chk} ${isChecked && styles.checked}`}
				onClick={onChange}
			>
				{isChecked && <Check size={'0.75rem'} weight="bold" />}
			</label>
		</div>
	)
}
