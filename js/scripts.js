var palindrome = function(pd) {
  var output = false;
  var length = pd.length
  var left;
  var right;

  if (length % 2 === 0) {
    left = Math.floor(length/2);
    right = Math.ceil(length/2);
  } else { // if odd, sets both left and right to middle point
    left = Math.ceil((pd.length)/2);
    right = left;
  }

  for (var count = 0, looplength = Math.floor(length/2); count <= looplength; count++) {
    if (pd.substring(left, left-1) != pd.substring(right,right-1)) {
      break;
    }

    if (left === 1) {
      output = true;
    }

    left -= 1;
    right += 1;
  }

  return output;
};

$(document).ready(function () {

  $(".show-results").hide();

  $("form#input-form").submit (function (event) {

    var inputSentence = $("textarea#input-sentence").val();
    var outputSentence = palindrome(inputSentence);
    $("#output-paragraph").text(outputSentence);
    $("#show-results").show();

    event.preventDefault();

  });
});
