function setup() {
    // put setup code here
    createCanvas(400,400);
    background(120,24,120);

    x1 = 20;
    y1 = 350;

    x2 = 340;
    y2 = 37;

    x = 199;
    y = 199;

    rectwidth = 90;
    rectheight = 30;

    N = 44;
    L = 7;
    P = N - L;
    k = 0;

   }

   function draw() {
     // put drawing code here
     line(x1,y1,x2,y2)

     strokeWeight(2);

     fill(200,150,200);
     rect(x - rectwidth/2,y - rectheight/2,rectwidth,rectheight);

     fill("MAGENTA")
     ellipse(x, y, rectwidth - 30*Math.sin(PI/10*k), rectheight);
     k+=1
     strokeWeight(8);
     fill(0);
     stroke("GREEN")
     arc(x, y-70, rectwidth,rectheight, 0, 2*PI*P/N);

     stroke("BLACK")
     fill(0,0,200);
     arc(x, y+70, rectwidth,rectheight, 0, 2*PI*L/N);

     strokeWeight(2);
     stroke(200);
     for (var j=10; j<=390;j++){
        xs = j
        ys = 350+ 30 * Math.sin(PI/10*xs)
        point(xs, ys)
        }

}