<template>
    <div class="inline-flex items-center pl-2">
        <Link :href="route('language', selectable_locale)">
            <icon class="w-5 h-5" :name="selectable_locale" />
        </Link>
    </div>
</template>

<script>
import Icon from '@/Shared/Icon'
import { Link } from '@inertiajs/inertia-vue3'

export default {
    name: "LanguageSelector",
    components: {
        Icon,
        Link
    },

    computed: {
        selectable_locale() {
            if(this.$page.props.locale == 'en') {
                return 'hu';
            }
            return 'en';
        }
    },
}
</script>
