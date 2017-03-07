import './actual.css';

if (module.hot) {
  module.hot.accept('./actual.css', function () {
    require('./actual.css');
  });
}

<div className="actual__a"></div>;
