/*! Navigator Getusermedia - v0.1.0 - 6/22/2012
* https://github.com/rwldrn/navigator.getusermedia
* Copyright (c) 2012 Rick Waldron <waldron.rick@gmail.com>; Licensed MIT 
* Truncated heavily by Pete Karl */

// I removed contextual comments that Rick had in here because I removed
// some code that he was contexualizing. I don't want him to look bad 
// because of my over-eager deletions. - PK

(function( window, navigator ) {
  if ( !window.unprefix ) {
    if ( !window.URL ) {
      window.URL = window.webkitURL || window.oURL;
    }
    if ( !navigator.getUserMedia ) {
      navigator.getUserMedia = navigator.webkitGetUserMedia || {};
    }
  }

  // removed a bunch of treatments that resolved issues for old implementations
  // of getUserMedia in Opera/Canary - PK

} (typeof window === "object" && window || this, this.navigator || {} ) );
