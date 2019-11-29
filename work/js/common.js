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
        ccloud.change(arr[i]);
        i++
        if(i >= arr.length) i = 0;
    },interval);
  }
}