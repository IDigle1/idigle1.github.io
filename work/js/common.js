(function ($) {
    let $cloud = $('.cloud');
    let $cloudText = $('.cloud p');

    let ccloud = {
        change: function (str, delay = 400) {
            let transition = delay / 1000 + 's';
            $cloud.css('transition', transition);
            $cloud.addClass('fade-up');

            setTimeout(function () {
                $cloudText.text(str);
                $cloud.removeClass('fade-up');
            }, delay + delay / 10);
        },
        startInterval: function (arr, interval) {
            let i = 0;
            setInterval(function () {
                ccloud.change(arr[i][0]);
                i++;
                if (i >= arr.length) i = 0;
            }, interval);
        }
    }

    jQuery.fn.progressBar = function (percent) {
        let currentText = this.find('text').text().trim(),
            current = parseInt(currentText.match(/[0-9]/g).join('')),
            percentageComplete = percent / 100,
            strokeDashOffsetValue = 100 - (percentageComplete * 100),
            progressBar = this.find(" .js-progress-bar");

        progressBar.css("stroke-dashoffset", strokeDashOffsetValue);
        this.find('text').text(`+${(percentageComplete * 100).toFixed(0)}%`);
    };

    window.ccloud = ccloud;

})($);

(function ($) {
    jQuery.fn.sticky = function () {
        let $self = this;

        $self.before('<div class="sticky-anchor"></div>');

        let $window = $(window),
            $document = $(document),
            $anchor = $self.parent().find('.sticky-anchor'),
            fixed = false,
            $tabContent = $self.parent().find('.tab-content');

        $window.on('scroll', function () {
            let docTop = $document.scrollTop(),
                anchorOffsetTop = $anchor.offset().top;

            if (docTop > anchorOffsetTop && docTop < anchorOffsetTop + $tabContent.outerHeight()) {
                if (!fixed) {
                    $anchor.height($self.outerHeight());
                    $self.addClass('fixed');
                    fixed = true;
                }

            } else {
                if (fixed) {
                    $anchor.height(0);
                    $self.removeClass('fixed');
                    fixed = false;
                }
            }
        });

    };
})($);

$('svg#progress-bar').progressBar(85);
$('svg#progress-bar-2').progressBar(57);
$('.costs .nav-tabs-wrap').sticky();
$('.we-do-work .nav-tabs-wrap').sticky();