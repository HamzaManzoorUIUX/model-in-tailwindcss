import React from 'react';
import PropTypes from 'prop-types';
import Dropdown from './Dropdown';

const UserList = ({ data }) => {
  return (
    <div className="flex justify-between items-center px-4 py-[8px]">
      <div className="flex">
        <div className={`mr-3 w-[22px] h-[22px] text-white flex items-center justify-center rounded-[11px] text-xs ${data.color}`}>
          {data.name[0].toUpperCase()}
        </div>
        <div className="text-[15px] line-height-[21px] text-stone-700">
          {data.name}
        </div>
      </div>
      {data.is_owner ? (
        <div className="text-[15px] line-height-[21px] text-stone-600">
          Owner
        </div>
      ) : (
        <Dropdown />
      )}
    </div>
  );
};

UserList.propTypes = {
  data: PropTypes.object.isRequired,
};

export default UserList;
