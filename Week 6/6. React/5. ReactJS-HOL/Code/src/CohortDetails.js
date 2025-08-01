import React from 'react';
import styles from './components/CohortDetails.module.css';

function CohortDetails({ cohort }) {
  return (
    <div className={styles.box} key={cohort.id}>
      <h3
        style={{
          color:
            cohort.currentStatus.toLowerCase() === 'ongoing'
              ? 'green'
              : 'blue'
        }}
      >
        {cohort.cohortCode} – <span>{cohort.technology}</span>
      </h3>
      <dl>
        <dt>Started On</dt>
        <dd>{cohort.startDate}</dd>
        <dt>Current Status</dt>
        <dd>{cohort.currentStatus}</dd>
        <dt>Coach</dt>
        <dd>{cohort.coachName}</dd>
        <dt>Trainer</dt>
        <dd>{cohort.trainerName}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
