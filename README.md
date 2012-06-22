glasses-view
============

A fun little project where I play with WebRTC

Setup
=====

Used Chrome Version 22.0.1183.0 canary

enable flag in about:flags
  Enable PeerConnection. Mac, Windows, Linux, Chrome OS
  Enable PeerConnection APIs for WebRTC functionality. More info at webrtc.org.

Referenced https://github.com/rwldrn/idiomatic.js/ to write the JavaScript

viewed this through a local python server **python -m SimpleHTTPServer**

Notes
=====

Helped by http://www.webrtc.org/blog/

Ran into issue like this dude:

...[14:33:56] <Sebah> i have a quick question: I'm trying to run a local file into a web page ( ie: <source type="video/mp4" src="file:///O:/test.mp4"></source> ) and Chrome throws back the following error: **Not allowed to load local resource: file:///O:/test.mp4**. Is there a way to tackle this...

To fix, switch from directly referencing the file to accessing via a web server. I used *python -m SimpleHTTPServer*

Found a glasses person on flickr (creative commons)
http://www.flickr.com/photos/studiosushi/3942866754/

CSS Tweaks
==========

flip the video with css using transform: scaleX(-1)

tweak the rotation slightly for effect with rotate(2deg)

using multiple transform properties in canary required the -webkit prefix. *transform: scaleX(-1) rotate(2deg)* didn't work.