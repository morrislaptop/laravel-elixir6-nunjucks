# Laravel Elixir Nunjucks

This Laravel Elixir 6 extension allows you to render Nunjucks. Inspired by [laravel-elixir-nunjucks](https://github.com/mrcsmcln/laravel-elixir-nunjucks)

## Installation

```
yarn add laravel-elixir6-nunjucks
```

## Usage

Assuming you write...

```js
elixir(function(mix) {
    mix.nunjucks('public');
});
```

...this will render your `resources/assets/nunjucks/public` folder to `public`.

If you'd like to set a different output directory, you may pass a second argument to the nunjucks() method, like so:

```js
mix.nunjucks('public', 'resources/views')
```
