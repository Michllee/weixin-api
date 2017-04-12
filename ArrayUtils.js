function arrayUtils() {

}
arrayUtils.prototype = {
    typeof:function(s){
        var type = typeof s;
        switch (type) {
            case 'string':
                return 'string';
                break;
        
            case 'boolean':
                return  'boolean';
                break;

            case 'number':
                return 'number';
                break;

            case 'undefined':
                return 'undefined';
                break;

            case 'object':
                if( s instanceof Array){
                    return 'array';
                } else if ( s instanceof Object) {
                    return 'object';
                }else if ( s instanceof Function){
                    return 'function';
                }else if ( s instanceof RegExp){
                    return 'regexp';
                }
                break;
            
        }
    },
    exceLast: function(s, t) {
        var _self = this;
        var stype = _self.typeof(s);
        var ttype = _self.typeof(t);
        
        if( stype == 'array' && ttype == 'array'){
            console.log('yes is array')
        }
        if (s instanceof Array && t instanceof Array) {
            var res = [];
            var data;
            for (var i = 0; i < s.length; i++) {
                for (var j = 0; j < t.length; j++) {
                    if (s[i] == t[j]) {
                        break;
                    } else {
                        data = s[i];
                        if (j == t.length - 1) {
                            res.push(data)
                        }
                    }
                }
            }
            return res;
        }
    }
}
var arrUtils = new arrayUtils();