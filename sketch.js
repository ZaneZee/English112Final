var data;

var txt = 'The !!Color!! Dragon is the Best Dragon of all. It has !!Adjective!! !!BodyPart(Plural)!!, and a !!BodyPart!! shaped like a !!Noun!!. It loves to eat !!Animal(Plural)!!, although it will feast on nearly anything. It is !!Adjective2!! and !!Adjective3!!. You must be !!Adjective4!! around it, or you may end up as it`s meal!';

var storyNum;
var entry;

function setup() {
  noCanvas();
  Tabletop.init({
    key: 'https://docs.google.com/spreadsheets/d/11yp0PuUYQ0gww87tSjOz07qnE2Tfp1zuG1DLDnNciIA/edit#gid=1789851580',
    callback: gotData,
    simpleSheet: true
  });

  // var button = createButton('Generate MadLib');
  // button.mousePressed(generate);

}

function replacer(match, pos) {
  return entry[pos];

}


function generate() {
  storyNum = floor(random(0, data.length));
  entry = data[storyNum];
  console.log(entry);
  var madlib = txt.replace(/!!(.*?)!!/g, replacer);
  document.getElementById("baseText").innerHTML = madlib;
}

function gotData(stuff, tabletop) {
  data = stuff;
  var button = createButton('Generate MadLib').position(windowWidth/2-70, windowHeight/2+200);
  button.mouseReleased(generate);
}
