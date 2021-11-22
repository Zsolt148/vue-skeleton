require('./bootstrap');

// Import modules...
import { createApp, h } from 'vue';
import { createInertiaApp, Link, Head } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => require(`./Pages/${name}.vue`),
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .component('Link', Link)
            .component('Head', Head)
            .mixin(require('./Use/baseMixin'))
            .mount(el);
    },
});

InertiaProgress.init({delay: 200, color: '#4B5563' });
