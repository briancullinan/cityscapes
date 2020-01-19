function getMeta(vm) {
    const { meta } = vm.$options
    if (meta) {
        return typeof meta === 'function'
            ? meta.call(vm)
            : meta
    }
}

const serverMetaMixin = {
    created() {
        const meta = getMeta(this)
        if (meta) {
            this.$ssrContext.meta = meta
        }
    }
}

const clientMetaMixin = {
    mounted() {
        const meta = getMeta(this)
        if (meta) {
            document.getElementsByTagName('meta').forEach((i, el) => el.removeElement())
            document.getElementsByTagName('head').appendChild('<meta name="description" content="' + meta + '" />')
        }
    }
}

export default process.env.VUE_ENV === 'server'
    ? serverMetaMixin
    : clientMetaMixin
