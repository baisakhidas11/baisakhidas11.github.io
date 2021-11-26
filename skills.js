const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C++', 'VLSI','Embedded System',
    'Python', 'Java', 'git',
    'Arduino', 'MATLAB', 'IOT',
    'Electronics', 'SQL',
];

var tagCloud = TagCloud('.content', myTags,{

  // radius in px
  radius: 250,

  // animation speed
  // slow, normal, fast
  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  
  // interact with cursor move on mouse out
  keep: true
  
});

//To change the color of text randomly
var colors2 = ['#400263', '#020a63', '#540806'];
var random_color = colors2[Math.floor(Math.random() * colors2.length)];
document.querySelector('.content').style.color = random_color;