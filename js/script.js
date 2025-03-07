// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yi.zhou
// Created on: Mar 2025
// This file contains the JS functions for index.html

/**
 * Do basic math.
 */
function doMathClicked() {
  document.getElementById("area-math").innerHTML = "<p>The area is: " + (3 * 5) + " cm².</p>"
  document.getElementById("perimeter-math").innerHTML = "<p>The perimeter is: " + (2 * (3 + 5)) + " cm.</p>"  
}