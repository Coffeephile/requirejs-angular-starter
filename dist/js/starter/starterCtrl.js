define(["require","./module"],function(e){function n(e){this.message="Starter module!",e.log("starter module loaded...")}var t=e("./module");return n.$inject=["$log"],t.controller("StarterCtrl",n)});