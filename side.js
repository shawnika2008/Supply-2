class sides{
    constructor(){
        var option ={
            isStatic: true
        };

        this.bodyBottom = Bodies.rectangle(width/2,630,200,20,option);
        this.width1 = 200;
        this.height1 = 20;

        this.bodyright = Bodies.rectangle(width/2,300,200,20,option);
        this.width2 = 20;
        this.height2 = 100;

        this.bodyleft = Bodies.rectangle(width/2,550,200,20,option);
        this.width3 = 20;
        this.height3 = 100;

        this.color="red";

        World.add(World,this.bodyBottom);
        World.add(World,this.bodyright);
        World.add(World,this.bodyleft);
    }

    display(){
        var bottom = this.bodyBottom.position;
        var boxleft = this.bodyleft.position;
        var boxright = this.bodyright.position;

        rectMode(CENTER);
        fill(this.color);
        rect(bottom.x,bottom.y,this.width1,this.height1);
        rect(boxleft.x,boxleft.y,this.width2,this.height2);
        rect(boxright.x,boxright.y,this.width3,this.height3);
    };
};