function game(player1 , player2) {
    if (player1 == player2) {
        console.log("Seri");
      }
      else {
        if (player1 == "Batu" && player2 == "Kertas"){
          console.log("Player 1 Kalah");
          console.log("Player 2 Menang");
        }
        else {
          if (player1 == "Kertas" && player2 == "Batu"){
            console.log("Player 1 Menang");
            console.log("Player 2 Kalah");
          }
          else {
            if (player1 == "Batu" && player2 == "Gunting"){
              console.log("Player 1 Menang");
              console.log("Player 2 Kalah");
            }
            else {
              if (player1 == "Gunting" && player2 == "Batu"){
                 console.log("Player 1 Kalah");
                   console.log("Player 2 Menang");
              }
              else {
                if (player1 == "Kertas" && player2 == "Gunting"){
                   console.log("Player 1 Kalah");
                     console.log("Player 2 Menang");
                }
                else {
                  if (player1 == "Gunting" && player2 == "Kertas"){
                     console.log("Player 1 Menang");
                      console.log("Player 2 Kalah");
                  }
                }
              }
            }
          }
        }
      }
    }
console.log("----------HASIL PERTANDINGAN----------");
game("Batu","Gunting")
