import React, { useState } from 'react';

export default function Task() {
  interface ToDo {
    id: number,
    task: string,
    done: boolean,
  }

  const [status, setStatus] = useState(false);
  const firstTask: ToDo = {
    id: 1,
    task: 'Start learning',
    done: status,
  };

  return (
    <div>
      <form>
        <label htmlFor="first">
          <input type="checkbox" name="first" id="first" onClick={(e) => {
             const target = e.target as HTMLInputElement;
             target.checked ? setStatus(true) : setStatus(false);
          }
          } />
          First task: 
          { firstTask.done ? <span> true</span> : <span> false</span> }
        </label>
      </form>
    </div>
  );
}
