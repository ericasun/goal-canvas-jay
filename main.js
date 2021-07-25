let canvas = document.getElementById("canvas");
canvas.width = document.documentElement.clientWidth
canvas.height = document.documentElement.clientHeight

let ctx = canvas.getContext("2d");
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'blue';
ctx.lineWidth = 5;
ctx.lineCap = "round";

/**
* 脸型外层轮廓
*/
// ctx.beginPath();
// ctx.moveTo(180,220);
// ctx.bezierCurveTo(240,700,  620,720, 750,358);
// ctx.moveTo(180,220);
// ctx.bezierCurveTo(300,80,  600,80, 750,200);
// ctx.lineTo(750,358);
// ctx.strokeStyle = '#c69253';
// ctx.stroke();
// ctx.fillStyle= '#c69253';
// ctx.fill();
//
// /**
//  * 脸型阴影轮廓
//  */
// ctx.beginPath();
// ctx.moveTo(238,240);
// ctx.bezierCurveTo(250,710,  620,680, 720,342);
// ctx.moveTo(238,240);
// ctx.bezierCurveTo(300,180,  600,160, 720,342);
// ctx.strokeStyle = '#f8d4aa';
// ctx.stroke();
// ctx.fillStyle= '#f8d4aa';
// ctx.fill();
//
// /**
//  * 眉毛
//  * */
// ctx.beginPath();
// ctx.moveTo(285,150);
// ctx.lineTo(449,255);
// ctx.lineTo(446,260);
// ctx.lineTo(280,190);
// ctx.closePath();
//
// ctx.moveTo(552,240);
// ctx.lineTo(670,190);
// ctx.lineTo(690,230);
// ctx.lineTo(555,255);
// ctx.closePath();
// ctx.strokeStyle = 'black';
// ctx.stroke();
// ctx.fillStyle = 'black';
// ctx.fill();
//
// /**
//  * 眼睛
//  */
//
// /**
//  * 左眼
//  */
// ctx.strokeStyle = 'black';
// ctx.beginPath();
// ctx.moveTo(282,220);
// ctx.bezierCurveTo(350,220,  380,240, 408,252);
// ctx.bezierCurveTo(410,253,  408,254, 405,255);
// ctx.lineTo(386,248);
// ctx.bezierCurveTo(370,290,  295,292,312,234);
// ctx.lineTo(282,228);
// ctx.closePath();
// ctx.stroke();
//
// /**
//  * 右眼
//  */
// ctx.moveTo(574,266);
// ctx.bezierCurveTo(650,255,  670,270, 680,285);
// ctx.bezierCurveTo(675,290,  670,285,  664,282);
// ctx.bezierCurveTo(650,320,  600,330,  590,275);
// ctx.lineTo(574,275);
// ctx.bezierCurveTo(572,268,  572,272,  574,266);
// ctx.stroke();
//
// ctx.fillStyle = 'black';
// ctx.fill();
//
// /**
//  * 嘴巴
//  */
// ctx.beginPath();
// ctx.lineWidth = 12;
// ctx.moveTo(382,480);
// ctx.bezierCurveTo(420,482,  500,482, 542,502);
// ctx.strokeStyle = 'black';
// ctx.stroke();
//
// ctx.beginPath();
// ctx.lineWidth = 30;
// ctx.moveTo(408,526);
// ctx.bezierCurveTo(450,538,  480,538, 506,532);
// ctx.strokeStyle = '#c88f58';
// ctx.stroke();
//
// ctx.beginPath();
// ctx.lineWidth = 12;
// ctx.moveTo(420,530);
// ctx.bezierCurveTo(450,540,  480,540, 494,538);
// ctx.strokeStyle = 'black';
// ctx.stroke();
//
//
// /**
//  * 腮红
//  */
// ctx.beginPath();
// ctx.moveTo(268,310);
// ctx.bezierCurveTo(280,285,  340,290, 352,320);
// ctx.bezierCurveTo(350,370,  270,352, 268,310);
// ctx.strokeStyle = '#f3c18c';
// ctx.stroke();
//
// ctx.moveTo(598,340);
// ctx.bezierCurveTo(600,330,  660,330, 672,336);
// ctx.bezierCurveTo(672,340,  684,335, 686,360);
// ctx.bezierCurveTo(680,395,  600,390, 586,362);
// ctx.bezierCurveTo(580,358,  588,344, 598,340);
// ctx.strokeStyle = '#f1bc86';
// ctx.stroke();
//
// ctx.fillStyle = '#f1bc86';
// ctx.fill();
//
// /**
//  *  表情
//  */
// ctx.beginPath();
// ctx.lineWidth = 10;
// ctx.moveTo(282,304);
// ctx.lineTo(268,314);
// ctx.moveTo(312,318);
// ctx.lineTo(306,325);
// ctx.moveTo(350,322);
// ctx.lineTo(351,331);
// ctx.moveTo(610,350);
// ctx.lineTo(602,360);
// ctx.moveTo(636,350);
// ctx.lineTo(638,360);
// ctx.moveTo(667,348);
// ctx.lineTo(674,353);
// ctx.strokeStyle = 'black';
// ctx.stroke();
//
// /**
//  * 头发
//  */
// ctx.beginPath();
// ctx.moveTo(748,176);
// ctx.bezierCurveTo(600,35,  170,32, 125,250);
// ctx.stroke();
//
// /**
//  * 左边的头发
//  */
// ctx.bezierCurveTo(135,265,  145,260, 145,240);
// ctx.bezierCurveTo(155,220,  155,255, 176,230);
// ctx.bezierCurveTo(175,250,  180,265, 182,280);
// ctx.bezierCurveTo(185,285,  195,285, 200,270);
// ctx.bezierCurveTo(190,240,  210,215, 228,200);
// ctx.bezierCurveTo(240,220,  250,230, 268,235);
// ctx.bezierCurveTo(270,220,  262,210, 255,185);
// ctx.lineTo(258,183);
// ctx.bezierCurveTo(260,200,  280,220, 290,238);
// ctx.bezierCurveTo(285,230,  280,200, 275,175);
// ctx.lineTo(290,165);
// ctx.bezierCurveTo(300,190,  360,260, 388,275);
// ctx.bezierCurveTo(360,260,  330,170, 320,152);
// ctx.lineTo(330,148);
// ctx.bezierCurveTo(360,200,  380,240, 448,258);
// ctx.bezierCurveTo(380,210,  370,170, 355,150);
// ctx.lineTo(359,149);
// ctx.bezierCurveTo(380,180,  415,220, 428,228);
// ctx.bezierCurveTo(430,210,  420,190, 405,165);
// ctx.stroke();
//
// // /**
// //  * 中间的头发
// //  */
// // ctx.lineTo(408,162);
// // ctx.bezierCurveTo(436,210,  472,240, 495,250);
// // ctx.bezierCurveTo(490,240,  470,220, 460,190);
// // ctx.bezierCurveTo(460,180,  482,250, 565,285);
// // ctx.bezierCurveTo(520,240,  510,180,  510,155);
// // ctx.stroke();
//
// /**
//  * 右边的头发
//  */
// ctx.lineTo(514,156);
// ctx.bezierCurveTo(520,200,  550,260, 566,272);
// ctx.bezierCurveTo(535,240,  525,180,  520,155);
// ctx.lineTo(538,158);
// ctx.bezierCurveTo(550,200,  580,240, 628,280);
// ctx.bezierCurveTo(590,240,  580,190,  582,175);
// ctx.lineTo(592,176);
// ctx.bezierCurveTo(600,200,  640,260, 675,285);
// ctx.bezierCurveTo(640,260,  610,200, 602,180);
// ctx.lineTo(620,190)
// ctx.bezierCurveTo(650,230,  670,280, 702,295);
// ctx.bezierCurveTo(705,290,  690,260, 678,240);
// ctx.lineTo(680,238)
// ctx.bezierCurveTo(690,250,  700,270, 718,280);
// ctx.bezierCurveTo(735,290,  750,300, 750,370);
// ctx.lineTo(750,370);
// ctx.closePath();
// ctx.strokeStyle = 'black';
// ctx.stroke();
// ctx.fillStyle = 'black';
// ctx.fill();
//
// /**
// * 帽子
// */
// ctx.beginPath();
// ctx.moveTo(90,0);
// ctx.bezierCurveTo(80,30,  80,100, 102,212);
// ctx.bezierCurveTo(75,260,  85,330, 160,380);
// ctx.bezierCurveTo(190,620,  370,740, 570,680);
// ctx.bezierCurveTo(600,670,  720,630, 750,555);
// ctx.lineTo(750,445);
// ctx.bezierCurveTo(700,570,  620,635, 478,670);
// ctx.bezierCurveTo(420,660,  200,560, 176,230);
// ctx.bezierCurveTo( 155,255,155,220, 145,240);
// ctx.bezierCurveTo(145,260,  135,265, 125,250);
// ctx.bezierCurveTo(170,32,  600,35, 750,176);
// ctx.lineTo(750,0);
// ctx.closePath();
// ctx.strokeStyle = 'red';
// ctx.stroke();
// ctx.fillStyle = 'red';
// ctx.fill();
//
// /**
//  * 下巴这里的黑色阴影
//  */
// ctx.beginPath();
// ctx.moveTo(192,280);
// ctx.bezierCurveTo(220,560, 420,660, 478,665);
// ctx.bezierCurveTo(620,635,  700,570, 750,444);
// ctx.lineTo(750,370);
// ctx.bezierCurveTo(620,710,  260,690, 192,280);
// ctx.strokeStyle = 'black';
// ctx.stroke();
// ctx.fillStyle = 'black';
// ctx.fill();


/**
 * 衣服
 */

/**
 * 左边衣服
 */

