# z-govuk-plugin-example

This is part of a demo of the plugin hooks for GOVUK.  

## Usage

1. Clone https://github.com/hmrc/govuk_prototype_kit, `cd govuk_prototype_kit` and `git checkout extensions`
2. Create an HTML file as `app/views/playground.html` with contents:
```nunjucks
{% from 'demo-feature/macro.njk' import demoFeature %}
{% extends 'layout.html' %}

{% block content %}
<main id="content">
  {{ demoFeature() }}
</main>
{% endblock %}

```
3. `npm install --save https://github.com/yagni-digital/govuk-plugin-example.git`
4. `npm install && npm start`
5. Visit http://localhost:3000/playground and see the demo feature, click it to see the JS behaviour that's been added.

## Next steps

a) Visit https://github.com/yagni-digital/a-govuk-plugin-example and see how the overrides work, you'll be rewarded with a kitten picture  
b) Look into how the paths are used, details below

### Notes on URLs

The prototype kit will give URL paths to some of the assets in this project, the attitudes used are:

1. Minimum privalidge - paths are explicitly made public when they're defined in `govuk-prototype-kit-hooks.json`, anything that's not mentioned won't be available.
2. JS/CSS assets are included on a file-by-file basis - there's a JS file which is in this repo but not configured for govuk hooks, it's `b/not-referenced.js` but you won't be able to access that via a URL unless it's mentioned as an asset or script file.
3. Relative paths are maintained - if a CSS file references an image with a relative path and that image is configured via an assets path the relative path will be maintained.
4. Clarity of where assets come from - all assets served from your plugin are under the path `/plugin-assets/your-plugin-name` that gives a clear seperation between what comes from plugins and what's core.
5. The ability to add to `/assets` path - this is not recommended but is required to support the current version of `hmrc-frontend`, shared assets can be overridden which could be good or bad for your use-case.
