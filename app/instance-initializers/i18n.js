export default {
    name: 'i18n',
      initialize: function({ container }) {
            container.lookup('service:i18n').set('locale', calculateLocale());
              }
}

function calculateLocale() {
  return navigator.language || navigator.userLanguage || 'en';
}
