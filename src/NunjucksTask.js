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

  /**
   * Register file watchers.
   */
  registerWatchers() {
      this.watch(this.src.path)
          .ignore(this.output.path);
  }

  nunjucks() {
    this.recordStep('Nunjucking');

    return gulpNunjucks(this.options);
  }

}

// export default NunjucksTask;
module.exports = NunjucksTask
