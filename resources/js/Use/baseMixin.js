module.exports = {
    methods: {
        //Translations
        __(key, replace = {}) {

            // If locale is hu then replace hu.json key:value
            if (this.$page.props.locale == 'hu') {
                var translation = this.$page.props.language[key]
                    ? this.$page.props.language[key]
                    : key

                Object.keys(replace).forEach(function (key) {
                    translation = translation.replace(':' + key, replace[key])
                });

                return translation
            }

            // Key is the english
            return key;
        },
        isUrl(...urls) {
            return urls.filter(url => this.$page.url.match(url)).length ? true : false;
        },
        route
    }
}
