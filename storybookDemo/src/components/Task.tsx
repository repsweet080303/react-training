import React from 'react';
import './task.css';

interface TaskProps {
  task: {
    id: string;
    title: string;
    state: string;
  };

  onAchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({
  task: { id, title, state },
  onAchiveTask,
  onPinTask,
}) => {
  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor='checked'
        aria-label={`archiveTask-${id}`}
        className='checkbox'
      >
        <input
          type='checkbox'
          disabled={true}
          name='checked'
          id={`archiveTask-${id}`}
          checked={state === 'TASK_ARCHIVED'}
        />
        <span className='checkbox-custom' onClick={() => onAchiveTask(id)} />
      </label>
      <label htmlFor='title' aria-label={title} className='title'>
        <input
          type='text'
          value={title}
          readOnly={true}
          name='title'
          placeholder='Input title'
        />
      </label>

      {state !== 'TASK_ARCHIVED' && (
        <button
          className='pin-button'
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  );
};

export default Task;
