/*
Code by: proxy https://github.com/Proxy900)
12/28/17
*/
function Bar() {
  this.val = floor(random(20, height));
  this.width = width / 60;
  this.fill = [255, 255, 255];
  this.show = function() {

    //rect(bars.indexOf(this) * this.width - (width / 2), height - this.val - (height / 2), this.width, this.val);

    push();
    rotateX(-0.05);
    fill(this.fill[0], this.fill[1], this.fill[2]);
    translate(bars.indexOf(this) * this.width - (width / 2), -(this.val / 2) + height / 2 + 30, -50);
    box(this.width, this.val);
    pop();
  }
}
