// include all *.js files in the "components" folder but exclude .test files
const components = require.context('./components', true, /^((?!test).)*\.js$/);

components.keys().forEach(components);
