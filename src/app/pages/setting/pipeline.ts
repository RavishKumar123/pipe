export class Pipeline {
      id: number
      name: string
      stages = [] 
      
      constructor() {
        this.id = 1;
        this.name = 'pipeline';
        this.stages=['start','analyze','process','end'];
        console.log(this.id,this.name,this.stages);
        
  
    }
    }
