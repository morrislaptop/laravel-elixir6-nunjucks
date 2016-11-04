// import CleanCss from 'clean-css';
// import gulpIgnore from 'gulp-ignore';
// import gulpif from 'gulp-if';
// import map from 'vinyl-map';

let gulpNunjucks;

class NunjucksTask extends Elixir.Task {
  constructor(name, paths, options) {
    super(name, null, paths);
    this.options = options;
  }

  loadDependencies() {
    gulpNunjucks = require('gulp-nunjucks-render');
  }

  gulpTask() {
    return (
      gulp
        .src(this.src.path)
        .pipe(this.nunjucks())
        .on('error', this.onError())
        .pipe(this.saveAs(gulp))
        .pipe(this.onSuccess())
    );
  }

  nunjucks() {
    this.recordStep('Nunjucking');

    return gulpNunjucks(this.options);
  }

}

// export default NunjucksTask;
module.exports = NunjucksTask
