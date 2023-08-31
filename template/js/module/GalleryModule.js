export default function gallery() {
  $(".Gallery").each(function () {
    const $this = $(this);
    const $item = $this.find(".gItem");
    $(function () {
      $this.lightGallery({
        selector: $item,
        thumbnail: true,
        zoom: true,
      });
    });
  });
}
