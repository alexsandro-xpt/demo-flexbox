var app = new Vue({
  el: '#left',
  data: {
    message: 'Hello Vue!',
    topContent: [
      { type: 'display1', bgColor: '#62cee8', width: '40%', src: 'VU.svg' },
      { type: 'clock', bgColor: '#383838', width: '15%', src: 'ONAIR.svg' },
      { type: 'display2', bgColor: '#62cee8', width: '35%', src: 'RELOGIO.svg', hasElement: true, class:['topdiv1'] },
      { type: 'display3', bgColor: '#62cee8', width: '10%', src: 'RELOGIO.svg' },
    ],
    middleContent: [
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 1 },
    ],
    mixerTracks: [
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 1 },
      { id: 1 },
    ]
  }
});
