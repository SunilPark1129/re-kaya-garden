/*
Created by Sunil Park.
Each page adds a design with header set by sending props to this page.
*/

export const Header = ({ props }) => {
  return (
    <header className="header">
      <h1>{props}</h1>
      <span></span>
    </header>
  );
};
