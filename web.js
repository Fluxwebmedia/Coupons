var elms = document.querySelectorAll("[id='clicked']");

for (var i = 0; i < elms.length; i++) {

  elms[i].onclick = function() {

    var category = this.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.value;

    var off = this.previousElementSibling.previousElementSibling.previousElementSibling.value;

    var amount = this.previousElementSibling.previousElementSibling.value;

    var uses = this.previousElementSibling.value;

    console.log(off);

    console.log(amount);

    console.log(uses);

    console.log(category);

    $('.overlaycontent').show();

    var curHeight = $('.overlaycontent').height();

    $('.overlaycontent').css('height', 'auto');

    var autoHeight = $('.overlaycontent').height();

    $('.overlaycontent').height(curHeight).animate({ height: autoHeight }, 500);

    $('.overlay').show();

    $('.overlaycenter h2').html(off + amount + ' OFF');

    $('.overlaycenter p').html(off + amount + ' OFF Your Next Checkout with ' + category);

    $('.overlaycenter span').html('Verified 1 day ago • ' + uses + ' Uses Today');

    var last = category.substring(0, 3);

    console.log(last);

    $('.cpn').html(last + '****');

  };

}

$(".cpnbtn").click(function() {

  $(".cpn").hide();

  $(".cpnbtn").hide();

  $("#progress").show();

  var items = document.querySelectorAll('.progress-item');

  var counters = Array(items.length);

  var intervals = Array(items.length);

  counters.fill(0);

  items.forEach(function(number, index) {

    intervals[index] = setInterval(function() {

      if (counters[index] === parseInt(number.dataset.num)) {

        clearInterval(intervals[index]);

      } else {

        counters[index] += 1;

        number.style.background = "conic-gradient(#990099 calc(" + counters[index] + "%), #d9d9d9 0deg)";

        number.setAttribute('data-value', counters[index] + "%");

        number.innerHTML = counters[index] + "%";

      }

    }, 150);

  });

  setTimeout(function() {

    og_load();

  }, 14000);

});

