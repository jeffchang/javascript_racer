function Player(name) {this.name = name, this.position = 0};

Player.prototype.update_player_position = function() {this.position = this.position + 1;};

function ResetBoard() {
  player1.position = 0;
  player2.position = 0;
  $("#player1_strip").empty();
  $("#player2_strip").empty();
};

function createGame() {
  for (n = 1; n < 30; n++) {
    $("<td></td>").appendTo("#player1_strip");
    $("<td></td>").appendTo("#player2_strip");
  };
  player1 = new Player(''+$("#player1_strip th:eq(0)").text()+'');
  player2 = new Player(''+$("#player2_strip th:eq(0)").text()+'');
}

$(document).ready(function() {

  setTimeout(function() {
    $('#myModal').reveal().trigger('click');
  },10);

  var checkit = window.check_var;
  
  if(checkit === undefined) {
    createGame();

    $(document).on('keyup', function(event) {
      if((event.which == 83) && (player1.position < 29) && (player2.position < 29)) {
        window.time = window.time || $.now();
        $("#player1_strip td:eq("+player1.position+")").removeClass("active");
        player1.update_player_position();
        $("#player1_strip td:eq("+player1.position+")").addClass("active");
      }
      else if((event.which == 67) && (player1.position < 29) && (player2.position < 29)) {
        $("#player2_strip td:eq("+player2.position+")").removeClass("active");
        player2.update_player_position();
        $("#player2_strip td:eq("+player2.position+")").addClass("active");
      }
      if(player1.position == 29) {
        var time = (parseInt($.now()) - parseInt(window.time)) / 1000;
        var data = "winner="+player1.name+"&time="+time+"";
        $.post('/winner', data, function(response) {
          $("#gamebox").append(response).fadeIn();
        });
        player1.position = 30;
        player2.position = 30;
        alert(""+player1.name+" wins!  Time: "+time+" seconds");
      }
      else if(player2.position == 29) {
        var time = (parseInt($.now()) - parseInt(window.time)) / 1000;
        var data = "winner="+player2.name+"&time="+time+"";
        $.post('/winner', data, function(response) {
          $("#gamebox").append(response).fadeIn();
        });
        player1.position = 30;
        player2.position = 30;
        alert(""+player2.name+" wins!  Time: "+time+" seconds");
      }
    });
    window.check_var = 1;
  }
});
