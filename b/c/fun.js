
window.MY_NAMESPACE = window.MY_NAMESPACE || {}

window.MY_NAMESPACE.demoFeature = function (selector) {
  window.$(selector).on('click', function (e) {
    e.preventDefault();
    window.alert('The behaviour from govuk-plugin-example is used - a lion');
  })
}

window.$(document).on('ready', function () {
  window.MY_NAMESPACE.demoFeature('.demo-feature')
})
