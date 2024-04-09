import {forwardRef} from 'react';
import {classNames} from 'src/shared/lib/classNames';
import styles from './Button.module.scss';

export const buttonVariant = {
  clear: 'clear',
  fill: 'fill'
}

export const Button = forwardRef(
  (props, ref) => {
    const {
      className,
      children,
      variant = 'fill',
      disabled,
      fullWidth,
      size = 'm',
      addonLeft,
      addonRight,
      ...otherProps
    } = props;

    const mods = {
      [styles.disabled]: disabled,
      [styles.fullWidth]: fullWidth,
      [styles.withAddon]: Boolean(addonLeft) || Boolean(addonRight),
    };

    return (
      <button
        type="button"
        className={classNames(styles.button, mods, [
          className,
          styles[variant],
          styles[size],
        ])}
        disabled={disabled}
        {...otherProps}
        ref={ref}
      >
        <div className={styles.addonLeft}>{addonLeft}</div>
        {children}
        <div className={styles.addonRight}>{addonRight}</div>
      </button>
    );
  },
);

Button.displayName = 'button';
