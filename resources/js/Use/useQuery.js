import { toRefs, reactive, watch} from 'vue';
import { Inertia } from "@inertiajs/inertia";

/**
 * @param props
 * @returns {ToRefs<UnwrapNestedRefs<{search: Function, field: *, direction: *}>>}
 */
export function getParams(props) {

    let params = reactive({
        search: props.filters.search,
        field: props.filters.field,
        direction: props.filters.direction,
    });

    return toRefs(params);
}

/**
 * @param params
 * @param routeName
 */
export function getWatch(params, routeName) {
    watch(() => params,
        _.throttle(() => {
            let search = {
                search: params.search.value,
                direction: params.direction.value,
                field: params.field.value,
            };
            let query = _.pickBy(search);
            Inertia.get(route(routeName), query,{ replace: true, preserveState: true, preserveScroll: true });
        }, 200), {
            deep: true
        }
    )
}
