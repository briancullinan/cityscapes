const camelize = str => str.charAt(0).toUpperCase() + str.slice(1)

// This is a factory function for dynamically creating root-level list views,
// since they share most of the logic except for the type of items to display.
// They are essentially higher order components wrapping ItemList.vue.
export default function createListView (type) {
  return {
    name: 'builder-view',

    props: ['product', 'image'],

    title: function () {
      return camelize(`${this.product}`)
    },

    render (h) {
      console.log(this.product);
      return h(type, { props: { product: this.product, image: this.image }})
    }
  }
}
