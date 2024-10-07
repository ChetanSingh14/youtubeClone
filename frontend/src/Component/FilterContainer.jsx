import React from "react";
import styles from "./FilterContainer.module.css";
export default function FilterContainer({ filter }) {
  return (
    <div className={styles.ContainerHead}>
      <ul className={styles.Containerlist}>{filter.map((val,ind) => {
        return ( <div className={styles.listDiv}>
          <li key={ind}>{val}</li>
          </div>)
      })}</ul>
    </div>
  );
}