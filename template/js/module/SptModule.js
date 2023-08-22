export default function SptModule() {
    $(document).ready(function() {
        $(".fblog-inner .fblog-img").eq(0).addClass("show"); 
        $(".fblog-link-js").hover(
            function() {
                // Sử dụng $(this) để xác định phần tử liên quan
                $(".fblog-inner .fblog-img").eq(0).removeClass("show"); 
                $(this).parent(".fblog-gr").parent(".fblog-inner").find(".fblog-img").addClass("show");
            },
            function() {
                $(this).parent(".fblog-gr").parent(".fblog-inner").find(".fblog-img").removeClass("show");
                $(".fblog-inner .fblog-img").eq(0).addClass("show"); 
            }
          );
      });
}
