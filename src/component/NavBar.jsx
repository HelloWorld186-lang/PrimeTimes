import React from 'react';

function NavBar() {
  return (
    <div className="w-full flex flex-col p-2">
      <div className="w-full text-4xl font-sans font-bold tracking-wider">PrimeTimes</div>
      <div className="w-full text-xs font-sans font-semibold capitalize text-dark_white">
        Stay informed, stay ahead
      </div>
    </div>
  );
}

export default NavBar;
