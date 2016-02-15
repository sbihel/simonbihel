;(function () {

    'use strict';

    var i,
        $popoverLinks = document.querySelectorAll('[data-popover]'),
        $popovers = document.querySelectorAll('.popover'),
        $codeSnippets = document.querySelectorAll('.code-content'),
        $shareButtons = document.querySelectorAll('.share-dialog'),
        entityMapObject = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': '&quot;', "'": '&#39;', "/": '&#x2F;'};

    function init() {
        for (i = 0; i < $popoverLinks.length; i++) $popoverLinks[i].addEventListener('mouseover', openPopover);
        //document.addEventListener('mouseout', closePopover);
        for (i = 0; i < $popovers.length; i++) $popovers[i].addEventListener('mouseout', closePopover);
        buildSnippets();
        shareDialog();
    }

    function closePopover() {
        for (i = 0; i < $popovers.length; i++) $popovers[i].classList.remove('popover-open');
        //for (i = 0; i < $popovers.length; i++) {
        //    //window.alert($popovers[i].mouseover);
        //    if (!$popovers[i].mouseover) $popovers[i].classList.remove('popover-open');
        //}
    }

    function openPopover(e) {
        e.preventDefault();
        if (document.querySelector('#popover-'.concat(this.getAttribute('href').slice(1))).classList.contains('popover-open')) {
            document.querySelector('#popover-'.concat(this.getAttribute('href').slice(1))).classList.remove('popover-open');
        }
        else {
            closePopover();
            document.querySelector('#popover-'.concat(this.getAttribute('href').slice(1))).classList.add('popover-open');
            //document.querySelector(this.getAttribute('href')).style.backgroundImage = "url('pattern.svg')";
        }
        e.stopImmediatePropagation();
    }

    function escapeHtml(string) {
        return String(string).replace(/[&<>"'\/]/g, function (s) {
            return entityMapObject[s];
        });
    }

    function buildSnippets() {
        for (i = 0; i < $codeSnippets.length; i++) $codeSnippets[i].innerHTML = escapeHtml($codeSnippets[i].innerHTML);
    }

    function shareDialog() {
        if ($shareButtons && window.innerWidth > 1200) {
            for (i = 0; i < $shareButtons.length; i++) {
                $shareButtons[i].addEventListener('click', function (e) {
                    e.preventDefault();
                    window.open(this.href, 'Share Dialog', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,width=650,height=450,top=' + (screen.height / 2 - 450 / 2) + ',left=' + (screen.width / 2 - 650 / 2));
                });
            }
        }
    }

    init();

}());
