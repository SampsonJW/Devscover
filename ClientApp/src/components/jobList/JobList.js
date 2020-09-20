import React from 'react';
import './JobList.css';
import JobItem from './JobItem';
function Jobs() {
  const jobClickHandler = (index) => {
    console.log(index);
  };

  let jobs = [
    {
      title: 'Graduate Software Developer',
      date: '20/09/20',
    },
    {
      title: 'Graduate Software Developer 2',
      date: '20/09/20',
    },
    {
      title: 'Graduate Software Developer 3',
      date: '20/09/20',
    },
    {
      title: 'Graduate Software Developer 4',
      date: '20/09/20',
    },
    {
      title: 'Graduate Software Developer 5',
      date: '20/09/20',
    },
  ];
  return (
    <div>
      {jobs.map((job, index) => (
        <JobItem
          key={index}
          id={index}
          title={job.title}
          date={job.date}
          click={(id) => {
            console.log(id);
          }}
        />
      ))}
    </div>
  );
}

export default Jobs;
