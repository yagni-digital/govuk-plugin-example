
window.MY_NAMESPACE = window.MY_NAMESPACE || {}

window.MY_NAMESPACE.demoFeature = function (selector) {
  window.$(selector).on('click', function (e) {
    e.preventDefault();
    window.alert('The behaviour from z-govuk-plugin-example is used - a liongit sta');
  })
}

window.$(document).on('ready', function () {
  window.MY_NAMESPACE.demoFeature('.demo-feature')
})