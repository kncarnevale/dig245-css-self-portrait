
/* javascript */

// var bauhaus = `
//
// Staaatliches Bauhaus (1919-1933)
//
//       ..-""T-..
//     ,'__   |   '.
//    /   N|  |     !
//   :     '  |      :
//   [      __|      ]
//   :      _I       :
//    !   ___I      /
//     '.  N]     ,'
//       "-"!..--"
//
// `;
//
// console.log(bauhaus);

var num = document.querySelectorAll('div').length;
console.log('Total Number of HTML Elements: ' +num);

//HOW TO DO- when move mouse, get coordinates
  document.addEventListener("mousemove", () => {
    let mousex = event.clientX; // Gets Mouse X
    let mousey = event.clientY; // Gets Mouse Y
    console.log([mousex, mousey]); // Prints data
  });
