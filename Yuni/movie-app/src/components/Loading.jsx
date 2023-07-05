import React from "react";
import styles from "./Loading.module.css";
import { Hearts } from "react-loader-spinner";

function Loading() {
  return (
    <div className={styles.loading}>
      <Hearts
        className={styles.hearts}
        height="100"
        width="100"
        color="blueviolet"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
export default Loading;
