    function _afra(){
  
        let _t = new Date()
        let _h = _t.getHours()
        let _m = _t.getMinutes()
        let _s = _t.getSeconds()
        
        let _time = document.getElementById('time')

        _time.innerHTML = _h + ' : ' + _m + ' : ' + _s;
 
        if(_h<10){
            _time.innerHTML = '0' + _h + ' : ' + _m + ' : ' + _s;
        }
        if(_m<10){
            _time.innerHTML = _h + ' : ' + '0' + _m + ' : ' + _s;
        }
        if(_s<10){
            _time.innerHTML = _h + ' : ' + _m + ' : ' + '0' + _s;
        }
       
        setTimeout(_afra, 1000)
    }
    _afra()