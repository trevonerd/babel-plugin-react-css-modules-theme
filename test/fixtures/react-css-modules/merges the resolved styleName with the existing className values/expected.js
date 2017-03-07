import _getClassName from 'babel-plugin-react-css-modules/dist/browser/getClassName';
import './actual.css';

const _styleModuleImportMap = {
  'random-test': {
    'a': 'actual__a'
  }
};
<div className="apple banana actual__a"></div>;

<div className={this.props.className + ' actual__a'}></div>;

<div className={(Math.random() > 0.5 ? 'apple' : 'banana') + ' actual__a'}></div>;

<div className={this.props.className + (' ' + _getClassName(foo, _styleModuleImportMap))}></div>;
