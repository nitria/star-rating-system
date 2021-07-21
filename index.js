$("input").click(() => {
  if ($("#star1").is(":checked")) {
    $("p").html(`Awesome ${String.fromCodePoint(128525)}`);
  } else if ($("#star2").is(":checked")) {
    $("p").html(`Very Good ${String.fromCodePoint(128522)}`);
  } else if ($("#star3").is(":checked")) {
    $("p").html(`Good ${String.fromCodePoint(128528)}`);
  } else if ($("#star4").is(":checked")) {
    $("p").html(`Bad ${String.fromCodePoint(128530)}`);
  } else if ($("#star5").is(":checked")) {
    $("p").html(`Very Bad ${String.fromCodePoint(128544)}`);
  }
});
