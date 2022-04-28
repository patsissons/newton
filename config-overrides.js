/* eslint-env node */
module.exports = function override(config) {
  // path aliasing
  config.resolve.modules.push('src', 'packages');

  // react-i18n hack for create-react-app
  const {options} = config.module.rules
    .find(({oneOf}) => Boolean(oneOf))
    .oneOf.find(
      (rule) =>
        rule.test &&
        rule.loader &&
        rule.options &&
        rule.test.test('.tsx') &&
        /babel-loader/.test(rule.loader),
    );
  options.plugins.push('@shopify/react-i18n/babel');

  // console.log('config = ', config);
  return config;
};
