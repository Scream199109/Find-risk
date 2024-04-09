'use client'
import {forwardRef} from 'react';
import {classNames} from 'src/shared/lib/classNames';
import styles from './Input.module.scss';

// export type InputType = 'text' | 'number' | 'email' | 'password' | 'tel';

const Input = forwardRef(
  (props, ref) => {
    const {
      id,
      type,
      label,
      name,
      placeholder,
      disabled,
      onChange,
      error,
      helpertext,
      ...rest
    } = props;

    const mods = {
      [styles.incorrect]: !!error
    };

    return (
      <>
        <label className={styles.label} htmlFor={label}>{label}</label>
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          className={classNames(styles.input, mods)}
          autoComplete='new-password'
          ref={ref}
          {...rest}
        />
        <p className={styles.warning}> {helpertext && helpertext} </p>
      </>
    );
  });

Input.displayName = 'Input';

export default Input;
