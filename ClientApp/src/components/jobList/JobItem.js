import React from 'react';

function JobItem(props) {
  return (
    <div className='jobs-body' onClick={() => props.click(props.id)}>
      <div className='card my-2'>
        <div className='card-body'>
          <div className='job-content'>
            <div className='job-title'>{props.title}</div>
            <div className='job-date'>{props.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobItem;
