var Links = {
    setColor:function (color){
      // var k = document.querySelectorAll('a');
      // var i = 0;
      // while(i < k.length){
      //       k[i].style.color = color;
      //       i++;
      //     }

      //아래는 함수다.
      $('a').css('color', color);
      }

  }
  
  var Body = {
    setColor:function (color){
      // document.querySelector('body').style.color = color;
      $('body').css('color', color)
      },
    setBackgroundColor:function (color){
      // document.querySelector('body').style.backgroundColor = color;
      $('body').css('backgroundColor', color)
    }
  }
  
  function nightdayhandler(self){
    var target = document.querySelector('body');
      if (self.value === 'night') {
        Body.setBackgroundColor ('black'); // at times randomly fail to work. 
        Body.setColor ('yellow');
        self.value = 'day'
        
        Links.setColor('powderblue');
      } 
      else {
        Body.setBackgroundColor ('white');
        Body.setColor ('black');
        self.value = 'night'
      
        Links.setColor('blue');
      }
    }