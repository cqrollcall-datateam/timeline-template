Tabletop.init({
    key: '1aZuK7Hn_THzCGE0fujCV93CSozfT2FxDtSMaVG3ltiA', //add google sheets key here, this one is from the docs https://datanews.github.io/tik-tok/examples/example-tabletop.html
    simpleSheet: true,
    callback: function(data, tabletop) {
      var tikTok = new TikTok({
        el: 'div.timeline',
        groupBy: "months", //groupBy, groupByDisplay and dataDisplay can be changed to suit your needs. 
        groupByDisplay: "MMMM", 
        dateDisplay: "MMM. D",
        entries: data
      });
    }
  });
  