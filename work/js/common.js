let $cloud = $('.cloud');
let $cloudText = $('.cloud p');

let ccloud = {
  change: function(str, delay=400) {
    let transition = delay / 1000 + 's';
    $cloud.css('transition', transition);
    $cloud.addClass('fade-up');
    
    setTimeout(function() {
      $cloudText.text(str);
      $cloud.removeClass('fade-up');
    }, delay + delay / 10);
  },
  startInterval: function(arr, interval) {
    let i = 0;
    setInterval(function() {
        ccloud.change(arr[i][0]);
        i++;
        if(i >= arr.length) i = 0;
    },interval);
  }
}
// var percentageComplete = parseInt($('svg#progress-bar').attr(
//   'data-percent')) / 100;
// var strokeDashOffsetValue = 100 - (percentageComplete * 100);
// var progressBar = $("svg#progress-bar .js-progress-bar");
// progressBar.css("stroke-dashoffset", strokeDashOffsetValue);
// $('svg#progress-bar text').text(`+${percentageComplete * 100}%`);

jQuery.fn.progressBar = function(percent) {
  var currentText = this.find('text').text().trim();
  
  var current = parseInt( currentText.match(/[0-9]/g).join('') );
  console.log(current);
  var percentageComplete = percent / 100;
  var strokeDashOffsetValue = 100 - (percentageComplete * 100);
  var progressBar = this.find(" .js-progress-bar");
  progressBar.css("stroke-dashoffset", strokeDashOffsetValue);

  // function transition(ctx, from, to) {
  //   let delay = from / 1000;
  //   let int = from;
  //   let interval = setInterval(function() {
  //     if(from == to) clearInterval(interval);
  //     if(from < to) int++;
  //     if(from > to) int--;
      
  //     ctx.find('text').text(`+${to}%`);
  //   }, delay);
  // }

  // transition(this, current, percentageComplete * 100);
  this.find('text').text(`+${(percentageComplete * 100).toFixed(0)}%`);
};