let canvas = document.getElementById("canvas");
canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight

let ctx = canvas.getContext("2d");
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue';
ctx.lineWidth = 5;
ctx.lineCap = "round";

/**
* 脸型
*/
ctx.beginPath();
ctx.moveTo(220,200);
ctx.bezierCurveTo(240,640,  620,700, 760,350);
ctx.stroke();

/**
 * 眉毛
 * */
ctx.beginPath();
ctx.moveTo(320,160);
ctx.lineTo(445,210);
ctx.lineTo(440,215);
ctx.lineTo(320,180);
ctx.closePath();
ctx.stroke();
ctx.fill();

ctx.moveTo(570,230);
ctx.lineTo(670,180);
ctx.lineTo(690,215);
ctx.lineTo(570,235);
ctx.closePath();
ctx.stroke();
ctx.fill();


/**
 * 眼睛
 */
ctx.beginPath();
ctx.moveTo(315,205);
ctx.bezierCurveTo(350,210,  410,220, 430,235);
ctx.stroke();
ctx.moveTo(340,210);
ctx.bezierCurveTo(330,266,  390,266, 402,235);
ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.moveTo(595,250);
ctx.bezierCurveTo(650,245,  670,248, 690,265);
ctx.stroke();
ctx.moveTo(610,250);
ctx.bezierCurveTo(610,300,  660,300, 670,265);
ctx.closePath();
ctx.fill();
ctx.stroke();


/**
 * 嘴巴
 */
ctx.beginPath();
ctx.moveTo(405,450);
ctx.bezierCurveTo(420,450,  500,450, 560,465);
ctx.lineTo(560,475);
ctx.bezierCurveTo(500,460,  420,460, 405,460);
ctx.lineTo(405,450);
ctx.stroke();

ctx.moveTo(442,495);
ctx.bezierCurveTo(450,500,  500,508, 515,503);
ctx.lineTo(515,510);
ctx.bezierCurveTo(490,510,  470,515, 442,502);
ctx.lineTo(442,495);
ctx.stroke();

/**
 *  表情
 */
ctx.moveTo(310,285);
ctx.lineTo(300,295);
ctx.moveTo(340,295);
ctx.lineTo(332,305);
ctx.moveTo(375,302);
ctx.lineTo(375,310);
ctx.moveTo(622,326);
ctx.lineTo(615,336);
ctx.moveTo(646,328);
ctx.lineTo(648,338);
ctx.moveTo(677,328);
ctx.lineTo(684,333);
ctx.stroke();

/**
 * 头发
 */
ctx.beginPath();
ctx.moveTo(170,230);
ctx.bezierCurveTo(220,20,  620,35, 760,170);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(180,210);
ctx.lineTo(220, 215);
ctx.lineTo(230,250);
ctx.bezierCurveTo(240,200,  250,200, 260,180);
ctx.lineTo(295,210);
ctx.lineTo(280, 170);
ctx.lineTo(285, 165);
ctx.lineTo(310, 200);
ctx.lineTo(300, 155);
ctx.lineTo(320, 150);
ctx.bezierCurveTo(340,180,  360,210, 410,250);
ctx.bezierCurveTo(350,180,  360,210, 340,140);
ctx.lineTo(350,135);
ctx.bezierCurveTo(380,180,  410,210, 470,240);
ctx.bezierCurveTo(420,210,  390,180, 380,125);
ctx.bezierCurveTo(380,150,  420,180, 450,210);
ctx.lineTo(440,170);
ctx.bezierCurveTo(460,190,  500,230, 520,230);
ctx.bezierCurveTo(510,230,  500,210, 480,175);
ctx.lineTo(485,170);
ctx.bezierCurveTo(500,210,  570,270, 580,265);
ctx.bezierCurveTo(560,240,  520,180, 530,145);
ctx.lineTo(535,142);
ctx.bezierCurveTo(540,180,  560,230, 584,255);
ctx.bezierCurveTo(560,230,  540,180, 542,142);
ctx.lineTo(558,145);
ctx.bezierCurveTo(570,190,  600,230, 650,255);
ctx.bezierCurveTo(630,250,  580,170, 600,158);
ctx.lineTo(610,160);
ctx.bezierCurveTo(620,200,  660,240, 685,265);
ctx.bezierCurveTo(660,240,  620,200, 615,165);
ctx.lineTo(635,170);
ctx.bezierCurveTo(630,180,  680,260, 713,278);
ctx.bezierCurveTo(710,260,  690,240, 685,220);
ctx.lineTo(695,220)
ctx.bezierCurveTo(710,230,  690,240, 740,270);
ctx.bezierCurveTo(765,290,  755,320, 760,350);
ctx.lineTo(760,170)
ctx.stroke();


/**
* 帽子
*/
ctx.beginPath();
ctx.moveTo(130,0);
ctx.bezierCurveTo(120,30,  120,100, 140,200);
ctx.bezierCurveTo(120,250,  130,300, 200,360);
ctx.bezierCurveTo(230,580,  400,700, 570,640);
ctx.bezierCurveTo(600,630,  690,600, 760,530);
ctx.moveTo(130,0);
ctx.lineTo(760,0);
ctx.lineTo(760,530);
ctx.stroke();


