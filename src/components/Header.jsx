/*
Created by Sunil Park.
Each page adds a design with header set by sending props to this page.
*/

export const Header = ({ props }) => {
  return (
    <div className="header">
      <h2>{props}</h2>
      <span></span>
    </div>
  );
};
