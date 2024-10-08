import React from "react";
import styles from "./FilterContainer.module.css";

export default function FilterContainer({ filter }) {
  return (
    <div className={styles.containerHead}>
      {/* This will create a scrollable horizontal list of filters */}
      <ul className={styles.filterList}>
        {filter.map((val, ind) => (
          <li key={ind} className={styles.filterItem}>
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
}
