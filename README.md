# clean-url-copy

Quickly grab a clean URL of your current tab to share with others!

This extensions provides a one-click button to copy the current tab's URL to
your clipboard.

All query string parameters are removed except for the "q=" parameter.

## Examples

* `http://google.com` ==> `http://google.com`
* `http://google.com/extensions?id=123` ==> `http://google.com/extensions`
* `http://google.com?id=123&q=clean+url+copy` ==>
  `http://google.com?q=clean+url+copy`

## TODO

* Add options page.
* Allow toggle for inclusion of `http://`.
* Allow toggle for inclusion of `q=` query parameter.
* Implement keyboard shortcut.
