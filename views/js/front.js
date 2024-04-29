document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelectorAll('.prettyblocks-tns').length > 0) {
        var sliders = document.querySelectorAll('.prettyblocks-tns');
        sliders.forEach(function (slider) {
            tns({
                container: slider,
                items: 1,
                slideBy: 'page',
                autoWidth: true,
                center: true,
                // autoHeight: true,
                autoplay: true,
                nav: false, // disable dots
                controls: false, // disable controls
                autoplayButtonOutput: false,
                mouseDrag: true,
                loop: true,
                rewind: true,
                autoplayTimeout: 4000,
            });
        });
    }

    // faq 
    if (document.querySelectorAll('.prettyblocks-faq').length > 0) {
        const items = document.querySelectorAll(".prettyblocks-faq .accordion button");

        function toggleAccordion() {
            const itemToggle = this.getAttribute('aria-expanded');

            for (i = 0; i < items.length; i++) {
                items[i].setAttribute('aria-expanded', 'false');
            }

            if (itemToggle == 'false') {
                this.setAttribute('aria-expanded', 'true');
            }
        }

        items.forEach(item => item.addEventListener('click', toggleAccordion));
    }
});