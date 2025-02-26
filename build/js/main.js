"use strict";

// const card = document.querySelector(".card");
// const topElement = document.getElementById("top");
//
// topElement.addEventListener("mousemove", (event) => {
//     const centerX = window.innerWidth / 2;
//     const centerY = window.innerHeight / 2;
//
//     const rotateY = -(centerX - event.pageX) / 30;
//     const rotateX = (centerY - event.pageY) / 10;
//
//     card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
// });

var card = document.querySelector(".card");
var angle = 0;
function animateCard() {
  angle += 2.5; // Швидкість руху
  var rotateX = Math.sin(angle * (Math.PI / 180)) * 10; // Коливання по X
  var rotateY = Math.cos(angle * (Math.PI / 180)) * 10; // Коливання по Y

  card.style.transform = "rotateY(".concat(rotateY, "deg) rotateX(").concat(rotateX, "deg)");
  requestAnimationFrame(animateCard);
}
animateCard();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiY2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFuZ2xlIiwiYW5pbWF0ZUNhcmQiLCJyb3RhdGVYIiwiTWF0aCIsInNpbiIsIlBJIiwicm90YXRlWSIsImNvcyIsInN0eWxlIiwidHJhbnNmb3JtIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLE9BQU8sQ0FBQztBQUM1QyxJQUFJQyxLQUFLLEdBQUcsQ0FBQztBQUViLFNBQVNDLFdBQVcsR0FBRztFQUNuQkQsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0VBQ2QsSUFBTUUsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0osS0FBSyxJQUFJRyxJQUFJLENBQUNFLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0VBQ3hELElBQU1DLE9BQU8sR0FBR0gsSUFBSSxDQUFDSSxHQUFHLENBQUNQLEtBQUssSUFBSUcsSUFBSSxDQUFDRSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzs7RUFFeERSLElBQUksQ0FBQ1csS0FBSyxDQUFDQyxTQUFTLHFCQUFjSCxPQUFPLDBCQUFnQkosT0FBTyxTQUFNO0VBRXRFUSxxQkFBcUIsQ0FBQ1QsV0FBVyxDQUFDO0FBQ3RDO0FBRUFBLFdBQVcsRUFBRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKTtcbi8vIGNvbnN0IHRvcEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvcFwiKTtcbi8vXG4vLyB0b3BFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgKGV2ZW50KSA9PiB7XG4vLyAgICAgY29uc3QgY2VudGVyWCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMjtcbi8vICAgICBjb25zdCBjZW50ZXJZID0gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcbi8vXG4vLyAgICAgY29uc3Qgcm90YXRlWSA9IC0oY2VudGVyWCAtIGV2ZW50LnBhZ2VYKSAvIDMwO1xuLy8gICAgIGNvbnN0IHJvdGF0ZVggPSAoY2VudGVyWSAtIGV2ZW50LnBhZ2VZKSAvIDEwO1xuLy9cbi8vICAgICBjYXJkLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGVZKCR7cm90YXRlWX1kZWcpIHJvdGF0ZVgoJHtyb3RhdGVYfWRlZylgO1xuLy8gfSk7XG5cbmNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIik7XG5sZXQgYW5nbGUgPSAwO1xuXG5mdW5jdGlvbiBhbmltYXRlQ2FyZCgpIHtcbiAgICBhbmdsZSArPSAyLjU7IC8vINCo0LLQuNC00LrRltGB0YLRjCDRgNGD0YXRg1xuICAgIGNvbnN0IHJvdGF0ZVggPSBNYXRoLnNpbihhbmdsZSAqIChNYXRoLlBJIC8gMTgwKSkgKiAxMDsgLy8g0JrQvtC70LjQstCw0L3QvdGPINC/0L4gWFxuICAgIGNvbnN0IHJvdGF0ZVkgPSBNYXRoLmNvcyhhbmdsZSAqIChNYXRoLlBJIC8gMTgwKSkgKiAxMDsgLy8g0JrQvtC70LjQstCw0L3QvdGPINC/0L4gWVxuXG4gICAgY2FyZC5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlWSgke3JvdGF0ZVl9ZGVnKSByb3RhdGVYKCR7cm90YXRlWH1kZWcpYDtcblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlQ2FyZCk7XG59XG5cbmFuaW1hdGVDYXJkKCk7XG4iXX0=
