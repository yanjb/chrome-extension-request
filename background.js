// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Simple extension to replace lolcat images from
// http://icanhascheezburger.com/ with loldog images instead.

chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    console.log(info);
    console.log(info.url);
    // Redirect the lolcal request to a random loldog URL.
    // var i = Math.round(Math.random() * loldogs.length);
    return {redirectUrl: "http://127.0.0.1:8080/"};
  },
  // filters
  {
    urls: [
      "<all_urls>"
    ],
    // types: ["image"]
  },
  // extraInfoSpec
  ["blocking", "requestBody"]
);