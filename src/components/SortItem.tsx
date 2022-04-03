import React, { FC } from 'react';


const SortItem: FC = () => {

  return (
    <div className='sort'>
      <p>Сортировка</p>
      <button>По имени</button>
      <button>По городу</button>
    </div>
  );
}

export default SortItem;