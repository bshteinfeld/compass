'use strict';

require('babel-register')({
  extensions: ['.jsx'],
  ignore: false
});

const ComponentRegistry = require('./lib/component-registry');
module.exports = ComponentRegistry;
module.exports.ComponentRegistry = ComponentRegistry;
module.exports.ArrayElement = require('./lib/component/element/array-element');
module.exports.DateElement = require('./lib/component/element/date-element');
module.exports.ObjectElement = require('./lib/component/element/object-element');
module.exports.StringElement = require('./lib/component/element/string-element');
module.exports.ElementFactory = require('./lib/component/element/factory');
module.exports.Element = require('./lib/component/element');
module.exports.ExpandableElement = require('./lib/component/expandable-element');
module.exports.Field = require('./lib/component/field');
module.exports.Flexbox = require('./lib/component/flexbox');
module.exports.FormGroup = require('./lib/component/form-group');
module.exports.FormInput = require('./lib/component/form-input');
module.exports.FormItem = require('./lib/component/form-item');
module.exports.FormOption = require('./lib/component/form-option');
module.exports.FormSelect = require('./lib/component/form-select');
module.exports.Form = require('./lib/component/form');
module.exports.GroupItem = require('./lib/component/group-item');
module.exports.Group = require('./lib/component/group');
module.exports.GroupedList = require('./lib/component/grouped-list');
