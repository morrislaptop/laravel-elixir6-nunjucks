// import NunjucksTask from './NunjucksTask';
const NunjucksTask = require('./NunjucksTask')

Elixir.extend(
  'nunjucks',
  function(src = 'njk', output, baseDir, options = {}) {
    new NunjucksTask(
      'nunjucks', getPaths(src, baseDir, output), options
    );
  }
);

/**
 * Prep the Gulp src and output paths
 *
 * @param  {string|Array} src
 * @param  {string|null}  basDir
 * @param  {string|null}  output
 * @return {GulpPath}
 */
function getPaths(src, baseDir, output) {
  return new Elixir.GulpPaths()
    .src(src, baseDir || Elixir.config.viewPath)
    .output(output || Elixir.config.publicPath);
}
