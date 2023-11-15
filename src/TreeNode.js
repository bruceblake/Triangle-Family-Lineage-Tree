export default class TreeNode {

  
    
    constructor(value){
        this.value = value
        this.parent = null
        this.children = []
    }


 
    get getValue(){
        return this.value
    }


    set setValue(value){
        this.value = value
    }

    getChildNode(id){
        for(const child of this.children){
            if(child.getValue == value){
                return child
            }
        }
    }

    addChildToNode(value){
        let child = new TreeNode(value)
        this.children.push(child)
        child.addParentToNode(this)
    }

    addParentToNode(parent){
        this.parent = parent;
    }
    

}