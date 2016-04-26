var bind = function(func,context){return function(){func.apply(context,[].slice.call(arguments,0))}}
