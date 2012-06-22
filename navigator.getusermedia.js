/*! Navigator Getusermedia - v0.1.0 - 6/22/2012
* https://github.com/rwldrn/navigator.getusermedia
* Copyright (c) 2012 Rick Waldron <waldron.rick@gmail.com>; Licensed MIT 
* Truncated heavily by Pete Karl */

(function( window, navigator ) {
  // 2012-03-08 Inspired by https://gist.github.com/f2ac64ed7fc467ccdfe3

  // If unprefix.js is available, use it.
  // https://github.com/rwldrn/unprefix.js
  // Otherwise...
  if ( !window.unprefix ) {
    // Thanks to Mike Taylr for typing this
    // https://gist.github.com/f2ac64ed7fc467ccdfe3
    // normalize window.URL
    if ( !window.URL ) {
      window.URL = window.webkitURL || window.msURL || window.oURL;
    }
    // normalize navigator.getUserMedia
    if ( !navigator.getUserMedia ) {
      navigator.getUserMedia = navigator.webkitGetUserMedia
    }
  }

  // removed a bunch of treatments that resolved issues for old implementations
  // of getUserMedia in Opera/Canary - PK

} (typeof window === "object" && window || this, this.navigator || {} ) );
