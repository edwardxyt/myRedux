// Mixing jQuery and Node.js code in the same file? Yes please!
$(function(){

	// Node webkit's native UI library. We will need it for later
	var gui = require('nw.gui');

	// Fetch the recent posts on Tutorialzine

	var ul = $('.flipster ul');

	// The same-origin security policy doesn't apply to node-webkit, so we can
	// send ajax request to other sites. Let's fetch Tutorialzine's rss feed:
	for (var i = 0; i < 10; i++) {
		var li = $('<li><img /><a target="_blank"></a></li>');

		li.find('a')
			.attr('href', "http://lorempixel.com/400/200/")
			.text("测试图片");

		li.find('img').attr('src', "http://lorempixel.com/400/200/");

		li.appendTo(ul);
	}
	$('.flipster').flipster({
			style: 'carousel'
		});

	// When an article is clicked, open the page in the system default browser.
	// Otherwise it would open it in the node-webkit window which is not what we want.

	$('.flipster').on('click', 'a', function (e) {

		e.preventDefault();
		
		// Open URL with default browser.
		gui.Shell.openExternal(e.target.href);

	});
});