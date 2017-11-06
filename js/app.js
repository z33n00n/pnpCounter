$('.upBtn').click(function(){
    $this = $(this);
    var $patent = $this.parent();
    var $data = $patent.find('.ct');
    var i = $data.text();
    var newVal = ++i;
    $data.text(newVal);
  });
  
  $('.dwnBtn').click(function(){
    $this = $(this);
    var $patent = $this.parent();
    var $data = $patent.find('.ct');
    var i = $data.text();
    var newVal = --i;
    if(newVal < 0 ){
      newVal = 0;
    }
    $data.text(newVal);
  });