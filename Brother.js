import {Dictionary} from './Dictionary'

class Brother {
  constructor(){
    this.name="";
    this.id = 0;
    this.children = ['','','',''];
    this._correctNode;
    this.totalNodes = Dictionary.length();

    }
  }

  refresh () {
    var rand = Math.floor(Math.random()*totalNodes);
    this.id= rand;
    this.name=Dictionary[rand][0];
  }
  refreshChildren(k1,k2,k3,k4){
    //get new kids
    var picker = Math.floor(Math.random()*4);
    //need to do one less, then add one so that name is never added as a category
    var category = (Math.floor(Math.random()*7))+1;
    this.children[picker] = Dictionary[this.id][category];
    this._correctNode = picker;

    for (var i=0;i<4;i++){
      if (i != picker){
        var randomBrother = Math.floor(Math.random()*totalNodes);
        this.children[i] = Dictionary[randomBrother][category];      }
    }
    //send the new kids to school
    k1 = this.children[0];
    k2 = this.children[1];
    k3 = this.children[2];
    k4 = this.children[3];
  }
  checkNode(ident){
    var number = parseFloat(ident.slice(-1));
    if (number == this._correctNode){
      return true;
    } else {
      return false;
    }
  }

}

module.exports = Brother;
