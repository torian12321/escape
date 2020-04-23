import React from 'react';
import classNames from "classnames";
import { ILoader } from "./Loader.interfaces";
import styles from './Loader.module.scss';
// import { useBoolean } from './hooks';

const Loader = ({ className }: ILoader) => (
  <div className={classNames(
    styles.wrapper,
    className
  )}
  >
    
  </div>
);

export { Loader };
