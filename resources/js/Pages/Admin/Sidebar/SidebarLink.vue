<template>
    <component
        :is="Tag"
        v-if="href"
        :href="href"
        :class="[
            'p-2 flex items-center gap-2 rounded-md transition-colors',
            {
                'dashboard-link':
                    !active,
                'dashboard-link-active':
                    active,
            },
        ]"
    >
        <slot name="icon">
            <EmptyCircleIcon aria-hidden="true" class="flex-shrink-0 w-6 h-6" />
        </slot>

        <span
            class="text-base font-bold"
            v-show="sidebarState.isOpen || sidebarState.isHovered"
        >
            {{ title }}
        </span>
    </component>
    <button
        v-else
        type="button"
        :class="[
            'p-2 flex items-center gap-2 rounded-md transition-colors',
            {
                'dashboard-link':
                    !active,
                'dashboard-link-active':
                    active,
            },
        ]"
    >
        <slot name="icon">
            <EmptyCircleIcon aria-hidden="true" class="flex-shrink-0 w-6 h-6" />
        </slot>

        <span
            class="text-base font-bold"
            v-show="sidebarState.isOpen || sidebarState.isHovered"
        >
            {{ title }}
        </span>
        <slot name="arrow" />
    </button>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'
import { sidebarState } from '@/Composables'

import { EmptyCircleIcon } from '@/Icons/outline.jsx'

export default {
    components: {
        EmptyCircleIcon,
        Link,
    },
    props: {
        href: {
            type: String,
            required: false,
        },
        active: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            required: true,
        },
        icon: {
            required: false,
        },
        withArrow: {
            default: false,
        },
    },
    setup(props) {
        const { href, active, title, icon: Icon, withArrow } = props

        //const Tag = !href ? 'button' : href && !external ? 'a' : Link
        const Tag = href ? Link : 'button';

        return {
            sidebarState,
            Tag,
        }
    },
}
</script>
